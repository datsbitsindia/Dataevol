const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST /api/contact/send - Send contact form message
router.post('/send', contactController.sendContactMessage);

// GET /api/contact/test - Test email functionality
router.get('/test', contactController.sendTestEmail);

// SMTP test endpoint
router.get('/smtp-test', contactController.smtpTest);

module.exports = router;
