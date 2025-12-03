const express = require('express');
const ejs = require('ejs');
const path = require('path');
const compression = require('compression');
require('dotenv').config();
const { startCronJobs } = require('./utils/keepLive');
const imageOptimization = require('./middleware/imageOptimization');

const app = express();
const port = 3002;

//Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Enable GZIP compression for all responses
app.use(compression({
    level: 6, // Compression level (0-9)
    threshold: 1024, // Only compress responses larger than 1KB
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        return compression.filter(req, res);
    }
}));

// Add image optimization middleware before static files
app.use(imageOptimization);

// Serve static files with caching headers
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1y', // Cache static assets for 1 year
    etag: true,
    lastModified: true,
    setHeaders: (res, path) => {
        // Set cache control based on file type
        if (path.endsWith('.html')) {
            res.setHeader('Cache-Control', 'public, max-age=3600'); // 1 hour for HTML
        } else if (path.endsWith('.css') || path.endsWith('.js')) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 1 year for CSS/JS
        } else if (path.match(/\.(jpg|jpeg|png|gif|ico|svg|webp)$/)) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 1 year for images
        }
    }
}));

// Define a route
app.get('/', (req, res) => {
  // Render the 'index.ejs' template
  res.render('index');
});

app.get('/aboutus', (req, res) => {
  res.render('aboutus');
});

app.get('/contactus', (req, res) => {
  res.render('contactus');
});



app.get('/career', (req, res) => {
  res.render('career');
});

app.get('/career_single', (req, res) => {
  res.render('career_single');
});

app.get('/apply', (req, res) => {
  res.render('apply');
});



app.get('/lan', (req, res) => {
  res.render('lan');
});

app.get('/health-check', (req, res) => {
  res.status(200).send('OK');
});

// API health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Backend API is running',
    timestamp: new Date().toISOString()
  });
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/industry', (req, res) => {
  res.render('industry');
});

// Clean URL for specific industry pages, e.g. /industry/healthcare
app.get('/industry/:slug', (req, res) => {
  res.render('industry');
});

// Import blog data
const { blogPosts, getBlogBySlug, getRelatedBlogs, getCategoryCounts } = require('./backend/data/blogData');
const newBlogs = require('./backend/data/newBlogs');

// Merge all blogs
const allBlogPosts = { ...newBlogs, ...blogPosts };

// Custom getAllBlogs function
function getAllBlogs() {
    return Object.values(allBlogPosts);
}

// Custom getBlog function
function getBlog(slug) {
    return allBlogPosts[slug] || null;
}

// Custom category counts
function getCustomCategoryCounts() {
    const counts = { development: 0, cloud: 0, ai: 0, mobile: 0, database: 0, trends: 0 };
    Object.values(allBlogPosts).forEach(blog => {
        if (counts.hasOwnProperty(blog.categorySlug)) counts[blog.categorySlug]++;
    });
    return counts;
}

// Get popular posts sorted by views
function getPopularPosts(excludeSlug = null, limit = 4) {
    return Object.values(allBlogPosts)
        .filter(blog => blog.slug !== excludeSlug)
        .sort((a, b) => {
            // Parse views like "2.4k", "1.8k", "500" etc
            const parseViews = (v) => {
                if (!v) return 0;
                const str = String(v).toLowerCase().replace(/,/g, '');
                if (str.includes('k')) return parseFloat(str) * 1000;
                return parseFloat(str) || 0;
            };
            return parseViews(b.views) - parseViews(a.views);
        })
        .slice(0, limit);
}

// Blog routes
app.get('/blog', (req, res) => {
  const blogs = getAllBlogs();
  const categoryCounts = getCustomCategoryCounts();
  res.render('blog', { blogs, categoryCounts });
});

// Tag colors for blog pages
const tagColors = [
  { bg: '#e8f4ff', color: '#0066cc', border: '#b3d9ff' },
  { bg: '#e6f7e6', color: '#2d7a2d', border: '#b3e6b3' },
  { bg: '#fff4e6', color: '#cc7a00', border: '#ffe0b3' },
  { bg: '#f0e6ff', color: '#6600cc', border: '#d9b3ff' },
  { bg: '#ffe6e6', color: '#cc0000', border: '#ffb3b3' },
  { bg: '#e6f7ff', color: '#0088cc', border: '#b3e6ff' },
  { bg: '#fff0e6', color: '#cc5500', border: '#ffd9b3' },
  { bg: '#e6ffe6', color: '#009900', border: '#b3ffb3' }
];

