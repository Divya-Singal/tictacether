const routes= require('express').Router();
var app = require('express')();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

var indexCtrl=require('../controller/indexController');

routes.post('/newgame',jsonParser, indexCtrl.newgame);


module.exports= routes;