const verificarSesion = (req, res, next) => {

    if (!req.session.usuario) {
        return res.redirect('/login');
    }

    next();
};

const verificarAdmin = (req, res, next) => {

    if (!req.session.usuario) {
        return res.redirect('/login');
    }

    if (req.session.usuario.rol !== 'admin') {
        return res.send('Acceso denegado');
    }

    next();
};

module.exports = {
    verificarSesion,
    verificarAdmin
};