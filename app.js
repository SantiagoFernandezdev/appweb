require('../config/config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const helmet = require('helmet');

app.use(helmet());
app.disable('x-powered-by');


app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false, limit: '9000mb' }));
app.use(bodyParser.json({ limit: '9000mb' }));

app.use(express.static(__dirname + '/public/www/', staticOptions));
app.all('*', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/www/index.html');
});
// Base de datos

//Sockets 

// jobs



app.listen(3000, (err) => {
    if (err) {
        return console.log(`Error ${err}`);
    }

    console.log(`Ejecutando aplicación en puerto 3000`);
})