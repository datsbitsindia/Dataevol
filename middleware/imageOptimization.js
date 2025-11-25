const path = require('path');
const fs = require('fs');

// Image optimization middleware
const imageOptimization = (req, res, next) => {
    // Check if request is for an image
    if (req.url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        // Set cache headers for images
        res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
        res.setHeader('Expires', new Date(Date.now() + 31536000000).toUTCString());
        
        // Add compression headers
        res.setHeader('Vary', 'Accept-Encoding');
        
        // Check if browser supports WebP
        const acceptsWebP = req.headers.accept && req.headers.accept.includes('image/webp');
        
        if (acceptsWebP && (req.url.includes('.jpg') || req.url.includes('.jpeg') || req.url.includes('.png'))) {
            // Try to serve WebP version if available
            const webpPath = req.url.replace(/\.(jpg|jpeg|png)$/i, '.webp');
            const fullWebpPath = path.join(__dirname, '../public', webpPath);
            
            if (fs.existsSync(fullWebpPath)) {
                req.url = webpPath;
                res.setHeader('Content-Type', 'image/webp');
            }
        }
    }
    
    next();
};

module.exports = imageOptimization;