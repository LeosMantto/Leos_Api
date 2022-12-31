const express = require('express');
const router = express.Router();

const { usuariosController } = require('../controllers');

router.get('/sgm', usuariosController._get_usuarios_sgm);
router.get('/count_usr', usuariosController._get_count_usuarios);
router.get('/search/sgm/:value', usuariosController._get_search_usuario_sgm);
router.get('/:id', usuariosController._get_usuario_idusr);

module.exports = router;