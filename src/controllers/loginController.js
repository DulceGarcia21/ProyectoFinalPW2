const usuarioModel = require('../models/usuarioModel');

const mostrarLogin = (req, res) => {
    res.render('login', { error: null });
};

const iniciarSesion = (req, res) => {

    const { correo, contrasena } = req.body;

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

        if (usuario.contrasena !== contrasena) {
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

const mostrarRegistro = (req, res) => {
    res.render('registro', { error: null });
};

const registrarUsuario = (req, res) => {
    const { nombre, correo, contrasena } = req.body;

    usuarioModel.buscarUsuarioPorCorreo(correo, (error, usuarioExistente) => {
        if (error) {
            console.log(error);
            return res.render('registro', { error: 'Error del servidor' });
        }

        if (usuarioExistente) {
            return res.render('registro', { error: 'Ese correo ya está registrado' });
        }

        usuarioModel.registrarUsuario(nombre, correo, contrasena, (error) => {
            if (error) {
                console.log(error);
                return res.render('registro', { error: 'No se pudo registrar el usuario' });
            }

            res.redirect('/login');
        });
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
    cerrarSesion,
    mostrarRegistro,
    registrarUsuario
};