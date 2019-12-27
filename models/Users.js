const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const bcrypt = require('bcrypt');

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'El email  del usuario es obligatorio',
        unique: true,
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        required: 'El nombre  del usuario es obligatorio',
        trim: true
    },
    password: {
        type: String,
        required: 'La contraseña del usuario es obligatoria',
    },
    token :  String,
    expiration: Date
});

usersSchema.pre('save', async function (next) {
    if (!this.isModified('password')){
        return next();
    }
    const hash = await bcrypt.hashSync(this.password, 13);
    this.password = hash;
    next()
});

usersSchema.post('save', async function (error, doc, next) {
    const errorName = error.name;
    const errorCodeDuplicate = 11000;
    if (errorName && typeof errorName !== 'undefined') {
        switch (error.code) {
            case 11000:
                next('El correo ya esta registrado');
                break;
            default:
                next(error);
                break;
        }
    }
});

module.exports = mongoose.model('Users', usersSchema);
