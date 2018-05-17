var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//Rotas
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var teste = require('../app/routes/teste')(app);
var apiRoutes = require('../app/routes/api')(app);
var apiControllers = require('../app/controllers/api');

module.exports = app;