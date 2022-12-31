const http_status =  require('http-status');
const _ = require('lodash');

//importacion de servicios.
const { usuariosService } = require('../services');

const _get_usuarios_sgm = async (req, res) => {

    const consulta = await usuariosService._get_usuarios_sgm();

    if (consulta.status === http_status.NOT_FOUND || consulta.status === http_status.INTERNAL_SERVER_ERROR || consulta.status === http_status.BAD_REQUEST) {
        res.status(consulta.status).send(consulta);
    } else {
        res.status(consulta.status).send(consulta);
    }
};

const _get_search_usuario_sgm = async (req, res) => {
        const {value} = req.params;

        const data = await usuariosService._get_search_usuario_sgm(value);

        if (data.status === http_status.NOT_FOUND || data.status === http_status.INTERNAL_SERVER_ERROR || data.status === http_status.BAD_REQUEST) {
            res.status(data.status).send(data);
        }else {
            res.status(data.status).send(data);
        }
};

const _get_usuario_idusr = async () => {

};

const _get_count_usuarios = async (req, res) => {
    const count = await usuariosService.get_count_usuarios();

    if (count.status === http_status.NOT_FOUND || count.status === http_status.INTERNAL_SERVER_ERROR || count.status === http_status.BAD_REQUEST) {
        res.status(count.status).send(count);
    }else {
        res.status(count.status).send(count);
    }
};


module.exports = {
    _get_usuarios_sgm,
    _get_search_usuario_sgm,
    _get_usuario_idusr,
    _get_count_usuarios
}