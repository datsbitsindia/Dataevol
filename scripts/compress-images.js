const fs = require('fs');
const path = require('path');

// Image compression utility
class ImageCompressor {
    constructor() {
        this.imageDir = path.join(__dirname, '../public/img');
        this.maxFileSize = 500 * 1024; // 500KB
    }

    // Get file size in bytes
    getFileSize(filePath) {
        try {
            const stats = fs.statSync(filePath);
            return stats.size;
        } catch (error) {
            return 0;
        }
    }

    // Get all image files
    getImageFiles() {
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
        const files = [];

        const scanDirectory = (dir) => {
            try {
                const items = fs.readdirSync(dir);
                items.forEach(item => {
                    const fullPath = path.join(dir, item);
                    const stat = fs.statSync(fullPath);
                    
                    if (stat.isDirectory()) {
                        scanDirectory(fullPath);
                    } else if (imageExtensions.includes(path.extname(item).toLowerCase())) {
                        files.push(fullPath);
                    }
                });
            } catch (error) {
                console.error('Error scanning directory:', error);
            }
        };

        scanDirectory(this.imageDir);
        return files;
    }

    // Analyze images and provide recommendations
    analyzeImages() {
        const images = this.getImageFiles();
        const largeImages = [];
        let totalSize = 0;

        console.log('🔍 Analyzing images...\n');

        images.forEach(imagePath => {
            const size = this.getFileSize(imagePath);
            totalSize += size;
            
            const relativePath = path.relative(this.imageDir, imagePath);
            const sizeKB = Math.round(size / 1024);
            
            if (size > this.maxFileSize) {
                largeImages.push({
                    path: relativePath,
                    size: sizeKB,
                    fullPath: imagePath
                });
            }
        });

        console.log(`📊 Image Analysis Results:`);
        console.log(`Total images: ${images.length}`);
        console.log(`Total size: ${Math.round(totalSize / 1024 / 1024 * 100) / 100} MB`);
        console.log(`Large images (>500KB): ${largeImages.length}\n`);

        if (largeImages.length > 0) {
            console.log('🚨 Large images that need optimization:');
            largeImages.forEach(img => {
                console.log(`  - ${img.path} (${img.size} KB)`);
            });
            console.log('\n💡 Recommendations:');
            console.log('1. Compress these images using online tools like TinyPNG or ImageOptim');
            console.log('2. Convert to WebP format for better compression');
            console.log('3. Use responsive images with different sizes');
            console.log('4. Consider lazy loading for non-critical images');
        } else {
            console.log('✅ All images are optimally sized!');
        }

        return {
            totalImages: images.length,
            totalSize: totalSize,
            largeImages: largeImages
        };
    }

    // Generate optimization report
    generateReport() {
        const analysis = this.analyzeImages();
        const reportPath = path.join(__dirname, '../image-optimization-report.txt');
        
        let report = `Image Optimization Report\n`;
        report += `Generated: ${new Date().toISOString()}\n`;
        report += `================================\n\n`;
        report += `Total Images: ${analysis.totalImages}\n`;
        report += `Total Size: ${Math.round(analysis.totalSize / 1024 / 1024 * 100) / 100} MB\n`;
        report += `Large Images: ${analysis.largeImages.length}\n\n`;
        
        if (analysis.largeImages.length > 0) {
            report += `Images needing optimization:\n`;
            analysis.largeImages.forEach(img => {
                report += `- ${img.path} (${img.size} KB)\n`;
            });
            report += `\nRecommendations:\n`;
            report += `1. Use TinyPNG or similar tools to compress images\n`;
            report += `2. Convert to WebP format\n`;
            report += `3. Implement responsive images\n`;
            report += `4. Use lazy loading\n`;
        }

        fs.writeFileSync(reportPath, report);
        console.log(`\n📄 Report saved to: ${reportPath}`);
    }
}

// Run the analysis
if (require.main === module) {
    const compressor = new ImageCompressor();
    compressor.generateReport();
}

module.exports = ImageCompressor;