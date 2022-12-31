const http_status = require('http-status');
const { lavadoresService } = require('../services');

const get_lavadores_pipas = async (req, res) => {
    const lavadores = await lavadoresService.get_lavadpres_pipas();

    if (lavadores.status === http_status.NOT_FOUND || lavadores.status === http_status.INTERNAL_SERVER_ERROR || lavadores.status === http_status.BAD_REQUEST) {
        res.status(lavadores.status).send(lavadores);
    } else {
        res.status(lavadores.status).send(lavadores);
    }
};

module.exports = {
    get_lavadores_pipas
}