// Dynamic blog post routes - must come after /blog but before other routes
app.get('/blog/:slug', (req, res) => {
  const { slug } = req.params;
  const blog = getBlog(slug);
  
  if (!blog) {
    return res.status(404).render('404', { 
      message: 'Blog post not found' 
    });
  }
  
  // Get related blogs from merged posts
  let relatedBlogs = [];
  if (blog.relatedPosts) {
    relatedBlogs = blog.relatedPosts.map(s => allBlogPosts[s]).filter(Boolean);
  }
  const categoryCounts = getCustomCategoryCounts();
  const popularPosts = getPopularPosts(slug, 4); // Get top 4 popular posts excluding current
  res.render('blog_single', { blog, relatedBlogs, categoryCounts, popularPosts, tagColors });
});

// Configuring our data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create integrated email service
const nodemailer = require('nodemailer');

// Create transporter for email
const createEmailTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'mail.dataevol.net',
        port: parseInt(process.env.SMTP_PORT) || 465,
        secure: process.env.SMTP_SECURE === 'true' || true,
        auth: {
            user: process.env.SMTP_USER || 'no-reply@dataevol.net',
            pass: process.env.SMTP_PASS || '12!q2h3nR',
        },
        tls: {
            rejectUnauthorized: false,
            ciphers: 'SSLv3'
        }
    });
};

