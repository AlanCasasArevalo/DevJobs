const mongoose = require('mongoose');
const Users = require('../models/Users');
/*https://express-validator.github.io/*/
const {check, body, validationResult, sanitize, sanitizeBody} = require('express-validator');

exports.formCreationAccount = async (req, res) => {
    res.render('creation-account', {
        pageName: 'Crea una nueva cuenta en devJobs',
        tagline: 'Comienza a publicar tus vacantes de trabajo gratis, solo crea tu cuenta',
    })
};

exports.userCreation = async (req, res, next) => {
    const user = new Users(req.body);
    const userToSave = await user.save();
    if (!userToSave || typeof userToSave === 'undefined') return next();
    if (userToSave && typeof userToSave !== 'undefined') {
        res.redirect('session-init')
    }
};

exports.registerValidation = async (req, res, next) => {
    // Security sanitized
    await sanitize('name').escape().trim().run(req);
    await sanitize('email').escape().trim().run(req);
    await sanitize('password').escape().trim().run(req);
    await sanitize('confirm').escape().trim().run(req);

    // validate
    await check('name', 'El nombre no puede ir vacio').notEmpty().isLength({min: 2}).run(req);
    await check('email', 'El email introducido no es valido').normalizeEmail().isEmail().run(req);
    await check('password', 'El contraseña no cumple los requisitos: Minimo 6 caracteres').isLength({min: 6}).run(req);
    await check('confirm', 'Confirmar contraseña no puede ir vacio y tiene que coincider con la contraseña anterior').isLength({min: 6}).run(req);
    await check('password', 'La contraseña y la confirmacion han de ser iguales').equals(req.body.confirm).run(req);
    const result = validationResult(req);
    if (result && typeof result !== 'undefined' && !result.isEmpty()) {
        return res.status(422).json({errors: result.array()});
    } else {
        next()
    }
};

exports.initSession = async (req, res, next) => {
    res.render('session-init');
};


