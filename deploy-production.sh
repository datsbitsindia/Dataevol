#!/bin/bash

# DataEvol Production Deployment Script
# Run this on production server to fix email system

echo "========================================="
echo "DataEvol Production Deployment"
echo "========================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running as root
if [ "$EUID" -eq 0 ]; then 
    echo -e "${RED}❌ Please do not run as root${NC}"
    exit 1
fi

# Step 1: Pull latest code
echo -e "${YELLOW}Step 1: Pulling latest code from GitHub...${NC}"
git pull origin main
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Code updated${NC}"
else
    echo -e "${RED}❌ Failed to pull code${NC}"
    exit 1
fi
echo ""

# Step 2: Install dependencies
echo -e "${YELLOW}Step 2: Installing dependencies...${NC}"
npm install
cd backend && npm install && cd ..
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Step 3: Check backend .env file
echo -e "${YELLOW}Step 3: Checking backend configuration...${NC}"
if [ -f "backend/.env" ]; then
    echo -e "${GREEN}✅ backend/.env exists${NC}"
    
    # Check required variables
    if grep -q "SMTP_HOST=mail.dataevol.net" backend/.env && \
       grep -q "SMTP_USER=no-reply@dataevol.net" backend/.env && \
       grep -q "SMTP_PORT=465" backend/.env; then
        echo -e "${GREEN}✅ SMTP configuration looks good${NC}"
    else
        echo -e "${RED}❌ SMTP configuration incomplete${NC}"
        echo "Please check backend/.env file"
    fi
else
    echo -e "${RED}❌ backend/.env not found${NC}"
    echo "Creating from example..."
    cp backend/.env.example backend/.env
    echo -e "${YELLOW}⚠️  Please edit backend/.env with correct credentials${NC}"
fi
echo ""

# Step 4: Test backend directly
echo -e "${YELLOW}Step 4: Testing backend health...${NC}"
BACKEND_HEALTH=$(curl -s http://localhost:5000/health 2>/dev/null)
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Backend is responding${NC}"
    echo "Response: $BACKEND_HEALTH"
else
    echo -e "${RED}❌ Backend not responding on port 5000${NC}"
    echo "Backend may not be running"
fi
echo ""

# Step 5: Restart backend with PM2
echo -e "${YELLOW}Step 5: Restarting backend...${NC}"
if command -v pm2 &> /dev/null; then
    pm2 restart dataevol-backend
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Backend restarted${NC}"
    else
        echo -e "${YELLOW}⚠️  Backend process not found, starting new...${NC}"
        cd backend
        pm2 start server.js --name dataevol-backend
        cd ..
    fi
    
    # Wait for backend to start
    sleep 3
    
    # Show backend status
    pm2 list | grep dataevol-backend
else
    echo -e "${RED}❌ PM2 not installed${NC}"
    echo "Please install PM2: npm install -g pm2"
fi
echo ""

# Step 6: Test backend API
echo -e "${YELLOW}Step 6: Testing backend API...${NC}"
API_TEST=$(curl -s -X POST http://localhost:5000/api/contact/send \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "countryCode": "+91",
    "phone": "9876543210",
    "message": "Test message from deployment script"
  }' 2>/dev/null)

if echo "$API_TEST" | grep -q "success"; then
    if echo "$API_TEST" | grep -q '"success":true'; then
        echo -e "${GREEN}✅ Backend API working! Email sent successfully${NC}"
    else
        echo -e "${RED}❌ Backend API returned error:${NC}"
        echo "$API_TEST" | jq '.' 2>/dev/null || echo "$API_TEST"
    fi
else
    echo -e "${RED}❌ Backend API test failed${NC}"
    echo "Response: $API_TEST"
fi
echo ""

# Step 7: Check Nginx configuration
echo -e "${YELLOW}Step 7: Checking Nginx...${NC}"
if command -v nginx &> /dev/null; then
    sudo nginx -t
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Nginx configuration valid${NC}"
    else
        echo -e "${RED}❌ Nginx configuration has errors${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Nginx not found${NC}"
fi
echo ""

# Step 8: Restart frontend
echo -e "${YELLOW}Step 8: Restarting frontend...${NC}"
if command -v pm2 &> /dev/null; then
    pm2 restart dataevol-frontend 2>/dev/null
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Frontend restarted${NC}"
    else
        echo -e "${YELLOW}⚠️  Frontend process not found${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  PM2 not available${NC}"
fi
echo ""

# Step 9: Show backend logs
echo -e "${YELLOW}Step 9: Recent backend logs:${NC}"
if command -v pm2 &> /dev/null; then
    pm2 logs dataevol-backend --lines 20 --nostream
else
    echo -e "${YELLOW}⚠️  PM2 not available to show logs${NC}"
fi
echo ""

# Final summary
echo "========================================="
echo "Deployment Summary"
echo "========================================="
echo ""
echo "✅ Code updated from GitHub"
echo "✅ Dependencies installed"
echo "✅ Backend restarted"
echo ""
echo "Next Steps:"
echo "1. Test contact form: https://dataevol.net/contactus"
echo "2. Test career form: https://dataevol.net/apply"
echo "3. Check email at: connect@dataevol.net"
echo ""
echo "If still not working:"
echo "1. Check backend logs: pm2 logs dataevol-backend"
echo "2. Check SMTP credentials in backend/.env"
echo "3. Test SMTP: telnet mail.dataevol.net 465"
echo ""
echo "========================================="
