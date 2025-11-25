#!/usr/bin/env node

/**
 * Image Optimization Script
 * Compresses all images to ~200KB or less
 * Uses sharp library for high-quality compression
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
    sharp = require('sharp');
} catch (error) {
    console.log('❌ Sharp library not found!');
    console.log('📦 Installing sharp...\n');
    const { execSync } = require('child_process');
    try {
        execSync('npm install sharp', { stdio: 'inherit' });
        sharp = require('sharp');
        console.log('\n✅ Sharp installed successfully!\n');
    } catch (installError) {
        console.error('❌ Failed to install sharp:', installError.message);
        console.log('\nPlease install manually: npm install sharp');
        process.exit(1);
    }
}

class ImageOptimizer {
    constructor() {
        this.imageDir = path.join(__dirname, '../public/img');
        this.targetSize = 200 * 1024; // 200KB target
        this.maxSize = 300 * 1024; // 300KB max acceptable
        this.backupDir = path.join(__dirname, '../public/img-backup');
        this.stats = {
            total: 0,
            optimized: 0,
            skipped: 0,
            failed: 0,
            savedBytes: 0
        };
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

    // Format bytes to human readable
    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }

    // Get all image files
    getImageFiles() {
        const imageExtensions = ['.jpg', '.jpeg', '.png'];
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

    // Create backup directory
    createBackup() {
        if (!fs.existsSync(this.backupDir)) {
            fs.mkdirSync(this.backupDir, { recursive: true });
            console.log('📁 Created backup directory\n');
        }
    }

    // Optimize single image
    async optimizeImage(imagePath) {
        const originalSize = this.getFileSize(imagePath);
        const relativePath = path.relative(this.imageDir, imagePath);
        
        // Skip if already small enough
        if (originalSize <= this.targetSize) {
            console.log(`⏭️  Skipped: ${relativePath} (${this.formatBytes(originalSize)} - already optimized)`);
            this.stats.skipped++;
            return;
        }

        try {
            // Backup original
            const backupPath = path.join(this.backupDir, relativePath);
            const backupDir = path.dirname(backupPath);
            if (!fs.existsSync(backupDir)) {
                fs.mkdirSync(backupDir, { recursive: true });
            }
            fs.copyFileSync(imagePath, backupPath);

            // Determine quality based on original size
            let quality = 80;
            if (originalSize > 2000 * 1024) quality = 60; // >2MB
            else if (originalSize > 1000 * 1024) quality = 70; // >1MB
            else if (originalSize > 500 * 1024) quality = 75; // >500KB

            const ext = path.extname(imagePath).toLowerCase();
            
            // Optimize image
            let sharpInstance = sharp(imagePath);
            
            // Get metadata to preserve aspect ratio
            const metadata = await sharpInstance.metadata();
            
            // Resize if too large (max 1920px width)
            if (metadata.width > 1920) {
                sharpInstance = sharpInstance.resize(1920, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                });
            }

            // Compress based on format
            if (ext === '.png') {
                await sharpInstance
                    .png({ quality: quality, compressionLevel: 9 })
                    .toFile(imagePath + '.tmp');
            } else {
                await sharpInstance
                    .jpeg({ quality: quality, progressive: true })
                    .toFile(imagePath + '.tmp');
            }

            // Check new size
            const newSize = this.getFileSize(imagePath + '.tmp');
            
            // If still too large, try more aggressive compression
            if (newSize > this.maxSize && quality > 50) {
                fs.unlinkSync(imagePath + '.tmp');
                quality = 50;
                
                sharpInstance = sharp(imagePath);
                if (metadata.width > 1920) {
                    sharpInstance = sharpInstance.resize(1920, null, {
                        withoutEnlargement: true,
                        fit: 'inside'
                    });
                }
                
                if (ext === '.png') {
                    await sharpInstance
                        .png({ quality: quality, compressionLevel: 9 })
                        .toFile(imagePath + '.tmp');
                } else {
                    await sharpInstance
                        .jpeg({ quality: quality, progressive: true })
                        .toFile(imagePath + '.tmp');
                }
            }

            const finalSize = this.getFileSize(imagePath + '.tmp');
            
            // Replace original with optimized
            fs.unlinkSync(imagePath);
            fs.renameSync(imagePath + '.tmp', imagePath);

            const saved = originalSize - finalSize;
            const savedPercent = Math.round((saved / originalSize) * 100);

            console.log(`✅ Optimized: ${relativePath}`);
            console.log(`   ${this.formatBytes(originalSize)} → ${this.formatBytes(finalSize)} (${savedPercent}% saved)\n`);

            this.stats.optimized++;
            this.stats.savedBytes += saved;

        } catch (error) {
            console.error(`❌ Failed: ${relativePath} - ${error.message}\n`);
            this.stats.failed++;
            
            // Cleanup temp file if exists
            try {
                if (fs.existsSync(imagePath + '.tmp')) {
                    fs.unlinkSync(imagePath + '.tmp');
                }
            } catch (e) {}
        }
    }

    // Optimize all images
    async optimizeAll() {
        console.log('🚀 Starting Image Optimization\n');
        console.log('Target size: ~200KB per image');
        console.log('Max acceptable: 300KB\n');
        console.log('='.repeat(60) + '\n');

        this.createBackup();

        const images = this.getImageFiles();
        this.stats.total = images.length;

        console.log(`Found ${images.length} images to process\n`);

        for (const imagePath of images) {
            await this.optimizeImage(imagePath);
        }

        // Print summary
        console.log('='.repeat(60));
        console.log('\n📊 Optimization Summary\n');
        console.log(`Total images: ${this.stats.total}`);
        console.log(`✅ Optimized: ${this.stats.optimized}`);
        console.log(`⏭️  Skipped: ${this.stats.skipped}`);
        console.log(`❌ Failed: ${this.stats.failed}`);
        console.log(`💾 Total saved: ${this.formatBytes(this.stats.savedBytes)}`);
        console.log(`\n📁 Backups saved to: ${this.backupDir}`);
        console.log('\n✨ Optimization complete!');
    }
}

// Run optimization
if (require.main === module) {
    const optimizer = new ImageOptimizer();
    optimizer.optimizeAll().catch(error => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
}

module.exports = ImageOptimizer;
