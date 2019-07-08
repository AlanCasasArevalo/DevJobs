const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

module.exports = () => {
    router.get('/home',
        homeController.showJobs
    );

    router.get ('/', (req, res) => {
        res.send('funciona')
    });

    return router;
};




