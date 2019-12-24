const mongoose = require('mongoose');

exports.formCreationAccount = async (req, res) => {
    res.render('creation-account', {
        pageName: 'Crea una nueva cuenta en devJobs',
        tagline: 'Comienza a publicar tus vacantes de trabajo gratis, solo crea tu cuenta',
    })
};

exports.initSession = (req, res) => {
    res.render('session-init')
};