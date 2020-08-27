const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const vacancyController = require('../controllers/vacancyController');
const usersAccountController = require('../controllers/usersAccountController');
const authController = require('../controllers/authController');

module.exports = () => {

    router.get ('/', (req, res) => {
        res.send('funciona')
    });

    router.get('/home',
        homeController.showJobs
    );

    router.get('/vacancies/new',
        authController.userVerification,
        vacancyController.newVacancyForm
    );

    router.post('/vacancies/new',
        authController.userVerification,
        vacancyController.addNewVacancy
    );

    router.get('/vacancies/:url',
        vacancyController.showVacancy
    );

    router.post('/vacancies/edit/:url',
        authController.userVerification,
        vacancyController.editVacancy
    );

    router.get('/vacancies/edit/:url',
        authController.userVerification,
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

    router.post ('/usersAccount/session-init',
        authController.userAuthentication
    );

    // Panel de administracion
    router.get ('/administration',
        authController.userVerification,
        authController.showAdministrationPanel
    );

    //Reset passwords
    router.get ('/usersAccount/reset-password',
        usersAccountController.resetPassword
    );

    //Security paths
    router.all('*', async (req, res) => {
        res.status(404).json({
            ok: false,
            message: 'Direccion no encontrada'
        })
    });
    return router;
};




