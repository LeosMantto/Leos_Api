const { pool } = require('../database');
const http_status = require('http-status');
const _ = require('lodash');

const get_equipos = async (id_placa) => {
    //TODO: recibir unicamente valones numericos de placas ej: 99299,111142. 
    try {
        const query_equipos = `SELECT e.idplaca FROM equipos e, ficha_equipos f WHERE e.idplaca = f.idplaca and e.idplaca = ${id_placa} order by idplaca DESC`;
        const [data] = await pool.query(query_equipos);

        if (_.isEmpty(data)) {
            const json = {
                status: http_status.NOT_FOUND,
                menssage: 'Sin registros existentes'
            };
            return json;
        }

        const json = {
            status: http_status.OK,
            data: data
        };
    
        return json;
        
    } catch (error) {
        return {
            status: http_status.BAD_REQUEST,
            message: error.toString()
        }
    }

};


module.exports = {
    get_equipos
}