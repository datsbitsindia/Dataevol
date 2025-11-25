const express = require('express');
const router = express.Router();
const applyController = require('../controllers/applyController');

// POST /api/apply-job - Submit job application
router.post('/apply-job', applyController.submitApplication);

// GET /api/test - Test endpoint
router.get('/test', (req, res) => {
    res.json({ 
        success: true, 
        message: 'Apply route is working!',
        timestamp: new Date().toISOString()
    });
});

// GET /api/apply/test-email - Test job application email
router.get('/test-email', applyController.sendTestJobEmail);

module.exports = router;
