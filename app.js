var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var low = require('lowdb');

// Create database
var db = low('db.json');
db.defaults({ compress: [], descompress: [] }).value();

var compress = require('./routes/compress');
var descompress = require('./routes/descompress');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/compress', compress);
app.use('/descompress', descompress);

module.exports = app;
