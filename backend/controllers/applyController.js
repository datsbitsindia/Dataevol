const emailService = require('../services/emailService');

const submitApplication = async (req, res) => {
    try {
        console.log('💼 Job application submission received');
        console.log('Request body:', JSON.stringify(req.body, null, 2));
        
        // Extract form data from request body
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

        // Validate required fields
        if (!position || !name || !email || !mobile) {
            console.error('❌ Missing required fields');
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: position, name, email, and mobile are required',
                receivedFields: Object.keys(req.body)
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.error('❌ Invalid email format:', email);
            return res.status(400).json({
                success: false,
                message: 'Invalid email format'
            });
        }

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

        console.log('📧 Attempting to send job application email:', {
            position: applicationData.position,
            name: applicationData.name,
            email: applicationData.email
        });

        // Send email using email service
        const result = await emailService.sendJobApplication(applicationData);
        
        console.log('✅ Job application email sent successfully:', result);

        // Return success response
        res.status(200).json({
            success: true,
            message: 'Application sent successfully',
            messageId: result.messageId
        });

    } catch (error) {
        // Log detailed error for debugging
        console.error('❌ Job application error:', error);
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        
        // Check for specific SMTP errors
        let errorMessage = 'Failed to send application. Please try again later.';
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

// Test job application email function
const sendTestJobEmail = async (req, res) => {
    try {
        // Test job application data
        const testApplicationData = {
            position: 'Software Developer',
            name: 'Test Candidate',
            email: 'testcandidate@example.com',
            mobile: '+91-9876543210',
            experience: '3 years',
            currentCompany: 'Test Company Ltd.',
            currentLocation: 'Mumbai, India',
            currentCTC: '8 LPA',
            expectedCTC: '12 LPA',
            noticePeriod: '30 days',
            country: 'India',
            message: 'This is a test job application sent from the careers testing endpoint.',
            submittedAt: new Date().toISOString()
        };

        // Send test job application email
        await emailService.sendJobApplication(testApplicationData);

        res.status(200).json({
            success: true,
            message: 'Test job application email sent successfully! Check connect@dataevol.net inbox.',
            testData: testApplicationData
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to send test job application email',
            error: error.message
        });
    }
};

module.exports = {
    submitApplication,
    sendTestJobEmail
};
