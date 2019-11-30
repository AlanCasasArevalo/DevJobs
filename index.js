const mongoose = require('mongoose');
require('./config/db');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const router = require('./routes');
const app = express();
require('dotenv').config({path: 'global_variables.env'});
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// habilitar las vistas ocn handlebars
app.engine('handlebars',
    exphbs({
        defaultLayout: 'layout',
        helpers: require('./helpers/handlebars')
    })
);

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.use(session({
    secret: process.env.SECRET_SEED,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

app.set('view engine', 'handlebars');


app.use('/', router());


app.listen(process.env.PORT || 3000);

