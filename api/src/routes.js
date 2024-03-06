const express = require('express');
const routes = express.routes();


const cliente = require('./controllers/cliente');

routes.get('/', (req, res) => {res.json("API Transportadora Passos Aguiar");});

routes.get('/cliente', cliente.getCliente);