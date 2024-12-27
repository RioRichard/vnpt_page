const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController')

router.get('/', homeController.index);
router.get('/login', authController.login)

module.exports = router;
