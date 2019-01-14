var express = require('express');
var app = express();
var server;
var db = require('./backend/routes');

app.use(express.static(__dirname+'/frontend'));
app.get('/', function(req,res){
    res.sendFile('index3.html')
})

app.use('/user', db)
server = app.listen(5955);
console.log('sever 5955 is up')