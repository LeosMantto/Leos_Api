const express =  require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./src/config');
const {pool} = require('./src/database');
const routes = require('./src/routes');
const app = express();


const env = process.env.NODE_ENV || 'development';
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());


app.listen( config.port, () => {
    if (env === 'production') {
        console.log('rutas de produccion');
        app.use('/v1', routes);
        console.log(`Server init in http://localhost:${config.port}/v1`);
    }else {
        console.log('Rutas de desarrollo');
        app.use('/', routes);
        console.log(`Server init in http://localhost:${config.port}`);
    }
});