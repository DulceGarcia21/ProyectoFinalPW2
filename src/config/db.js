// Cargar las variables de entorno desde el archivo .env
require('dotenv').config();

const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Validar conexión a la base de datos
connection.connect((error) => {
  if (error) {
    console.log('Error al conectar a la base de datos:', error);
    return;
  }

  console.log('Conexión a la base de datos establecida correctamente');
});

module.exports = connection;