const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pruebabackend'
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar con la base de datos:', error);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
      connection.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  };
  
  module.exports = { query };