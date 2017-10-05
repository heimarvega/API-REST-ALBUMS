'user strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Carga de rutas


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras

//rutas base

module.exports = app;