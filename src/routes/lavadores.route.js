const express = require('express');
const router = express.Router();

const { lavadoresController } = require('../controllers');

router.get('/', lavadoresController.get_lavadores_pipas);

module.exports = router;