const passport = require('passport');

exports.userAuthentication = passport.authenticate('local', {
    successRedirect: '/OK',
    failureRedirect: '/usersAccount/session-init',
    failureFlash: true,
    badRequestMessage: 'Ambos campos son obligatorios'
});