const MongoClient = require("mongoose");
require('dotenv').config({path: 'global_variables.env'});

MongoClient.connect(process.env.DATABASE, {
    useNewUrlParser: true
});

MongoClient.connection.on('error', (error) => {
    console.log('Error: ', error)
});



