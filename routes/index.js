const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const vacancyController = require('../controllers/vacancyController');

module.exports = () => {
    router.get ('/', (req, res) => {
        res.send('funciona')
    });

    router.get('/home',
        homeController.showJobs
    );

    router.get('/vacancies/new',
        vacancyController.newVacancyForm
    );

    router.post('/vacancies/new',
        vacancyController.addNewVacancy
    );


    return router;
};