// Contact form API route
app.post('/api/contact/send', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            countryCode,
            phone,
            message
        } = req.body;

        // Basic validation
        if (!firstName || !lastName || !email || !countryCode || !phone || !message) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: firstName, lastName, email, countryCode, phone, message'
            });
        }

        // Create email transporter
        const transporter = createEmailTransporter();
        
        // Prepare contact data
        const contactData = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.toLowerCase().trim(),
            countryCode: countryCode.trim(),
            phone: phone.trim(),
            fullPhone: `${countryCode}${phone}`.replace(/\s+/g, ''),
            message: message.trim(),
            submittedAt: new Date().toISOString()
        };

        // Create HTML email template
        const htmlTemplate = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>New Contact Message</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; border-radius: 8px 8px 0 0; text-align: center; }
                    .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef; }
                    .contact-table { width: 100%; border-collapse: collapse; margin: 20px 0; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                    .contact-table th { background: #495057; color: white; padding: 15px; text-align: left; font-weight: 600; width: 30%; }
                    .contact-table td { padding: 15px; border-bottom: 1px solid #e9ecef; background: white; }
                    .contact-table tr:last-child td { border-bottom: none; }
                    .highlight { background: #e3f2fd !important; font-weight: 600; }
                    .message-box { background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 6px; padding: 15px; margin: 20px 0; }
                    .footer { text-align: center; margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 6px; color: #6c757d; font-size: 14px; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>💬 New Contact Message Received</h1>
                    <p>From: <strong>${contactData.firstName} ${contactData.lastName}</strong></p>
                </div>
                
                <div class="content">
                    <h2>📋 Contact Details</h2>
                    
                    <table class="contact-table">
                        <tr class="highlight">
                            <th>👤 Full Name</th>
                            <td>${contactData.firstName} ${contactData.lastName}</td>
                        </tr>
                        <tr>
                            <th>📧 Email Address</th>
                            <td><a href="mailto:${contactData.email}">${contactData.email}</a></td>
                        </tr>
                        <tr>
                            <th>📱 Phone Number</th>
                            <td><a href="tel:${contactData.fullPhone}">${contactData.fullPhone}</a></td>
                        </tr>
                        <tr class="highlight">
                            <th>📅 Received At</th>
                            <td><strong>${new Date(contactData.submittedAt).toLocaleString()}</strong></td>
                        </tr>
                    </table>

                    <div class="message-box">
                        <h3>💬 Message:</h3>
                        <p>${contactData.message}</p>
                    </div>

                    <div class="footer">
                        <p>This message was submitted through the DataEvol contact form.</p>
                        <p>Please respond to the customer accordingly.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Email options
        const mailOptions = {
            from: '"DataEvol Contact Form" <no-reply@dataevol.net>',
            to: process.env.NOTIFY_TO || 'connect@dataevol.net',
            subject: `New Contact Message from ${contactData.firstName} ${contactData.lastName}`,
            html: htmlTemplate,
            replyTo: contactData.email
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Message sent successfully'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// Career application API route
app.post('/api/apply-job', async (req, res) => {
    try {
        const {
            position,
            name,
            email,
            mobile,
            experience,
            currentCompany,
            currentLocation,
            currentCTC,
            expectedCTC,
            noticePeriod,
            country,
            message
        } = req.body;

        // Basic validation
        if (!position || !name || !email || !mobile) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: position, name, email, and mobile are required'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format'
            });
        }

        // Create email transporter
        const transporter = createEmailTransporter();
        
        // Prepare application data
        const applicationData = {
            position: position || 'Not specified',
            name: name || 'Not provided',
            email: email || 'Not provided',
            mobile: mobile || 'Not provided',
            experience: experience || 'Not specified',
            currentCompany: currentCompany || 'Not specified',
            currentLocation: currentLocation || 'Not specified',
            currentCTC: currentCTC || 'Not specified',
            expectedCTC: expectedCTC || 'Not specified',
            noticePeriod: noticePeriod || 'Not specified',
            country: country || 'Not specified',
            message: message || 'No additional message',
            submittedAt: new Date().toISOString()
        };

        // Create HTML email template
        const htmlTemplate = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>New Job Application</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; border-radius: 8px 8px 0 0; text-align: center; }
                    .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef; }
                    .application-table { width: 100%; border-collapse: collapse; margin: 20px 0; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                    .application-table th { background: #495057; color: white; padding: 15px; text-align: left; font-weight: 600; width: 30%; }
                    .application-table td { padding: 15px; border-bottom: 1px solid #e9ecef; background: white; }
                    .application-table tr:last-child td { border-bottom: none; }
                    .highlight { background: #e3f2fd !important; font-weight: 600; }
                    .message-box { background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 6px; padding: 15px; margin: 20px 0; }
                    .footer { text-align: center; margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 6px; color: #6c757d; font-size: 14px; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>🎯 New Job Application Received</h1>
                    <p>Position: <strong>${applicationData.position}</strong></p>
                </div>
            
                <div class="content">
                    <h2>📋 Application Details</h2>
                    
                    <table class="application-table">
                        <tr class="highlight">
                            <th>👤 Full Name</th>
                            <td>${applicationData.name}</td>
                        </tr>
                        <tr>
                            <th>📧 Email Address</th>
                            <td><a href="mailto:${applicationData.email}">${applicationData.email}</a></td>
                        </tr>
                        <tr>
                            <th>📱 Mobile Number</th>
                            <td><a href="tel:${applicationData.mobile}">${applicationData.mobile}</a></td>
                        </tr>
                        <tr class="highlight">
                            <th>💼 Position Applied</th>
                            <td><strong>${applicationData.position}</strong></td>
                        </tr>
                        <tr>
                            <th>⏱️ Experience</th>
                            <td>${applicationData.experience}</td>
                        </tr>
                        <tr>
                            <th>🏢 Current Company</th>
                            <td>${applicationData.currentCompany}</td>
                        </tr>
                        <tr>
                            <th>📍 Current Location</th>
                            <td>${applicationData.currentLocation}</td>
                        </tr>
                        <tr>
                            <th>💰 Current CTC</th>
                            <td>${applicationData.currentCTC}</td>
                        </tr>
                        <tr class="highlight">
                            <th>💵 Expected CTC</th>
                            <td><strong>${applicationData.expectedCTC}</strong></td>
                        </tr>
                        <tr>
                            <th>⏰ Notice Period</th>
                            <td>${applicationData.noticePeriod}</td>
                        </tr>
                        <tr>
                            <th>🌍 Country</th>
                            <td>${applicationData.country}</td>
                        </tr>
                        <tr>
                            <th>📅 Submitted At</th>
                            <td>${new Date(applicationData.submittedAt).toLocaleString()}</td>
                        </tr>
                    </table>

                    ${applicationData.message && applicationData.message !== 'No additional message' ? `
                    <div class="message-box">
                        <h3>💬 Additional Message:</h3>
                        <p>${applicationData.message}</p>
                    </div>
                    ` : ''}

                    <div class="footer">
                        <p>This application was submitted through the DataEvol careers portal.</p>
                        <p>Please review the candidate's details and respond accordingly.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Email options
        const mailOptions = {
            from: '"DataEvol Careers" <no-reply@dataevol.net>',
            to: process.env.NOTIFY_TO || 'connect@dataevol.net',
            subject: `New Job Application for ${applicationData.position}`,
            html: htmlTemplate,
            replyTo: applicationData.email
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Application sent successfully'
        });

    } catch (error) {
        console.error('Career application error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send application. Please try again later.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});





// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  startCronJobs();
});