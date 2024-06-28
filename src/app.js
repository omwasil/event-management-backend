// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
// Basic Route
app.get('/', (req, res) => {
  res.send('Event Management System API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Use Routes
const eventRoutes = require('./routes/eventRoutes');
app.use('/api', eventRoutes);

rs
// Connect to MongoDB
const connectDB = require('./config/db');
connectDB();


