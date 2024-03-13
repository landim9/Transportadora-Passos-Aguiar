const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const Veiculo = require('./controllers/veiculo');
const Entrega = require('./controllers/entrega');
const Funcionario = require('./controllers/funcionario');
const Pedido = require('./controllers/pedido');
const Rota = require('./controllers/rota');

routes.get('/', (req, res) => {
    res.json("API Transportadora XPTO 1.0")
});

routes.post('/clientes', Cliente.addCliente);
routes.get('/clientes', Cliente.getClientes);
routes.get('/clientes/:id', Cliente.getClientes);
routes.put('/clientes', Cliente.updateCliente);
routes.delete('/clientes/:id', Cliente.deleteCliente);

routes.post('/veiculos', Veiculo.addVeiculo);
routes.get('/veiculos', Veiculo.getVeiculos);
routes.get('/veiculos/:placa', Veiculo.getVeiculos);
routes.put('/veiculos', Veiculo.updateVeiculo);
routes.delete('/veiculos/:placa', Veiculo.deleteVeiculo);

routes.post('/entregas', Entrega.addEntrega);
routes.get('/entregas', Entrega.getEntrega);
routes.get('/entregas/:id', Entrega.getEntrega);
routes.put('/entregas', Entrega.updateEntrega);
routes.delete('/entregas/:id', Entrega.deleteEntrega);


routes.post('/funcionarios', Funcionario.addFuncionario);
routes.get('/funcionarios', Funcionario.getFuncionario);
routes.get('/funcionarios/:id', Funcionario.getFuncionario);
routes.put('/funcionarios', Funcionario.updateFuncionario);
routes.delete('/funcionarios/:id', Funcionario.deleteFuncionario);


routes.post('/pedidos', Pedido.addPedido);
routes.get('/pedidos', Pedido.getPedido);
routes.get('/pedidos/:placa', Pedido.getPedido);
routes.put('/pedidos', Pedido.updatePedido);
routes.delete('/pedidos/:placa', Pedido.deletePedido);


routes.post('/rotas', Rota.addRota);
routes.get('/rotas', Rota.getRota);
routes.get('/rotas/:idRota', Rota.getRota);
routes.put('/rotas', Rota.updateRota);
routes.delete('/rotas/:idRota', Rota.deleteRota);


module.exports = routes;