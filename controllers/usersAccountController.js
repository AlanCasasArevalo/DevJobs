const mongoose = require('mongoose');
const Users = require('../models/Users');
/*https://express-validator.github.io/*/
const {check, body, validationResult} = require('express-validator');

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
    //await check('name', 'El nombre necesita al menos 2 letras').isLength({min: 2}).run(req);
    await check('name', 'El nombre no puede ir vacio').notEmpty().run(req);
    await check('password', 'El password no cumple los requisitos: Minimo 6 caracteres').isLength({min: 6}).run(req);
    await check('email', 'El email introducido no es valido').normalizeEmail().isEmail().run(req);

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(422).json({errors: result.array()});
    } else {
        next()
    }
};

exports.initSession = async (req, res, next) => {
    res.render('session-init');
};


