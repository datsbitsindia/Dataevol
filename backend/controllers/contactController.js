
const emailService = require('../services/emailService');
const { getTransporter } = require('../config/nodemailerConfig');

const sendContactMessage = async (req, res) => {
    try {
        console.log('📨 Contact form submission received');
        console.log('Request body:', JSON.stringify(req.body, null, 2));
        
        // Validation removed: previously used contactValidator.validateContactForm
        // Extract form data directly
        const {
            firstName,
            lastName,
            email,
            countryCode,
            phone,
            message
        } = req.body;

        // Basic fallback validation to ensure required fields exist
        if (!firstName || !lastName || !email || !countryCode || !phone || !message) {
            console.error('❌ Missing required fields');
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: firstName, lastName, email, countryCode, phone, message',
                receivedFields: Object.keys(req.body)
            });
        }

        // Normalize phone number (combine country code + phone)
        const fullPhone = `${countryCode}${phone}`.replace(/\s+/g, '');

        // Prepare contact data for email
        const contactData = {
            firstName: String(firstName).trim(),
            lastName: String(lastName).trim(),
            email: String(email).toLowerCase().trim(),
            countryCode: String(countryCode).trim(),
            phone: String(phone).trim(),
            fullPhone: fullPhone,
            message: String(message).trim(),
            submittedAt: new Date().toISOString(),
            userAgent: req.get('User-Agent') || 'Unknown',
            ipAddress: req.ip || req.connection.remoteAddress || 'Unknown'
        };

        console.log('📧 Attempting to send email with data:', {
            name: `${contactData.firstName} ${contactData.lastName}`,
            email: contactData.email,
            phone: contactData.fullPhone
        });

        // Send email using email service
        const result = await emailService.sendContactMessage(contactData);
        
        console.log('✅ Email sent successfully:', result);

        // Return success response
        res.status(200).json({
            success: true,
            message: 'Message sent successfully',
            messageId: result.messageId
        });

    } catch (error) {
        // Log detailed error for debugging
        console.error('❌ Contact form error:', error);
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        
        // Check for specific SMTP errors
        let errorMessage = 'Failed to send message. Please try again later.';
        let errorDetails = error.message;
        
        if (error.message.includes('SMTP')) {
            errorMessage = 'Email service temporarily unavailable. Please try again later.';
            errorDetails = 'SMTP connection error';
        } else if (error.message.includes('authentication')) {
            errorMessage = 'Email authentication failed. Please contact support.';
            errorDetails = 'SMTP authentication error';
        } else if (error.message.includes('timeout')) {
            errorMessage = 'Email service timeout. Please try again.';
            errorDetails = 'Connection timeout';
        }
        
        // Return error response with detailed info for debugging
        res.status(500).json({
            success: false,
            message: errorMessage,
            error: errorDetails,
            timestamp: new Date().toISOString(),
            // Include stack trace only in development
            ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
        });
    }
};

// SMTP connection test endpoint
const smtpTest = async (req, res) => {
    try {
        const transporter = getTransporter();
        await transporter.verify();
        res.status(200).json({
            success: true,
            message: 'SMTP connection successful. Ready to send emails.'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'SMTP connection failed.',
            error: error.message,
            stack: error.stack
        });
    }
};

// Test email function
const sendTestEmail = async (req, res) => {
    try {
        // Test data
        const testContactData = {
            firstName: 'Test',
            lastName: 'User',
            email: 'test@example.com',
            countryCode: '+91',
            phone: '9876543210',
            fullPhone: '+919876543210',
            message: 'This is a test message sent from the contact form testing endpoint.',
            submittedAt: new Date().toISOString(),
            userAgent: req.get('User-Agent') || 'Test Browser',
            ipAddress: req.ip || '127.0.0.1'
        };

        // Send test email
        await emailService.sendContactMessage(testContactData);

        res.status(200).json({
            success: true,
            message: 'Test email sent successfully! Check connect@dataevol.net inbox.',
            testData: testContactData
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to send test email',
            error: error.message
        });
    }
};


module.exports = {
    sendContactMessage,
    sendTestEmail,
    smtpTest
};

// Removed express-validator and contactValidator imports after cleanup
