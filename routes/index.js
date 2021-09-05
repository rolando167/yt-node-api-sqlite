const express = require('express');
const route = express.Router();


route.get('/', function(req, res, next){
    console.log(req.body);
    res.send('Bienvenido al Api V1 😄');
});

route.use('/post', require('./postRoute'));

module.exports = route;