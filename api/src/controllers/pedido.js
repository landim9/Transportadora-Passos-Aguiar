const con = require('../connection/mysql');

//CRUD - CREATE
const addPedido = (req, res) => {
    if (req.body != null && req.datapedido != null && req.body.valor != null) {
        const { datapedido, valor } = req.body;
        con.query('INSERT INTO Pedido (datapedido, valor) VALUES (?, ?, ?)', [datapedido, valor], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - READ
const getPedido = (req, res) => {
    if (req.params.nome != null) {
        con.query(`SELECT * FROM pedido WHERE datapedido = '${req.params.datapedido}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Pedido');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM Pedido', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Pedido');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updatePedido = (req, res) => {
    if (req.body != null && req.body.datapedido != null && req.body.valor != null) {
        const { datapedido, valor } = req.body;
        con.query('UPDATE Pedido SET valor = ?,  WHERE datapedido = ?', [datapedido, valor], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - DELETE
const deletePedido = (req, res) => {
    if (req.params.datapedido != null) {
        con.query(`DELETE FROM pedido WHERE datapedido = '${req.params.datapedido}'`, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Pedido não encontrado');
                } else {
                    res.status(200).json('Pedido deletado com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar o data do Pedido');
    }
}

module.exports = {
    addPedido,
    getPedido,
    updatePedido,
    deletePedido
}