const { pool } = require('../database');
const http_status =  require('http-status');
const _ = require('lodash');


const get_flotas = async () => {
    try {
        const query_flotas = `select distinct idFlota from equipos order by idFlota desc`;
        const [data] = await pool.query(query_flotas);

        if (_.isEmpty(data)) {
            const json = {
                status: http_status.NOT_FOUND,
                menssage: 'Sin flotas que mostrar'
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
        }
    }
};

module.exports = {
    get_flotas
};