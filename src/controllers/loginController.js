const usuarioModel = require('../models/usuarioModel');

const mostrarLogin = (req, res) => {
    res.render('login', { error: null });
};

const iniciarSesion = (req, res) => {

    const { correo, contraseña } = req.body;

    usuarioModel.buscarUsuarioPorCorreo(correo, (error, usuario) => {

        if (error) {
            console.log(error);
            return res.render('login', {
                error: 'Error del servidor'
            });
        }

        if (!usuario) {
            return res.render('login', {
                error: 'Usuario no encontrado'
            });
        }

        if (usuario.contraseña !== contraseña) {
            return res.render('login', {
                error: 'Contraseña incorrecta'
            });
        }

        req.session.usuario = {
            id: usuario.id_usuario,
            nombre: usuario.nombre,
            rol: usuario.rol
        };

        res.redirect('/dashboard');

    });

};

const cerrarSesion = (req, res) => {

    req.session.destroy(() => {
        res.redirect('/login');
    });

};

module.exports = {
    mostrarLogin,
    iniciarSesion,
    cerrarSesion
};