const http_status =  require('http-status');
const _ = require('lodash');
const { loginService } = require('../services');


const inicio_session =  async (req, res) => {
    const { username, password } = req.body;
    const query = await loginService._iniciar_session(username, password);
    
    res.status(query.status).send(query);
    
};

module.exports = {
    inicio_session
}