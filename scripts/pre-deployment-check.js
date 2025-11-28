#!/usr/bin/env node

/**
 * Pre-Deployment Checklist Script
 * Runs automated checks before deploying to production
 */

const fs = require('fs');
const path = require('path');

console.log('\n🚀 Running Pre-Deployment Checks...\n');

let passed = 0;
let failed = 0;
let warnings = 0;

// Check 1: Environment file exists
console.log('📋 Check 1: Environment Configuration');
if (fs.existsSync('.env')) {
    console.log('   ✅ .env file exists');
    passed++;
    
    // Check if .env has required variables
    const envContent = fs.readFileSync('.env', 'utf8');
    const requiredVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'NOTIFY_TO'];
    const missingVars = requiredVars.filter(v => !envContent.includes(v));
    
    if (missingVars.length === 0) {
        console.log('   ✅ All required environment variables present');
        passed++;
    } else {
        console.log(`   ⚠️  Missing variables: ${missingVars.join(', ')}`);
        warnings++;
    }
} else {
    console.log('   ❌ .env file not found');
    failed++;
}

// Check 2: Dependencies installed
console.log('\n📦 Check 2: Dependencies');
if (fs.existsSync('node_modules')) {
    console.log('   ✅ node_modules exists');
    passed++;
    
    // Check for compression package
    if (fs.existsSync('node_modules/compression')) {
        console.log('   ✅ compression package installed');
        passed++;
    } else {
        console.log('   ⚠️  compression package not installed - run: npm install');
        warnings++;
    }
} else {
    console.log('   ❌ node_modules not found - run: npm install');
    failed++;
}

// Check 3: Critical files exist
console.log('\n📁 Check 3: Critical Files');
const criticalFiles = [
    'app.js',
    'package.json',
    'views/index.ejs',
    'views/header.ejs',
    'views/footer.ejs',
    'public/css/main.css',
    'public/css/custom.css',
    'public/js/app.js'
];

criticalFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`   ✅ ${file}`);
        passed++;
    } else {
        console.log(`   ❌ ${file} not found`);
        failed++;
    }
});

// Check 4: Image optimization
console.log('\n🖼️  Check 4: Image Optimization');
if (fs.existsSync('middleware/imageOptimization.js')) {
    console.log('   ✅ Image optimization middleware exists');
    passed++;
} else {
    console.log('   ⚠️  Image optimization middleware not found');
    warnings++;
}

// Check 5: Security checks
console.log('\n🔒 Check 5: Security');
if (fs.existsSync('.gitignore')) {
    const gitignore = fs.readFileSync('.gitignore', 'utf8');
    if (gitignore.includes('.env')) {
        console.log('   ✅ .env is in .gitignore');
        passed++;
    } else {
        console.log('   ❌ .env not in .gitignore - SECURITY RISK!');
        failed++;
    }
    if (gitignore.includes('node_modules')) {
        console.log('   ✅ node_modules is in .gitignore');
        passed++;
    } else {
        console.log('   ⚠️  node_modules not in .gitignore');
        warnings++;
    }
} else {
    console.log('   ⚠️  .gitignore not found');
    warnings++;
}

// Check 6: Performance optimizations
console.log('\n⚡ Check 6: Performance Optimizations');
const appJs = fs.readFileSync('app.js', 'utf8');
if (appJs.includes('compression')) {
    console.log('   ✅ GZIP compression enabled');
    passed++;
} else {
    console.log('   ⚠️  GZIP compression not enabled');
    warnings++;
}

if (appJs.includes('maxAge')) {
    console.log('   ✅ Static asset caching configured');
    passed++;
} else {
    console.log('   ⚠️  Static asset caching not configured');
    warnings++;
}

// Check 7: Script optimization
console.log('\n📜 Check 7: Script Loading');
const indexEjs = fs.readFileSync('views/index.ejs', 'utf8');
if (indexEjs.includes('defer')) {
    console.log('   ✅ Scripts use defer attribute');
    passed++;
} else {
    console.log('   ⚠️  Scripts not optimized with defer');
    warnings++;
}

// Check 8: CSS optimization
console.log('\n🎨 Check 8: CSS Loading');
if (indexEjs.includes('preload') && indexEjs.includes('as="style"')) {
    console.log('   ✅ Critical CSS preloaded');
    passed++;
} else {
    console.log('   ⚠️  CSS not preloaded');
    warnings++;
}

// Check 9: Email configuration
console.log('\n📧 Check 9: Email Configuration');
if (appJs.includes('nodemailer')) {
    console.log('   ✅ Nodemailer configured');
    passed++;
    
    if (appJs.includes('/api/contact/send')) {
        console.log('   ✅ Contact API endpoint exists');
        passed++;
    } else {
        console.log('   ⚠️  Contact API endpoint not found');
        warnings++;
    }
} else {
    console.log('   ❌ Nodemailer not configured');
    failed++;
}

// Check 10: Error handling
console.log('\n🛡️  Check 10: Error Handling');
if (appJs.includes('try') && appJs.includes('catch')) {
    console.log('   ✅ Error handling implemented');
    passed++;
} else {
    console.log('   ⚠️  Limited error handling');
    warnings++;
}

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 SUMMARY');
console.log('='.repeat(50));
console.log(`✅ Passed:   ${passed}`);
console.log(`⚠️  Warnings: ${warnings}`);
console.log(`❌ Failed:   ${failed}`);
console.log('='.repeat(50));

if (failed === 0 && warnings === 0) {
    console.log('\n🎉 All checks passed! Ready for deployment!\n');
    process.exit(0);
} else if (failed === 0) {
    console.log('\n⚠️  Some warnings found. Review before deployment.\n');
    process.exit(0);
} else {
    console.log('\n❌ Critical issues found. Fix before deployment!\n');
    process.exit(1);
}
