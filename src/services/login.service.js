const { pool } = require('../database');
const http_status = require('http-status');
const _ = require('lodash');


const _iniciar_session =  async (idusr, clave) => {
    
    try {

        //console.log(`Usuario: ${idusr}, Clave: ${clave}`);
        const query_session = `SELECT u.idusr, CONCAT(u.nom, " ", u.ape ) as nom_ape, g.grp, u.estado FROM usr u, grp g , grpusr gu WHERE u.idusr = gu.idusr AND g.idgrp = gu.idgrp AND u.idusr ='${idusr}' AND u.clave=sha1('${clave}') and u.estado = 1;`
        const [pool_execute] = await pool.query(query_session);

        if (pool_execute.length === 0) {
            const json = {
                status: http_status.NOT_FOUND,
                message: 'Usuario o contraseña incorrectos'
            };
            return json;
        }else {
            const json = {
                status: http_status.OK,
                data : pool_execute
            };
            
    
           return json;
        }


    } catch (error) {
        console.log('error')
         return {
            status: http_status.BAD_REQUEST,
            message: error.toString()
        }
    }

};



module.exports = {
    _iniciar_session
}