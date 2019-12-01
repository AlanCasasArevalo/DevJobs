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

exports.showVacancy = async (req, res, next) => {
    const vacancy = await Vacancy.findOne({ url: req.params.url });

    if (!vacancy) return next();

    if (vacancy && typeof vacancy !== 'undefined') {
        console.log('vacancy', vacancy);
        //Aqui podemos o bien hacer un render, redirect o bien un return del jsons

        res.render('vacancy', {
            vacancy,
            pageName: vacancy.company,
            barra: true
        })
    }
};

exports.formEditVacancy = async (req, res, next) => {
    const vacancy = await Vacancy.findOne({ url: req.params.url });

    if (!vacancy) return next();

    if (vacancy && typeof vacancy !== 'undefined') {
        res.render('edit-vacancy', {
            vacancy,
            pageName: `Editar - ${ vacancy.title }`,
            barra: true
        })
    }

};


















