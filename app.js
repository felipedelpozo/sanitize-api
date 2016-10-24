var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var compress = require('./routes/compress');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/compress', compress);

module.exports = app;
