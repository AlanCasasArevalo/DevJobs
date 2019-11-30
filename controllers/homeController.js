const mongoose = require('mongoose');
const Vacancy = mongoose.model('Vacancy');

exports.showJobs = async (req, res, next) => {

    const vacancies = await Vacancy.find();

    if (!vacancies) return next();

    res.render('home', {
        pageName: 'devJobs',
        tagline: 'Encuentra y publica trabajos para desarrolladores',
        barra: true,
        boton: true,
        vacancies
    })
};