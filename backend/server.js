const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const applyRoute = require('./routes/applyRoute');
const contactRoute = require('./routes/contactRoute');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: [
        'http://localhost:3000', 
        'http://localhost:3002', 
        'http://localhost:8080', 
        'http://127.0.0.1:3000', 
        'http://127.0.0.1:3002', 
        'http://127.0.0.1:8080',
        'https://dataevol.net',
        'https://www.dataevol.net',
        'http://dataevol.net',
        'http://www.dataevol.net'
    ],
    credentials: true
}));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Static asset serving for logos removed as part of cleanup

// Routes
app.use('/api', applyRoute);
app.use('/api/contact', contactRoute);

// Health check endpoints
app.get('/health', (req, res) => {
    res.json({ status: 'Backend server is running', timestamp: new Date().toISOString() });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'Backend API is running', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ 
        success: false, 
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ 
        success: false, 
        message: 'API endpoint not found' 
    });
});

app.listen(PORT, () => {
    // Server started
});

module.exports = app;
