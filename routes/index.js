const express = require('express');
const router = express.Router();

// Import all route modules
const authRoutes = require('./auth');
const homeRoutes = require('./home');
const adminRoutes = require('./admin');
// Import other route modules as needed

// Define route prefixes
router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/', homeRoutes);
// Add other routes as needed

module.exports = router;
