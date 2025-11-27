
const emailService = require('../services/emailService');
const { getTransporter } = require('../config/nodemailerConfig');

const sendContactMessage = async (req, res) => {
    try {
        console.log('📨 Contact form submission received');
        console.log('Request body:', JSON.stringify(req.body, null, 2));
        
        // Log validation attempt
        console.log('🔍 Starting validation for contact form submission:', {
            timestamp: new Date().toISOString(),
            messageLength: message ? message.length : 0,
            hasAllFields: !!(firstName && lastName && email && countryCode && phone && message)
        });
        
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

        // Comprehensive validation
        const validationErrors = [];

        // Check required fields
        if (!firstName || !lastName || !email || !countryCode || !phone || !message) {
            console.error('❌ Missing required fields');
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: firstName, lastName, email, countryCode, phone, message',
                receivedFields: Object.keys(req.body)
            });
        }

        // Validate message length
        if (message.length < 10) {
            validationErrors.push({
                field: 'message',
                message: 'Message must be at least 10 characters long'
            });
        }

        if (message.length > 500) {
            validationErrors.push({
                field: 'message',
                message: 'Message must be 500 characters or less'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            validationErrors.push({
                field: 'email',
                message: 'Please enter a valid email address'
            });
        }

        // Validate name lengths
        if (firstName.length > 50) {
            validationErrors.push({
                field: 'firstName',
                message: 'First name must be 50 characters or less'
            });
        }

        if (lastName.length > 50) {
            validationErrors.push({
                field: 'lastName',
                message: 'Last name must be 50 characters or less'
            });
        }

        // Return validation errors if any
        if (validationErrors.length > 0) {
            console.error('❌ Validation failed:', {
                timestamp: new Date().toISOString(),
                errors: validationErrors,
                messageLength: message ? message.length : 0,
                ipAddress: req.ip || 'Unknown'
            });
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: validationErrors
            });
        }

        console.log('✅ Validation passed successfully:', {
            timestamp: new Date().toISOString(),
            messageLength: contactData.message.length,
            fieldsCount: Object.keys(contactData).length
        });

        // Normalize phone number (combine country code + phone)
        const fullPhone = `${countryCode}${phone}`.replace(/\s+/g, '');

        // Sanitize and prepare contact data for email
        const contactData = {
            firstName: String(firstName).trim().replace(/[<>]/g, ''),
            lastName: String(lastName).trim().replace(/[<>]/g, ''),
            email: String(email).toLowerCase().trim(),
            countryCode: String(countryCode).trim(),
            phone: String(phone).trim().replace(/[^\d\s\-\+\(\)]/g, ''),
            fullPhone: fullPhone,
            message: String(message).trim().replace(/[<>]/g, ''),
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
