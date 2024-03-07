const con = require('../connection/mysql');

//CRUD - CREATE
const addRota = (req, res) => {
    if (req.body != null && req.body.origem != null && req.body.destino != null && req.body.distancia != null) {
        const { placa, modelo, capacidade } = req.body;
        con.query('INSERT INTO Rota (origem, destino, distancia) VALUES (?, ?, ?)', [origem, destino, distancia], (err, result) => {
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
const getRota = (req, res) => {
    if (req.params.origem != null) {
        con.query(`SELECT * FROM rota WHERE origem = '${req.params.origem}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar rota');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM rota', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar rota');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateRota = (req, res) => {
    if (req.body != null && req.body.origem != null && req.body.destino != null && req.body.distancia != null) {
        const { origem, destino, distancia } = req.body;
        con.query('UPDATE veiculo SET destino = ?, distancia = ? WHERE origem = ?', [destino, distancia, origem], (err, result) => {
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
const deleteRota = (req, res) => {
    if (req.params.origem != null) {
        con.query(`DELETE FROM rota WHERE origem = '${req.params.origem}'`, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Rota não encontrado');
                } else {
                    res.status(200).json('Rota deletado com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar a origem da rota');
    }
}

module.exports = {
    addRota,
    getRota,
    updateRota,
    deleteRota
}