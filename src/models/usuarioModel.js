const connection = require('../config/db');

const buscarUsuarioPorCorreo = (correo, callback) => {
    const query = 'SELECT * FROM usuarios WHERE correo = ?';

    connection.query(query, [correo], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }

        callback(null, results[0]);
    });
};

const registrarUsuario = (nombre, correo, contrasena, callback) => {
    const query = `
        INSERT INTO usuarios(nombre, correo, contrasena, rol)
        VALUES (?, ?, ?, 'usuario')
    `;

    connection.query(query, [nombre, correo, contrasena], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }

        callback(null, results);
    });
};
module.exports = {
    buscarUsuarioPorCorreo,
    registrarUsuario
};