const dotev = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotev.config( {path: path.join(__dirname, '../../.env') } );

const ENVS = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid('production', 'development').required(),
        PORT: Joi.number().default(5000),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_DATABASE: Joi.string().required(),
        DB_PRODUCTION: Joi.string().required()
    }).unknown();

const {value: envVars, error} = ENVS.prefs( { errors: { label: 'key' } } ).validate(process.env);

if (error){
    console.log(`Configuracion invalida error ->: ${error}`);
    console.log('archivo de file -> /config/config.js');
    throw new Error(`Configuracion invalida error ->: ${error}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    db_user: envVars.DB_USER,
    db_password: envVars.DB_PASSWORD,
    db_port: envVars.DB_PORT,
    db_database: envVars.DB_DATABASE,
    development: {
        db_user: envVars.DB_USER,
        db_password: envVars.DB_PASSWORD,
        db_port: envVars.DB_PORT,
        db_database: envVars.DB_DATABASE,
    },
    production: {
        db_user: envVars.DB_USER,
        db_password: envVars.DB_PASSWORD,
        db_port: envVars.DB_PORT,
        db_database: envVars.DB_PRODUCTION,
        dialectOptions: {
            ssl: true,
            rejectUnauthorized: false
        }
    }
};