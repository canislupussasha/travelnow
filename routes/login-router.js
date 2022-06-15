const express = require('express');
const registerController = require('../controllers/register-controller')
const router = express.Router();

//route for submit the Register form
router.post('/login', registerController.register )


module.exports = router;