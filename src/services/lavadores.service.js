const { pool } = require('../database');
const http_status = require('http-status');
const _ = require('lodash');

const get_lavadpres_pipas = async () => {
    try {
        const query_lavadores_pipas = `select empleados.idempleado, concat(nombres," ",apellidos) as nombre from empleados, p_cargos where empleados.idcargo = p_cargos.idcargo and p_cargos.idcargo = 18 and empleados.estado !=0  order by nombre DESC;`;
        const [data] = await pool.query(query_lavadores_pipas);

        if (_.isEmpty(data)) {
            const json = {
                status: http_status.NOT_FOUND,
                menssage: 'Sin registros de empleados de lavado para mostrar'
            };
            return json;
        }else {
            const json = {
                status: http_status.OK,
                data: data
            };
    
            return json;
        }

    } catch (error) {
        return {
            status: http_status.BAD_REQUEST,
            message: error.toString()
        };
    }
};


module.exports = {
    get_lavadpres_pipas
};