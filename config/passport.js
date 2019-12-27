const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Users = mongoose.model('Users');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    const user = await Users.findOne({email});
    if (user && typeof user !== 'undefined') {
        //Usuario existe comprobar contraseña
        const verifyPassword = user.passwordCompare(password);

        if (!verifyPassword) {
            return done(null, false, {
                message: 'El password es erroneo'
            })
        } else {
            return done(null, user)
        }
    } else {
        return done(null, false, {
            message: 'El usuario no existe'
        })
    }
}));

// Serializar el usuario
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserializar el usuario
passport.deserializeUser(async (id, done) => {
    const user = await Users.findById(id).exec();
    return done(null, user)
});

module.exports = passport;









