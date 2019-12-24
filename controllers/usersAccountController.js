const mongoose = require('mongoose');
const Users = require('../models/Users');
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

exports.initSession = async (req, res, next) => {
    res.render('session-init');
};


