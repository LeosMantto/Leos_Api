const http_status = require('http-status');
const _ = require('lodash');
const { EquiposService } = require('../services');

const get_equipos = async (req, res) => {
    const {placa} = req.params;

    if(_.isInteger(parseInt(placa))) {
        
        const get_equipos_services = await EquiposService.get_equipos(parseInt(placa));
        if (get_equipos_services.status === http_status.NOT_FOUND || get_equipos_services.status === http_status.INTERNAL_SERVER_ERROR || get_equipos_services.status === http_status.BAD_REQUEST) {
            res.status(get_equipos_services.status).send(get_equipos_services);
        } else {
            res.status(get_equipos_services.status).send(get_equipos_services);
        }
    }else {
        res.status(http_status.BAD_REQUEST).json({
            status: http_status.BAD_REQUEST,
            menssage: 'Al parecer no es una placa valida por favor ingresar una placa valida'
        });
    }
};

module.exports = {
    get_equipos
}