// const mongoose = require('mongoose');
// const Vacancy = mongoose.model('Vacancy');
const Vacancy = require('../models/Vacancies');

exports.newVacancyForm = (req, res) => {
    res.render('new-vacancy', {
        pageName: 'Nueva vacante',
        tagline: 'Llena el formulario y publica tu vacante',
    })
};

exports.addNewVacancy = async (req, res) => {
    const vacancyBody = req.body;

    if (vacancyBody && typeof vacancyBody !== 'undefined') {
        const vacancy = new Vacancy(vacancyBody);
        vacancy.skills = vacancyBody.skills.split(',');

        const newVacancy = await vacancy.save();

        if (newVacancy) {
            console.log('', newVacancy);
            res.redirect(`/vacancies/${newVacancy.url}`)
        }

    }
};