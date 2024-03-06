const express = require('express');
const routes = express.routes();


const cliente = require('./controllers/cliente');

routes.get('/', (req, res) => {res.json("API Transportadora Passos Aguiar");});

routes.post('/cliente', cliente.addCliente);
routes.get('/cliente', cliente.getCliente);

module.exports = routes;