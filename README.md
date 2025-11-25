# 🚀 DataEvol - Complete IT Solutions Website

**Seamless Solutions, Infinite Innovation: Crafting Tomorrow's Technology Today.**

A modern, responsive website for DataEvol Technologies featuring advanced email functionality, perfect mobile optimization, and professional design.

## 🌟 Live Website
**🔗 [https://dataevol.net](https://dataevol.net)**

## ✨ Key Features

### 🎨 **Modern Professional Design**
- Clean, modern UI/UX design
- Professional color scheme and typography
- Smooth animations and transitions
- Dark/Light theme support
- SEO optimized structure

### 📧 **Advanced Email System**
- **Contact Form**: Professional inquiry handling
- **Career Applications**: Job application processing
- **Domain Email**: Integrated with mail.dataevol.net
- **Email Templates**: Beautiful HTML templates with company branding
- **Inline Notifications**: No popup alerts, clean success/error messages
- **SMTP Configuration**: Production-ready email delivery

### 📱 **Perfect Mobile Responsiveness**
- **Flawless Mobile Experience**: Looks exactly like desktop but optimized for mobile
- **Touch-Friendly Interface**: All buttons and forms optimized for touch
- **All Screen Sizes**: iPhone, Android, tablets, all devices supported
- **No Layout Issues**: Perfect alignment, no horizontal scrolling
- **Image Optimization**: All images scale beautifully

### 🛠 **Technology Stack**
- **Frontend**: HTML5, CSS3, JavaScript ES6+, Bootstrap 5
- **Template Engine**: EJS (Embedded JavaScript)
- **Backend**: Node.js, Express.js
- **Email Service**: Nodemailer with SMTP
- **Styling**: Custom CSS with mobile-first approach
- **Icons**: Font Awesome, Custom icons
- **Animations**: AOS (Animate On Scroll), Custom CSS animations

## 📋 Project Structure

```
DataEvol/
├── 📁 backend/                    # Backend server
│   ├── config/                   # Configuration files
│   │   └── nodemailerConfig.js   # Email SMTP configuration
│   ├── controllers/              # Route controllers
│   │   ├── contactController.js  # Contact form handling
│   │   └── applyController.js    # Career application handling
│   ├── routes/                   # API routes
│   │   ├── contactRoute.js       # Contact form routes
│   │   └── applyRoute.js         # Career application routes
│   ├── services/                 # Business logic
│   │   └── emailService.js       # Email service with templates
│   ├── .env.example              # Environment variables template
│   ├── package.json              # Backend dependencies
│   └── server.js                 # Main backend server
├── 📁 public/                     # Static assets
│   ├── css/                      # Stylesheets
│   │   ├── main.css              # Main stylesheet
│   │   ├── custom.css            # Custom styles
│   │   ├── mobile-perfect-fix.css # Mobile responsiveness
│   │   └── image-optimization.css # Image optimization
│   ├── js/                       # JavaScript files
│   │   ├── app.js                # Main application JS
│   │   ├── mobile-responsive.js  # Mobile functionality
│   │   └── vendors/              # Third-party libraries
│   ├── img/                      # Images and assets
│   │   ├── company/              # Company logos and branding
│   │   ├── slide_img/            # Technology icons
│   │   └── testimonial/          # Client testimonials
│   └── fonts/                    # Custom fonts
├── 📁 views/                      # EJS templates
│   ├── index.ejs                 # Home page
│   ├── aboutus.ejs               # About us page
│   ├── contactus.ejs             # Contact form page
│   ├── apply.ejs                 # Career application page
│   ├── career.ejs                # Career listings
│   ├── services.ejs              # Services page
│   ├── industry.ejs              # Industry solutions
│   ├── header.ejs                # Header component
│   └── footer.ejs                # Footer component
├── 📁 scripts/                    # Utility scripts
│   ├── compress-images.js        # Image optimization
│   └── quick-optimize.js         # Quick optimization
├── 📁 middleware/                 # Express middleware
│   └── imageOptimization.js      # Image optimization middleware
├── .env.example                  # Environment variables template
├── package.json                  # Frontend dependencies
├── app.js                        # Main application server
├── start-production.bat          # Windows production startup
├── start-production.sh           # Linux production startup
└── README.md                     # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Domain email credentials** (for SMTP)

### 1. Clone Repository
```bash
git clone https://github.com/datsbitsindia/Dataevol.git
cd Dataevol
```

### 2. Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### 3. Environment Configuration
```bash
# Copy environment files
cp .env.example .env
cp backend/.env.example backend/.env
```

**Update `.env` file:**
```env
# SMTP Configuration
SMTP_HOST=mail.dataevol.net
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=no-reply@dataevol.net
SMTP_PASS=your-email-password
NOTIFY_TO=connect@dataevol.net
```

**Update `backend/.env` file:**
```env
# Backend Configuration
PORT=5000
NODE_ENV=production

# SMTP Configuration
SMTP_HOST=mail.dataevol.net
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=no-reply@dataevol.net
SMTP_PASS=your-email-password
NOTIFY_TO=connect@dataevol.net
```

### 4. Start Application
```bash
# Start backend server
cd backend
npm start

# Start frontend (in another terminal)
cd ..
npm start
```

## 📧 Email System

### Email Configuration
The website uses domain email (mail.dataevol.net) for professional email delivery:

- **From**: no-reply@dataevol.net
- **To**: connect@dataevol.net
- **SMTP**: SSL/TLS encryption on port 465

### Email Features
- **Contact Form**: Sends professional inquiry emails
- **Career Applications**: Processes job applications
- **HTML Templates**: Beautiful branded email templates
- **Success Messages**: Inline notifications instead of popup alerts
- **Error Handling**: Comprehensive error handling and validation

### Testing Email System
```bash
# Test contact form email
curl -X GET http://localhost:5000/api/contact/test

# Test career application email
curl -X GET http://localhost:5000/api/apply/test-email
```

## 📱 Mobile Optimization

### Responsive Features
- **Perfect Mobile Layout**: All elements scale beautifully
- **Touch Optimization**: 44px minimum touch targets
- **Image Scaling**: All images maintain aspect ratio
- **Form Optimization**: Touch-friendly form inputs
- **Navigation**: Smooth hamburger menu
- **Typography**: Readable text on all screen sizes

### Supported Devices
- **iPhone**: All sizes (SE, 12, 13, 14, 15, etc.)
- **Android**: All screen sizes and manufacturers
- **Tablets**: iPad, Android tablets
- **Desktop**: All desktop resolutions
- **Orientations**: Portrait and landscape

### Mobile Testing
```bash
# Test on different screen sizes
# Chrome DevTools > Toggle Device Toolbar
# Test touch interactions
# Verify form functionality
# Check image scaling
```

## 🎨 Pages Overview

### 🏠 **Home Page** (`/`)
- Hero section with company introduction
- Services overview
- Technology showcase (Database, Web, Mobile, UI/UX, Cloud)
- About section with company highlights
- Call-to-action sections

### 👥 **About Us** (`/aboutus`)
- Company history and mission
- Team information
- Core values and expertise
- Client testimonials

### 📞 **Contact Us** (`/contactus`)
- Contact form with email integration
- Company contact information
- Location and office details
- Social media links

### 💼 **Careers** (`/career`)
- Job listings and opportunities
- Company culture information
- Application process

### 📝 **Apply** (`/apply`)
- Job application form
- Resume upload functionality
- Application tracking

### 🛠 **Services** (`/services`)
- Detailed service offerings
- Technology expertise
- Industry solutions

### 🏭 **Industry** (`/industry`)
- Industry-specific solutions
- Case studies and success stories
- Sector expertise

## 🔧 Development

### Available Scripts
```bash
# Frontend
npm start              # Start development server
npm run dev           # Development mode with nodemon

# Backend
cd backend && npm start # Start backend server

# Utilities
npm run test-email     # Test email functionality
npm run analyze-images # Analyze and optimize images
npm run quick-optimize # Quick image optimization
```

### Development Workflow
1. **Frontend Development**: Modify EJS templates and CSS
2. **Backend Development**: Update controllers and services
3. **Testing**: Test email functionality and mobile responsiveness
4. **Optimization**: Optimize images and performance
5. **Deployment**: Use production scripts for deployment

## 🌐 Production Deployment

### Server Requirements
- **Node.js** v14+
- **npm** or **yarn**
- **Domain email** access
- **SSL certificate** (recommended)
- **Firewall**: Allow ports 80, 443, 5000

### Deployment Steps

#### 1. Server Setup
```bash
# Clone repository on server
git clone https://github.com/datsbitsindia/Dataevol.git
cd Dataevol

# Install dependencies
npm install
cd backend && npm install
```

#### 2. Environment Configuration
```bash
# Configure production environment
cp .env.example .env
cp backend/.env.example backend/.env

# Update with production credentials
nano .env
nano backend/.env
```

#### 3. Start Production Server
```bash
# Linux/Mac
chmod +x start-production.sh
./start-production.sh

# Windows
start-production.bat

# Manual start
cd backend && NODE_ENV=production npm start
```

#### 4. Process Management (Optional)
```bash
# Using PM2 for process management
npm install -g pm2
pm2 start backend/server.js --name "dataevol-backend"
pm2 startup
pm2 save
```

### Production Checklist
- [ ] Environment variables configured
- [ ] SMTP credentials working
- [ ] SSL certificate installed
- [ ] Firewall configured
- [ ] Domain pointing to server
- [ ] Email delivery tested
- [ ] Mobile responsiveness verified
- [ ] Performance optimized
- [ ] Backup strategy in place

## 🧪 Testing

### Manual Testing
- **Forms**: Test contact and career forms
- **Email**: Verify email delivery
- **Mobile**: Test on various devices
- **Navigation**: Check all page links
- **Performance**: Test loading speeds

### Automated Testing
```bash
# Email system testing
npm run test-email

# Performance testing
npm run analyze-images
```

## 🔒 Security Features

- **Input Validation**: All form inputs validated
- **SMTP Security**: SSL/TLS encryption
- **Environment Variables**: Sensitive data in .env files
- **Error Handling**: Comprehensive error handling
- **Rate Limiting**: Email sending rate limits
- **CORS**: Cross-origin request handling

## 📊 Performance Optimization

### Image Optimization
- **Compressed Images**: All images optimized for web
- **Lazy Loading**: Images load as needed
- **Responsive Images**: Different sizes for different screens
- **WebP Support**: Modern image formats where supported

### Code Optimization
- **Minified CSS/JS**: Production builds minified
- **Gzip Compression**: Server-side compression
- **Caching**: Browser and server-side caching
- **CDN Ready**: Assets can be served from CDN

## 🤝 Contributing

### Development Guidelines
1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Code Standards
- **ES6+** JavaScript syntax
- **Responsive** design principles
- **Mobile-first** approach
- **Clean** and commented code
- **Consistent** naming conventions

## 📞 Support & Contact

### Technical Support
- **Email**: connect@dataevol.net
- **Website**: https://dataevol.net
- **GitHub Issues**: Create an issue in this repository

### Business Inquiries
- **Phone**: Contact through website
- **Email**: connect@dataevol.net
- **Address**: Available on website

## 📄 License

This project is proprietary software owned by **DataEvol Technologies**.

## 🎉 Acknowledgments

- **Bootstrap** for responsive framework
- **Node.js** community for excellent packages
- **Font Awesome** for professional icons
- **AOS** for smooth animations
- All contributors and testers

---

## 🚀 Quick Commands Reference

```bash
# Development
git clone https://github.com/datsbitsindia/Dataevol.git
cd Dataevol && npm install && cd backend && npm install

# Configuration
cp .env.example .env && cp backend/.env.example backend/.env

# Start Development
cd backend && npm start  # Terminal 1
npm start                # Terminal 2

# Production
./start-production.sh    # Linux/Mac
start-production.bat     # Windows

# Testing
npm run test-email       # Test email system
```

---

**Built with ❤️ by DataEvol Technologies**

*Seamless Solutions, Infinite Innovation: Crafting Tomorrow's Technology Today.*

**🌐 Visit us at [dataevol.net](https://dataevol.net)**