var express = require('express');
var route  = express.Router();
var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
var db = require('../modules');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('12VI1CKd2Q4Ep8qtvv-5EdQyv9hrmvFYjKTYgGlpouxY');

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {

// Get all of the rows from the spreadsheet.
doc.getRows(1, async function (err, rows) {

    for(var i = 1; i<rows.length; i++){

        var data = {};

        data.id = rows[i].id
        data.lastname = rows[i].lastname
        data.firstname = rows[i].firstname
        data.birthday = rows[i].birthday
        data.gender = rows[i].gender
        data.type = rows[i].type

        jsonData = JSON.stringify(data);

        await db.create(data)
        .then(data=>{
            console.log('data saved ', data);
        })
        .catch(err=>{
            console.log('Oops something went wrong ', err);
        });
    }



    // console.log(rows[0]);
    // console.log(rows.length);
    });
});

route.get('/display', function(req, res){
    db.find()
    .then(data => res.send(data));
});

route.get('/display/approved', function(req, res){
    db.collection.find({status:"approved"})
    .then(data => res.send(data))
});



module.exports = route;
