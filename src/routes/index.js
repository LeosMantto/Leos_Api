const express = require('express');
const router = express.Router();

const HomeRouter = require('./home.route');
const UsuariosRouter =  require('./usuarios.route');
const LoginRouter = require('./login.route');
const FlotasRouter = require('./flotas.route');
const LavadoresRouter = require('./lavadores.route');
const EquiposRouter = require('./equipos.route');

router.use('/', HomeRouter);
router.use('/usr', UsuariosRouter);
router.use('/session', LoginRouter);
router.use('/flotas', FlotasRouter);
router.use('/lav_pipas', LavadoresRouter);
router.use('/equipos', EquiposRouter);

module.exports = router;