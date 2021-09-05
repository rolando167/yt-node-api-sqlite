const express = require('express');
const route = express.Router();
const PostController = require('../controllers/PostController');

route.get('/', PostController.listar);

route.post('/', PostController.create);

route.get('/:id', PostController.search);

route.patch('/:id', PostController.update);

route.delete('/:id', PostController.delete);

module.exports = route;