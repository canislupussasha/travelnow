const express = require('express');
const registerController = require('../controllers/register-controller') //to access controllers
const router = express.Router();

//route for submit the Register form
router.post('/register', registerController.register )


module.exports = router;