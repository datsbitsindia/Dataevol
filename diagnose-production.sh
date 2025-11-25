#!/bin/bash

# Quick Diagnostic Script for Production Server
# Run this to find out what's wrong

echo "=============================================="
echo "   DataEvol Production Error Diagnostic"
echo "=============================================="
echo ""

# Check if in correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Not in DataEvol directory"
    echo "Please cd to /var/www/dataevol"
    exit 1
fi

echo "1️⃣  Checking Git Status..."
echo "Current commit:"
git log --oneline -1
echo ""
echo "Latest 3 commits:"
git log --oneline -3
echo ""

echo "2️⃣  Checking Backend Process..."
pm2 list | grep dataevol
echo ""

echo "3️⃣  Checking Backend Status..."
pm2 describe dataevol-backend | grep -E "status|restarts|uptime"
echo ""

echo "4️⃣  Testing Backend Health..."
echo "Health endpoint:"
curl -s http://localhost:5000/health || echo "❌ Backend not responding"
echo ""
echo ""

echo "5️⃣  Checking Environment Variables..."
if [ -f "backend/.env" ]; then
    echo "✅ .env file exists"
    echo "SMTP Configuration:"
    cat backend/.env | grep -E "SMTP_HOST|SMTP_PORT|SMTP_USER|NOTIFY_TO"
else
    echo "❌ .env file not found!"
fi
echo ""

echo "6️⃣  Testing SMTP Connection..."
cd backend
if [ -f "test-contact-email.js" ]; then
    echo "Running email test..."
    timeout 10 node test-contact-email.js
    TEST_RESULT=$?
    if [ $TEST_RESULT -eq 0 ]; then
        echo "✅ Email test passed"
    else
        echo "❌ Email test failed (exit code: $TEST_RESULT)"
    fi
else
    echo "❌ test-contact-email.js not found (code not updated?)"
fi
cd ..
echo ""

echo "7️⃣  Testing Contact API..."
echo "Sending test request to /api/contact/send..."
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST http://localhost:5000/api/contact/send \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "countryCode": "+91",
    "phone": "9876543210",
    "message": "Diagnostic test"
  }')

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n-1)

echo "HTTP Status: $HTTP_CODE"
echo "Response: $BODY"
echo ""

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Contact API working"
elif [ "$HTTP_CODE" = "500" ]; then
    echo "❌ Contact API returning 500 error"
    echo "Check backend logs for details"
else
    echo "⚠️  Unexpected status code: $HTTP_CODE"
fi
echo ""

echo "8️⃣  Recent Backend Logs (Last 30 lines)..."
pm2 logs dataevol-backend --lines 30 --nostream
echo ""

echo "9️⃣  Backend Error Logs (Last 20 lines)..."
pm2 logs dataevol-backend --err --lines 20 --nostream
echo ""

echo "🔟  Checking Node Modules..."
if [ -d "backend/node_modules" ]; then
    echo "✅ node_modules exists"
    if [ -d "backend/node_modules/nodemailer" ]; then
        echo "✅ nodemailer installed"
    else
        echo "❌ nodemailer not found"
    fi
else
    echo "❌ node_modules not found"
fi
echo ""

echo "=============================================="
echo "              Diagnostic Summary"
echo "=============================================="
echo ""

# Summary
echo "Quick Checks:"
echo "-------------"

# Check git
LATEST_COMMIT=$(git log --oneline -1 | grep "abe4741")
if [ -n "$LATEST_COMMIT" ]; then
    echo "✅ Latest code deployed"
else
    echo "❌ Old code running - Need to: git pull origin main"
fi

# Check backend
PM2_STATUS=$(pm2 list | grep dataevol-backend | grep online)
if [ -n "$PM2_STATUS" ]; then
    echo "✅ Backend is online"
else
    echo "❌ Backend is not running properly"
fi

# Check test file
if [ -f "backend/test-contact-email.js" ]; then
    echo "✅ Test files present"
else
    echo "❌ Test files missing - Code not updated"
fi

# Check API
if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Contact API working"
else
    echo "❌ Contact API failing (Status: $HTTP_CODE)"
fi

echo ""
echo "=============================================="
echo "           Recommended Actions"
echo "=============================================="
echo ""

if [ -z "$LATEST_COMMIT" ]; then
    echo "🔧 Action Required: Update Code"
    echo "   cd /var/www/dataevol"
    echo "   git pull origin main"
    echo "   pm2 restart dataevol-backend"
    echo ""
fi

if [ "$HTTP_CODE" != "200" ]; then
    echo "🔧 Action Required: Fix Backend Error"
    echo "   Check logs: pm2 logs dataevol-backend --err"
    echo "   Test email: cd backend && node test-contact-email.js"
    echo "   Restart: pm2 restart dataevol-backend"
    echo ""
fi

if [ ! -f "backend/test-contact-email.js" ]; then
    echo "🔧 Action Required: Deploy Latest Code"
    echo "   git pull origin main"
    echo "   cd backend && npm install"
    echo "   pm2 restart dataevol-backend"
    echo ""
fi

echo "For detailed deployment, run:"
echo "  chmod +x PRODUCTION_DEPLOY_STEPS.sh"
echo "  ./PRODUCTION_DEPLOY_STEPS.sh"
echo ""
