const http_status = require('http-status');
const { flotasService } = require('../services');


const get_flotas = async (req, res) => {
    
    const get_flotas_service = await flotasService.get_flotas();

    if (get_flotas_service.status === http_status.NOT_FOUND || get_flotas_service.status === http_status.INTERNAL_SERVER_ERROR || get_flotas_service.status === http_status.BAD_REQUEST) {
        res.status(get_flotas_service.status).send(get_flotas_service);
    } else {
        res.status(get_flotas_service.status).send(get_flotas_service);
    }
};



module.exports = {
    get_flotas
};