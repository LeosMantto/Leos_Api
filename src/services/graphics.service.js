const { pool } = require('../database');
const http_status = require('http-status');
const _ = require('lodash');

const graphic_ordenes_trabajo = async (value) => {
    try {
        const query1 = `select count(idot) from orden_trab where idot like '${value}%'`;
        const [query_ok] = await pool.query(query1);
        const json = {
            status: http_status.OK,
            data: query_ok
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
    graphic_ordenes_trabajo
}