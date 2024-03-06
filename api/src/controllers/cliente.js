const con = require("../connection/mysql");

// CRUD - CREATE

const createCliente = (req, res) => {
  con.query("INSERT INTO cliente SET?", req.body, (err, result) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Erro ao cadastrar cliente",
      });
      return;
    }
    res.json(result);
  });
};


// CRUD - READ

const getCliente = (req, res) => {
  con.query("SELECT * FROM cliente", (err, result) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Erro ao listar clientes",
      });
      return;
    }
    res.json(rows);
  });
};

module.exports = { 
    getCliente, 

};
