const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeControllers');
const contatoController = require('./controllers/contatoController');


// Rotas da home
route.get('/', homeController.paginaInicial);
module.exports = route;
route.post('/', homeController.tratarPost)

// Rotas de contato
route.get('/contato', contatoController.paginaPrincipal);