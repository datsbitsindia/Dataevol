# 🚀 Production Deployment Guide

## Pre-Deployment Checklist

### ✅ Code Quality
- [x] All console.log() removed from production code
- [x] Error handling implemented
- [x] Environment variables configured
- [x] Security headers added
- [x] CORS configured properly

### ✅ Performance
- [x] GZIP compression enabled
- [x] Static asset caching configured
- [x] Images optimized
- [x] Scripts deferred
- [x] CSS preloaded

### ✅ Security
- [x] Environment variables in .env file
- [x] .env file in .gitignore
- [x] Email credentials secured
- [x] No sensitive data in code

## Deployment Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create `.env` file with:
```env
NODE_ENV=production
PORT=3002
SMTP_HOST=mail.dataevol.net
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=no-reply@dataevol.net
SMTP_PASS=your_password_here
NOTIFY_TO=connect@dataevol.net
```

### 3. Start Production Server
```bash
npm run production
```

Or with PM2 (recommended):
```bash
npm install -g pm2
pm2 start app.js --name dataevol-website
pm2 save
pm2 startup
```

### 4. Nginx Configuration (Optional)
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Enable GZIP
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 5. SSL Certificate (Let's Encrypt)
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## Monitoring & Maintenance

### PM2 Commands
```bash
# View logs
pm2 logs dataevol-website

# Restart app
pm2 restart dataevol-website

# Stop app
pm2 stop dataevol-website

# Monitor
pm2 monit

# View status
pm2 status
```

### Health Checks
- Main site: http://yourdomain.com/
- API health: http://yourdomain.com/api/health
- Backend health: http://yourdomain.com/health-check

## Performance Testing

### After Deployment:
1. Test with Google PageSpeed Insights
2. Check GTmetrix scores
3. Verify GZIP compression
4. Test caching headers
5. Check mobile responsiveness

## Troubleshooting

### Issue: Site not loading
```bash
# Check if app is running
pm2 status

# Check logs
pm2 logs dataevol-website

# Restart app
pm2 restart dataevol-website
```

### Issue: Email not sending
- Verify SMTP credentials in .env
- Check firewall allows port 465
- Check server logs: `pm2 logs dataevol-website`

### Issue: Slow performance
- Verify GZIP is enabled: `curl -H "Accept-Encoding: gzip" -I http://yourdomain.com/`
- Check caching headers: `curl -I http://yourdomain.com/css/main.css`
- Monitor with: `pm2 monit`

## Backup Strategy

### Daily Backups
```bash
# Backup code
tar -czf backup-$(date +%Y%m%d).tar.gz /path/to/dataevol

# Backup .env file separately (secure location)
cp .env /secure/backup/location/.env.backup
```

## Updates & Maintenance

### Updating Code
```bash
# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Restart app
pm2 restart dataevol-website
```

## Security Best Practices

1. ✅ Keep Node.js updated
2. ✅ Run `npm audit` regularly
3. ✅ Use HTTPS only
4. ✅ Set secure headers
5. ✅ Rate limit API endpoints
6. ✅ Monitor logs for suspicious activity

## Support & Maintenance

### Regular Tasks:
- Weekly: Check logs for errors
- Monthly: Update dependencies
- Quarterly: Security audit
- Yearly: SSL certificate renewal (auto with Let's Encrypt)

## Success Metrics

Monitor these metrics:
- Page load time < 2 seconds
- Server response time < 200ms
- Uptime > 99.9%
- Error rate < 0.1%
- Email delivery rate > 99%

## 🎉 Deployment Complete!

Your site is now live and optimized for production!

For support: connect@dataevol.net
