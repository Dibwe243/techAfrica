var express = require('express');
var app = express();
var server = require('http').Server(app);
var db = require('./routes');


server = app.listen(process.env.PORT || 5151);
console.log('sever 5151 is up')