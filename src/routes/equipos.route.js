const express = require('express');
const router = express.Router();
const { equiposController } = require('../controllers');


router.get('/:placa', equiposController.get_equipos);

module.exports = router;