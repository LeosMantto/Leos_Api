const express = require('express');
const router = express.Router();
const { loginController } = require('../controllers');
 
router.post('/logIn', loginController.inicio_session);


module.exports = router;