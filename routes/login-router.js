const express = require('express');
const authController = require('../controllers/auth-controller')
const router = express.Router();

//route for submit the Register form
router.post('/login', authController.register )


module.exports = router;