var mysql = require('mysql');

var connMySQL = function() {    
    console.log("Conexao com DB foi estabelecida");
    return mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : 'q1w2e3r4',
      database : 'portal_noticias'
    });
};

module.exports = function() {
  console.log("dbConnection foi carregado pelo autoload");
  return connMySQL;
}