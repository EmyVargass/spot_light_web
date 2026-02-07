require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net", "https://fonts.googleapis.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net", "https://cdn.tailwindcss.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", process.env.API_BASE_URL || "http://localhost:5000"]
    }
  }
}));

// CORS configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON bodies
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Route for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API proxy configuration endpoint (for frontend to get API URL)
app.get('/api/config', (req, res) => {
  res.json({
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:5000/api',
    enableMockData: process.env.ENABLE_MOCK_DATA === 'true'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Spot-Light Web Admin running on http://localhost:${PORT}`);
  console.log(`📡 API Base URL: ${process.env.API_BASE_URL || 'http://localhost:5000/api'}`);
  console.log(`🔧 Mock Data: ${process.env.ENABLE_MOCK_DATA === 'true' ? 'Enabled' : 'Disabled'}`);
});
