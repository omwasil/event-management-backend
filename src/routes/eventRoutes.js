// src/routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authController = require('../controllers/authController');


// Get all events
router.get('/events', eventController.getAllEvents);

// Create a new event
router.post('/events', eventController.createEvent);
router.post('/events', authController.verifyToken, eventController.createEvent);

// Example routes
router.get('/events', (req, res) => {
  res.send('List of events');
});

router.post('/events', (req, res) => {
  res.send('Create an event');
});

module.exports = router;
