const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const router = require('./routes');
const app = express();

// habilitar las vistas ocn handlebars
app.engine('handlebars',
    exphbs({
        defaultLayout: 'layout'
    })
);

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'handlebars');


app.use('/', router());


app.listen(5000);

