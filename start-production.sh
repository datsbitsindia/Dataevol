#!/bin/bash

# DataEvol Production Startup Script
# This script starts the backend server with production configuration

echo "🚀 Starting DataEvol Production Server"
echo "======================================"

# Check if .env file exists
if [ ! -f "backend/.env" ]; then
    echo "❌ Error: backend/.env file not found"
    echo "Please create backend/.env with your SMTP credentials"
    exit 1
fi

# Check if root .env file exists
if [ ! -f ".env" ]; then
    echo "❌ Error: .env file not found in root directory"
    echo "Please create .env with your SMTP credentials"
    exit 1
fi

echo "✅ Environment files found"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing root dependencies..."
    npm install
fi

if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
fi

echo "✅ Dependencies installed"

# Start backend server
echo "🔧 Starting backend server..."
cd backend

# Set production environment
export NODE_ENV=production

# Start the server
npm start

echo "🎯 DataEvol backend server started!"
echo "📧 Email system configured with:"
echo "   → SMTP Host: mail.dataevol.net"
echo "   → From: no-reply@dataevol.net"
echo "   → To: connect@dataevol.net"
echo "   → Port: 465 (SSL)"