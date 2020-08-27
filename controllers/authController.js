const passport = require('passport');

exports.userAuthentication = passport.authenticate('local', {
    successRedirect: '/administration',
    failureRedirect: '/usersAccount/session-init',
    failureFlash: true,
    badRequestMessage: 'Ambos campos son obligatorios'
});

exports.showAdministrationPanel = (req, res) => {
    res.render('administration', {
        pageName: 'Panel de administracion',
        tagline: 'Crea y administra tus vacantes desde aqui'
    })
}