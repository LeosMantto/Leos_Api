const { pool } = require('../database');
const http_status = require('http-status');
const _ = require('lodash');

const _get_usuarios_sgm = async () => {

    try {
        const query = 'SELECT * from usr ORDER BY idusr DESC;';
        const query_nombres = 'select idusr, CONCAT(nom, \" \", ape) as nombres, estado  from usr order by nombres ASC';
        const [get_usr] = await pool.query(query_nombres);        
        /**
         * estados: {
         *       activos: execute_query_count_activos[0]['count(estado)'],
         *       inactivos: execute_query_count_inactivos[0]['count(estado)'],
         *   },
         * 
         */
        const json = {
            status: http_status.OK,
            data: get_usr
        }

        return json;
        
    } catch (error) {
        return {
            status: http_status.BAD_REQUEST,
            message: error.toString()
        }
    }
};

const _get_search_usuario_sgm = async (value) => {
    try {
        const query_search = `select idusr, CONCAT(nom, " ", ape) as nombres, estado from usr where nom like '%${value}%' OR ape like '${value}%' order by nombres ASC`;
        const [data] = await pool.query(query_search);
        const json = {
            status: http_status.OK,
            data: data
        }
        return json;
    } catch (error) {
        return {
            status: http_status.BAD_REQUEST,
            message: error.toString()
        }
    }
};

const _get_usuario_id = async (value_id) => {
    try {
        const query_id = `SELECT idusr, CONCAT(nom, " ", ape) AS nombres, estado FROM usr WHERE idusr='${value_id}'`;
        const [data_query] = await pool.query(query_id);    
        const json = {
            status: http_status.OK,
            data: data_query
        };

        return json;
        
    } catch (error) {
        return {
            status: http_status.BAD_REQUEST,
            message: error.toString()
        }
    }
};

const get_count_usuarios = async () => {

        try {
            const count_activos = 'select count(estado) from usr where estado = 1;';
            const count_inactivos = 'select count(estado) from usr where estado = 0;';
            const count_usr_sgm = 'select count(*) from usr;';
            const count_empleados = 'select count(*) from empleados;';
    
            const [execute_query_count_activos] = await pool.query(count_activos);
            const [execute_query_count_inactivos] = await pool.query(count_inactivos);
            const [execute_query_usr_sgm] = await pool.query(count_usr_sgm);
            const [execute_query_usr_empleados] = await pool.query(count_empleados);
    
    
            const json = {
                status: http_status.OK,
                count: {
                    Activos_SGM: execute_query_count_activos[0]['count(estado)'],
                    Inactivos_SGM: execute_query_count_inactivos[0]['count(estado)'],
                    Usuarios_SGM: execute_query_usr_sgm[0]['count(*)'],
                    Empleados: execute_query_usr_empleados[0]['count(*)']
                }
            };

            return json;

        }catch (error) {
            return {
                status: http_status.BAD_REQUEST,
                message: error.toString()
            }
        }

};


module.exports = {
    _get_usuarios_sgm,
    _get_search_usuario_sgm,
    _get_usuario_id,
    get_count_usuarios
}