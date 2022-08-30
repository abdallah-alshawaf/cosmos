const express = require('express');
const app = express();
const { join } = require('path');
const router = require('./routes');
const compression = require('compression');
const cookieParser = require('cookie-parser');

app.set('port', process.env.PORT || 3000);

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);









app.use((req, res) => {
    res.status(404).send('page not found')
});

app.use((err, req, res, next) => {
    res.status(500).send('server error')
});

module.exports = app;
