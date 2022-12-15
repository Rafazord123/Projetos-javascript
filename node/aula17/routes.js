//routes decide quem vai controlar aquela rota.
// exemplo: entrei na pgnHome, 
// quem vai decidir o que fazer nela vai ser o homeControler

const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeControllers');
const contatoController = require('./src/controllers/contatoController');


// Rotas da home
route.get('/', homeController.paginaInicial);
module.exports = route;
route.post('/', homeController.tratarPost)

// Rotas de contato
route.get('/contato', contatoController.paginaPrincipal);