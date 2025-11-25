const nodemailer = require('nodemailer');

const getTransporter = () => {
    // Validate required environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error('❌ Missing SMTP configuration:');
        console.error('SMTP_HOST:', process.env.SMTP_HOST ? '✓' : '✗');
        console.error('SMTP_USER:', process.env.SMTP_USER ? '✓' : '✗');
        console.error('SMTP_PASS:', process.env.SMTP_PASS ? '✓' : '✗');
        throw new Error('Missing required SMTP configuration. Please check your .env file.');
    }

    const port = parseInt(process.env.SMTP_PORT, 10) || 587;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;
    const debug = process.env.SMTP_DEBUG === 'true' || false;
    const logger = process.env.SMTP_DEBUG === 'true' || false;
    const rejectUnauthorized = process.env.SMTP_REJECT_UNAUTHORIZED === 'false' ? false : true;
    
    console.log('📧 SMTP Configuration:');
    console.log('Host:', process.env.SMTP_HOST);
    console.log('Port:', port);
    console.log('Secure:', secure);
    console.log('User:', process.env.SMTP_USER);
    console.log('Reject Unauthorized:', rejectUnauthorized);

    const transporterOptions = {
        host: process.env.SMTP_HOST,
        port: port,
        secure: secure,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        tls: {
            // Allow self-signed certs and expired certificates
            rejectUnauthorized: false,
            minVersion: 'TLSv1'
        },
        pool: true,
        maxConnections: parseInt(process.env.SMTP_MAX_CONNECTIONS, 10) || 3,
        maxMessages: parseInt(process.env.SMTP_MAX_MESSAGES, 10) || 50,
        rateDelta: parseInt(process.env.SMTP_RATE_DELTA, 10) || 2000,
        rateLimit: parseInt(process.env.SMTP_RATE_LIMIT, 10) || 3,
        connectionTimeout: parseInt(process.env.SMTP_CONNECTION_TIMEOUT, 10) || 60000,
        greetingTimeout: parseInt(process.env.SMTP_GREETING_TIMEOUT, 10) || 30000,
        socketTimeout: parseInt(process.env.SMTP_SOCKET_TIMEOUT, 10) || 60000,
        logger: logger,
        debug: debug
    };

    const transporter = nodemailer.createTransport(transporterOptions);

    // Optionally verify transporter immediately (non-throwing)
    transporter.verify((error, success) => {
        if (error) {
            console.error('SMTP verify error:', error && error.message ? error.message : error);
        } else {
            console.log('✅ SMTP Server ready');
        }
    });

    return transporter;
};

const verifyTransporter = async () => {
    const transporter = getTransporter();
    return transporter.verify();
};

module.exports = {
    getTransporter,
    verifyTransporter
};
