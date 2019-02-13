var express = require('express');
var app = express();

var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
var doc = new GoogleSpreadsheet('19cmtlazupuSqPX4KACwPh1IyUTKOW1l1-GmgxD8_xaI');

app.get('/',(req,res)=>{
    doc.useServiceAccountAuth(creds, function (err) {

        doc.getRows(1, function (err, rows) {
            res.send(rows);        
            });
        });
});
      



const server =app.listen(7000,()=>{
    console.log(`Express running -PORT ${server.address().port}`);
});