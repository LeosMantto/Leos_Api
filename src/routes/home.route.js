const express = require('express');
const http_status = require('http-status');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(http_status.OK).json({
        status: http_status.OK,
        msg: "Bienvenido a api de leosmantto"
    });
});


module.exports = router;