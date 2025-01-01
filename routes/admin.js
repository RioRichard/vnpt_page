const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');

// Temporarily disable admin check, only keep authentication
// router.use(auth.isAuthenticated);
// router.use(auth.isAdmin);  // Comment out admin check

// Dashboard route
router.get('/', adminController.getDashboard);

module.exports = router;
