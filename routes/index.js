const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const vacancyController = require('../controllers/vacancyController');
const usersAccountController = require('../controllers/usersAccountController');

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
    router.get('/vacancies/:url',
        vacancyController.showVacancy
    );

    router.post('/vacancies/edit/:url',
        vacancyController.editVacancy
    );

    router.get('/vacancies/edit/:url',
        vacancyController.formEditVacancy
    );

    //Creacion de cuentas
    router.get ('/usersAccount/creation-account',
        usersAccountController.formCreationAccount
    );

    router.post ('/usersAccount/creation-account',
        usersAccountController.registerValidation,
        usersAccountController.userCreation
    );

    //Creacion de cuentas
    router.get ('/usersAccount/session-init',
        usersAccountController.initSession
    );

    //Reset passwords
    router.get ('/usersAccount/reset-password',
        usersAccountController.resetPassword
    );
    



    //Security paths
    router.get('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.post('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.put('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.delete('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.patch('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.head('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.trace('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.options('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.patch('*', async (req, res) => {
        res.status(404).json({
            ok: false,
            message: 'Direccion no encontrada'
        })
    });

    router.delete('*', async (req, res) => {
        res.status(404).json({
            ok: false,
            message: 'Direccion no encontrada'
        })
    });
    return router;
};




