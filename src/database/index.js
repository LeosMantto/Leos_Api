const {createPool} = require('mysql2/promise');
const config = require('../config');
const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    const pool = createPool({
        host: '192.168.1.115',
        user: config.development.db_user,
        password: config.development.db_password,
        port: config.development.db_port,
        database: config.development.db_database
    });
    
    console.log('Se creo la conexion a la BD de desarrollo');
    module.exports = { pool };
}else {
    const pool = createPool({
        host: '192.168.1.115',
        user: config.production.db_user,
        password: config.production.db_password,
        port: config.production.db_port,
        database: config.production.db_database
    });
    
    console.log('Se creo la conexion a la BD de production');
    module.exports = { pool };
}


