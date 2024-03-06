const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');

routes.get('/', (req, res) => {
    res.json("API Transportadora XPTO 1.0")
});

routes.get('/clientes', Cliente.getClientes);

module.exports = routes;