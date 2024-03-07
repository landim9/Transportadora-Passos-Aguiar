const con = require('../connection/mysql');

//CRUD - CREATE
const addEntrega = (req, res) => {
    if (req.body != null && req.body.placa != null && req.body.motorista != null && req.body.inicio != null && req.body.fim != null && req.body.status != null) {
        const { placa, motorista, inicio, fim, status  } = req.body;
        con.query('INSERT INTO entrega (placa, motorista, inicio, fim, status) VALUES (?, ?, ?)', [placa, motorista, inicio, fim, status], (err, result) => {
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
const getEntrega = (req, res) => {
    if (req.params.placa != null) {
        con.query(`SELECT * FROM entrega WHERE placa = '${req.params.placa}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar entrega');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM entrega', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar entrega');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateEntrega = (req, res) => {
    if (req.body != null && req.body.placa != null && req.body.motorista != null && req.body.inicio != null && req.body.fim != null && req.body.status != null) {
        const { placa, motorista, inicio, fim, status } = req.body;
        con.query('UPDATE entrada SET motorista = ?, inicio = ?, fim = ?, status = ? WHERE placa = ?', [motorisca, inicio, fim, status, placa], (err, result) => {
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
const deleteEntrega = (req, res) => {
    if (req.params.idEntrega != null) {
        con.query(`DELETE FROM entrega WHERE idEntrega = '${req.params.idEntrega}'`, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Entrega não encontrado');
                } else {
                    res.status(200).json('Entrega deletado com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar o id da entrega');
    }
}

module.exports = {
    addEntrega,
    getEntrega,
    updateEntrega,
    deleteEntrega
}