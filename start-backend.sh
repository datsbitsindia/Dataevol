#!/bin/bash

echo "========================================"
echo "    DataEvol Backend API Server"
echo "========================================"
echo

cd backend

echo "Checking if dependencies are installed..."
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    echo
fi

echo "Starting backend server..."
echo "Backend will run on: http://localhost:5000"
echo "Press Ctrl+C to stop the server"
echo

node server.js
