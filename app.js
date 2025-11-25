const express = require('express');
const ejs = require('ejs');
const path = require('path');
require('dotenv').config();
const { startCronJobs } = require('./utils/keepLive');
const imageOptimization = require('./middleware/imageOptimization');

const app = express();
const port = 3002;

//Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Add image optimization middleware before static files
app.use(imageOptimization);
app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/portfolio_single', (req, res) => {
  res.render('portfolio_single');
});

app.get('/blog_single', (req, res) => {
  res.render('blog_single');
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

// Configuring our data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create integrated email service
const nodemailer = require('nodemailer');

// Create transporter for email
const createEmailTransporter = () => {
    return nodemailer.createTransporter({
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

// Test routes
app.get('/api/contact/test', async (req, res) => {
    try {
        const transporter = createEmailTransporter();
        
        const testData = {
            firstName: 'Test',
            lastName: 'User',
            email: 'test@example.com',
            fullPhone: '+919876543210',
            message: 'This is a test message from the contact form API.',
            submittedAt: new Date().toISOString()
        };

        const mailOptions = {
            from: '"DataEvol Contact Form" <no-reply@dataevol.net>',
            to: process.env.NOTIFY_TO || 'connect@dataevol.net',
            subject: 'Test Contact Message from API',
            html: `<h2>Test Contact Message</h2><p>Name: ${testData.firstName} ${testData.lastName}</p><p>Email: ${testData.email}</p><p>Phone: ${testData.fullPhone}</p><p>Message: ${testData.message}</p>`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Test contact email sent successfully! Check connect@dataevol.net inbox.',
            testData: testData
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to send test email',
            error: error.message
        });
    }
});

app.get('/api/apply/test-email', async (req, res) => {
    try {
        const transporter = createEmailTransporter();
        
        const testData = {
            position: 'Software Developer',
            name: 'Test Candidate',
            email: 'testcandidate@example.com',
            mobile: '+91-9876543210',
            experience: '3 years',
            submittedAt: new Date().toISOString()
        };

        const mailOptions = {
            from: '"DataEvol Careers" <no-reply@dataevol.net>',
            to: process.env.NOTIFY_TO || 'connect@dataevol.net',
            subject: 'Test Job Application from API',
            html: `<h2>Test Job Application</h2><p>Position: ${testData.position}</p><p>Name: ${testData.name}</p><p>Email: ${testData.email}</p><p>Mobile: ${testData.mobile}</p><p>Experience: ${testData.experience}</p>`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Test job application email sent successfully! Check connect@dataevol.net inbox.',
            testData: testData
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to send test job application email',
            error: error.message
        });
    }
});



app.post('/email', async (req, res) => {
    // Redirect to new backend API
    res.status(301).json({ 
        message: 'This endpoint has moved. Please use /api/contact/send',
        newEndpoint: '/api/contact/send'
    });
});

app.post('/email_resume', async (req, res) => {
    // Redirect to new backend API
    res.status(301).json({ 
        message: 'This endpoint has moved. Please use /api/apply',
        newEndpoint: '/api/apply'
    });
});

// Backend API integration test route
app.get('/backend-test', (req, res) => {
    res.send(`
        <h1>Backend API Integration Test</h1>
        <p>This page tests the connection to your backend API.</p>
        <button onclick="testBackend()">Test Backend Connection</button>
        <div id="result"></div>
        
        <script>
        async function testBackend() {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '<p>Testing connection...</p>';
            
            try {
                const response = await fetch('http://localhost:5000/health');
                const data = await response.json();
                
                if (data.status) {
                    resultDiv.innerHTML = '<p style="color: green;">✅ Backend is running successfully!</p><pre>' + JSON.stringify(data, null, 2) + '</pre>';
                } else {
                    resultDiv.innerHTML = '<p style="color: red;">❌ Backend responded but with error</p>';
                }
            } catch (error) {
                resultDiv.innerHTML = '<p style="color: red;">❌ Cannot connect to backend. Make sure it is running on port 5000.</p><p>Error: ' + error.message + '</p>';
            }
        }
        </script>
    `);
});

// Contact form test route
app.get('/contact-test', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Contact Form Test</title>
            <style>
                body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
                .form-group { margin-bottom: 15px; }
                label { display: block; margin-bottom: 5px; font-weight: bold; }
                input, select, textarea { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
                .row { display: flex; gap: 10px; }
                .col { flex: 1; }
                button { background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
                button:disabled { background: #ccc; }
                .result { margin-top: 20px; padding: 10px; border-radius: 4px; }
                .success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
                .error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
            </style>
        </head>
        <body>
            <h1>Contact Form API Test</h1>
            <p>Test your contact form backend API integration.</p>
            
            <form id="contactForm" onsubmit="handleSubmit(event)">
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label>First Name *</label>
                            <input type="text" id="firstName" required>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label>Last Name *</label>
                            <input type="text" id="lastName" required>
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Email *</label>
                    <input type="email" id="email" required>
                </div>
                
                <div class="row">
                    <div class="col" style="flex: 0 0 120px;">
                        <div class="form-group">
                            <label>Country Code *</label>
                            <select id="countryCode" required>
                                <option value="+91">🇮🇳 +91</option>
                                <option value="+1">🇺🇸 +1</option>
                                <option value="+44">🇬🇧 +44</option>
                                <option value="+61">🇦🇺 +61</option>
                                <option value="+49">🇩🇪 +49</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label>Phone Number *</label>
                            <input type="tel" id="phone" placeholder="1234567890" required>
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Message * (min 10 characters)</label>
                    <textarea id="message" rows="4" required></textarea>
                </div>
                
                <button type="submit" id="submitBtn">Send Test Message</button>
            </form>
            
            <div id="result"></div>
            
            <script>
            async function handleSubmit(event) {
                event.preventDefault();
                
                const submitBtn = document.getElementById('submitBtn');
                const resultDiv = document.getElementById('result');
                
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
                resultDiv.innerHTML = '';
                
                const formData = {
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: document.getElementById('email').value,
                    countryCode: document.getElementById('countryCode').value,
                    phone: document.getElementById('phone').value,
                    message: document.getElementById('message').value
                };
                
                try {
                    const response = await fetch('http://localhost:5000/api/contact/send', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData)
                    });
                    
                    const result = await response.json();
                    
                    if (result.success) {
                        resultDiv.innerHTML = '<div class="result success">✅ Message sent successfully! Check connect@dataevol.net for the email.</div>';
                        document.getElementById('contactForm').reset();
                    } else {
                        let errorMsg = result.message;
                        if (result.errors) {
                            errorMsg += '<br><br>Validation errors:<ul>';
                            result.errors.forEach(err => {
                                errorMsg += '<li>' + err.field + ': ' + err.message + '</li>';
                            });
                            errorMsg += '</ul>';
                        }
                        resultDiv.innerHTML = '<div class="result error">❌ ' + errorMsg + '</div>';
                    }
                } catch (error) {
                    resultDiv.innerHTML = '<div class="result error">❌ Network error: ' + error.message + '<br>Make sure backend is running on port 5000.</div>';
                } finally {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Test Message';
                }
            }
            </script>
        </body>
        </html>
    `);
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  startCronJobs();
});
















// app.get('/aspdotnet', (req, res) => {
//   res.render('aspdotnet');
// });

// app.get('/angular', (req, res) => {
//   res.render('angular');
// });

// app.get('/ionic', (req, res) => {
//   res.render('ionic');
// });

// app.get('/html_css', (req, res) => {
//   res.render('html_css');
// });

// app.get('/ssis', (req, res) => {
//   res.render('ssis');
// });

// app.get('/ssrs', (req, res) => {
//   res.render('ssrs');
// });

// app.get('/devoops', (req, res) => {
//   res.render('devoops');
// });
