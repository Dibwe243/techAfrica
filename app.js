var express = require('express');
var app = express();
var server;
var db = require('./routes');


app.use('/user', db)
server = app.listen(5955);
console.log('sever 5955 is up')