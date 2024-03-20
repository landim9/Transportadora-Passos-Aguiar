const con = require('../connection/mysql');

//CRUD - CREATE
const addFuncionario = (req, res) => {
  if (req.body && req.body.nome && req.body.cargo && req.body.salario) {
      const { nome, cargo, salario } = req.body;
      con.query('INSERT INTO Funcionario(nome, cargo, salario) VALUES (?, ?, ?)', [nome, cargo, salario], (err, result) => {
          if (err) {
              res.status(500).json({ error: 'Erro ao adicionar funcionário', message: err.message });
          } else {
              res.status(201).json('Funcionario criado com sucesso');
          }
      });
  } else {
      res.status(400).json('Favor enviar todos os campos obrigatórios');
  }
}
//CRUD - READ
const getFuncionario = (req, res) => {
    if (req.params.nome != null) {
        con.query(`SELECT * FROM Funcionario WHERE nome = '${req.params.nome}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Funcionario');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM Funcionario', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Funcionario');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateFuncionario = (req, res) => {
    if (req.body != null && req.body.nome != null && req.body.cargo != null && req.body.salario != null) {
        const { nome, cargo, salario } = req.body;
        con.query('UPDATE funcionario SET cargo = ?, salario = ? WHERE nome = ?', [cargo, salario, nome], (err, result) => {
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
const deleteFuncionario = (req, res) => {
  if (req.params.id != null) {
      con.query(`DELETE FROM Funcionario WHERE idFuncionario = '${req.params.id}'`, (err, result) => {
          if (err) {
              res.status(500).json(err);
          } else {
              if (result.affectedRows == 0) {
                  res.status(404).json('Funcionrio não encontrado');
              } else {
                  res.status(200).json('Funcionario deletado com sucesso');
              }
          }
      });
  } else {
      res.status(400).json('Favor enviar o ID do funcionario');
  }
}

module.exports = {
    addFuncionario,
    getFuncionario,
    updateFuncionario,
    deleteFuncionario
}