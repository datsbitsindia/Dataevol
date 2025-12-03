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
- SEO optimized structure

### 📧 **Advanced Email System**
- **Contact Form**: Professional inquiry handling
- **Career Applications**: Job application processing
- **Domain Email**: Integrated with mail.dataevol.net
- **Email Templates**: Beautiful HTML templates with company branding
- **Inline Notifications**: Clean success/error messages

### 📱 **Perfect Mobile Responsiveness**
- Flawless mobile experience
- Touch-friendly interface
- All screen sizes supported
- Image optimization

### 🛠 **Technology Stack**
- **Frontend**: HTML5, CSS3, JavaScript ES6+, Bootstrap 5
- **Template Engine**: EJS (Embedded JavaScript)
- **Backend**: Node.js, Express.js
- **Email Service**: Nodemailer with SMTP
- **Icons**: Font Awesome, Custom icons

## 📋 Project Structure

```
DataEvol/
├── 📁 public/                     # Static assets
│   ├── css/                      # Stylesheets
│   ├── js/                       # JavaScript files
│   ├── img/                      # Images and assets
│   └── fonts/                    # Custom fonts
├── 📁 views/                      # EJS templates
│   ├── index.ejs                 # Home page
│   ├── aboutus.ejs               # About us page
│   ├── contactus.ejs             # Contact form page
│   ├── apply.ejs                 # Career application page
│   ├── career.ejs                # Career listings
│   ├── services.ejs              # Services page
│   ├── industry.ejs              # Industry solutions
│   ├── blog.ejs                  # Blog listing
│   ├── blog_single.ejs           # Blog detail page
│   ├── header.ejs                # Header component
│   └── footer.ejs                # Footer component
├── 📁 backend/data/               # Blog data
│   ├── blogData.js               # Main blog posts
│   └── newBlogs.js               # Additional blog posts
├── 📁 scripts/                    # Utility scripts
│   ├── compress-images.js        # Image analysis
│   ├── optimize-images.js        # Image optimization
│   └── pre-deployment-check.js   # Deployment checks
├── 📁 middleware/                 # Express middleware
│   └── imageOptimization.js      # Image optimization
├── 📁 utils/                      # Utilities
│   └── keepLive.js               # Health check cron
├── .env                          # Environment variables
├── package.json                  # Dependencies
├── app.js                        # Main application server
└── README.md                     # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **npm**

### 1. Clone Repository
```bash
git clone https://github.com/datsbitsindia/Dataevol.git
cd Dataevol
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create `.env` file:
```env
SMTP_HOST=mail.dataevol.net
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=no-reply@dataevol.net
SMTP_PASS=your-email-password
NOTIFY_TO=connect@dataevol.net
```

### 4. Start Application
```bash
# Development
npm run dev

# Production
npm start
```

The server runs on **http://localhost:3002**

## 📧 Email System

### API Endpoints
- **POST /api/contact/send** - Contact form submissions
- **POST /api/apply-job** - Job applications

### Email Configuration
- **From**: no-reply@dataevol.net
- **To**: connect@dataevol.net
- **SMTP**: SSL/TLS encryption on port 465

## 🎨 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Main landing page |
| About | `/aboutus` | Company information |
| Contact | `/contactus` | Contact form |
| Services | `/services` | Service offerings |
| Industry | `/industry` | Industry solutions |
| Career | `/career` | Job listings |
| Apply | `/apply` | Job application form |
| Blog | `/blog` | Blog listing |
| Blog Post | `/blog/:slug` | Individual blog post |

## 🔧 Available Scripts

```bash
npm start              # Start production server
npm run dev            # Development with auto-reload
npm run pre-deploy     # Run deployment checks
npm run optimize-images # Optimize all images
```

## 🌐 Production Deployment

### 1. Server Setup
```bash
git clone https://github.com/datsbitsindia/Dataevol.git
cd Dataevol
npm install
```

### 2. Configure Environment
```bash
# Create and edit .env file with production credentials
```

### 3. Start Server
```bash
# Using PM2 (recommended)
npm install -g pm2
pm2 start app.js --name "dataevol"
pm2 startup
pm2 save

# Or direct
NODE_ENV=production npm start
```

### Production Checklist
- [ ] Environment variables configured
- [ ] SMTP credentials working
- [ ] SSL certificate installed
- [ ] Domain pointing to server

## 📊 Performance Features

- **GZIP Compression**: Enabled for all responses
- **Static Asset Caching**: 1 year cache for CSS/JS/images
- **Image Optimization**: Lazy loading, WebP support
- **Health Check**: `/health-check` endpoint

## 🔒 Security

- Input validation on all forms
- SMTP with SSL/TLS encryption
- Environment variables for sensitive data
- CORS configured

## 📞 Support

- **Email**: connect@dataevol.net
- **Website**: https://dataevol.net

---

**Built with ❤️ by DataEvol Technologies**
