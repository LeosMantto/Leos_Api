const express = require('express');
const router = express.Router();
const { flotasController } = require('../controllers');

router.get('/', flotasController.get_flotas);


module.exports = router;