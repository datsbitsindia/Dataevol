const nodemailer = require('nodemailer');
const { getTransporter } = require('../config/nodemailerConfig');

const sendContactMessage = async (contactData) => {
    try {
        console.log('📧 Email Service: Getting transporter...');
        const transporter = getTransporter();

        // Use hosted logo URL (no attachments)
        // Force all outgoing emails to go to connect@dataevol.net (ignore env overrides)
        const TO_EMAIL_CONTACT = 'connect@dataevol.net';
        // Remove unused logoUrl variable
        // const logoUrl = process.env.EMAIL_LOGO_URL || LOGO_URL;
        const TO_EMAIL = process.env.NOTIFY_TO || 'connect@dataevol.net';
        
        console.log('📧 Email Service: Sending to:', TO_EMAIL);

        // Create HTML email template for contact message (matching Career theme)
        const htmlTemplate = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>New Contact Message</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    .header {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        padding: 30px 20px 20px 20px;
                        border-radius: 8px 8px 0 0;
                        text-align: center;
                    }

                    .content {
                        background: #f8f9fa;
                        padding: 30px;
                        border-radius: 0 0 8px 8px;
                        border: 1px solid #e9ecef;
                    }
                    .contact-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                        background: white;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    }
                    .contact-table th {
                        background: #495057;
                        color: white;
                        padding: 15px;
                        text-align: left;
                        font-weight: 600;
                        width: 30%;
                    }
                    .contact-table td {
                        padding: 15px;
                        border-bottom: 1px solid #e9ecef;
                        background: white;
                    }
                    .contact-table tr:last-child td {
                        border-bottom: none;
                    }
                    .highlight {
                        background: #e3f2fd !important;
                        font-weight: 600;
                    }
                    .message-box {
                        background: #fff3cd;
                        border: 1px solid #ffeaa7;
                        border-radius: 6px;
                        padding: 15px;
                        margin: 20px 0;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 30px;
                        padding: 20px;
                        background: #f8f9fa;
                        border-radius: 6px;
                        color: #6c757d;
                        font-size: 14px;
                    }
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
    
        // Plain text fallback
        const textTemplate = `
New Contact Message Received

Contact Details:
================
Name: ${contactData.firstName} ${contactData.lastName}
Email: ${contactData.email}
Phone: ${contactData.fullPhone} (${contactData.countryCode} ${contactData.phone})
Country Code: ${contactData.countryCode}

Message:
========
${contactData.message}

Technical Details:
==================
Received At: ${new Date(contactData.submittedAt).toLocaleString()}
User Agent: ${contactData.userAgent}
IP Address: ${contactData.ipAddress}

---
This message was submitted through the DataEvol contact form.
Please respond to: ${contactData.email}
        `;
    
        // Email options with anti-spam headers (attachments removed)
        const mailOptions = {
            from: '"DataEvol Contact Form" <no-reply@dataevol.net>',
            to: TO_EMAIL,
            subject: `New Contact Message from ${contactData.firstName} ${contactData.lastName}`,
            html: htmlTemplate,
            text: textTemplate,
            replyTo: contactData.email,
            headers: {
                'X-Priority': '1',
                'X-MSMail-Priority': 'High',
                'Importance': 'high',
                'X-Mailer': 'DataEvol Contact System',
                'List-Unsubscribe': '<mailto:no-reply@dataevol.net>'
            }
        };

        // Send email
        console.log('📧 Email Service: Sending email...');
        const info = await transporter.sendMail(mailOptions);
        
        console.log('✅ Email Service: Email sent successfully');
        console.log('Message ID:', info.messageId);
        console.log('Response:', info.response);

        return { success: true, messageId: info.messageId };

    } catch (error) {
        console.error('❌ Email Service Error:', error);
        console.error('Error code:', error.code);
        console.error('Error command:', error.command);
        console.error('Error response:', error.response);
        throw new Error(`Failed to send contact email: ${error.message}`);
    }
};

const sendJobApplication = async (applicationData) => {
    try {
        console.log('📧 Email Service (Job): Getting transporter...');
        const transporter = getTransporter();
        const TO_EMAIL = process.env.NOTIFY_TO || 'connect@dataevol.net';
        
        console.log('📧 Email Service (Job): Sending to:', TO_EMAIL);

        const htmlTemplate = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>New Job Application</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px 20px 20px; border-radius: 8px 8px 0 0; text-align: center; }

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

        // Email options (attachments removed)
        const mailOptions = {
            from: '"DataEvol Careers" <no-reply@dataevol.net>',
            to: TO_EMAIL,
            subject: `New Job Application for ${applicationData.position}`,
            html: htmlTemplate,
            headers: {
                'X-Priority': '1',
                'X-MSMail-Priority': 'High',
                'Importance': 'high',
                'X-Mailer': 'DataEvol Careers System',
                'List-Unsubscribe': '<mailto:no-reply@dataevol.net>'
            },
            text: `
New Job Application Received

Position: ${applicationData.position}
Name: ${applicationData.name}
Email: ${applicationData.email}
Mobile: ${applicationData.mobile}
Experience: ${applicationData.experience}
Current Company: ${applicationData.currentCompany}
Current Location: ${applicationData.currentLocation}
Current CTC: ${applicationData.currentCTC}
Expected CTC: ${applicationData.expectedCTC}
Notice Period: ${applicationData.noticePeriod}
Country: ${applicationData.country}
Message: ${applicationData.message}
Submitted At: ${new Date(applicationData.submittedAt).toLocaleString()}
            `
        };

        console.log('📧 Email Service (Job): Sending email...');
        const info = await transporter.sendMail(mailOptions);
        
        console.log('✅ Email Service (Job): Email sent successfully');
        console.log('Message ID:', info.messageId);
        console.log('Response:', info.response);

        return { success: true, messageId: info.messageId };

    } catch (error) {
        console.error('❌ Email Service (Job) Error:', error);
        console.error('Error code:', error.code);
        console.error('Error command:', error.command);
        console.error('Error response:', error.response);
        throw new Error(`Failed to send job application email: ${error.message}`);
    }
};

module.exports = {
    sendContactMessage,
    sendJobApplication
};
