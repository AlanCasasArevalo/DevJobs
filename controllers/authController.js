const passport = require('passport');

exports.userAuthentication = passport.authenticate('local', {
    successRedirect: '/administration',
    failureRedirect: '/usersAccount/session-init',
    failureFlash: true,
    badRequestMessage: 'Ambos campos son obligatorios'
});


// Controlar si el usuario esta autenticado
exports.userVerification = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    } else {
        res.redirect('/usersAccount/session-init')
    }
}

exports.showAdministrationPanel = (req, res) => {
    res.render('administration', {
        pageName: 'Panel de administracion',
        tagline: 'Crea y administra tus vacantes desde aqui'
    })
}