const con = require("../connection/mysql");

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
