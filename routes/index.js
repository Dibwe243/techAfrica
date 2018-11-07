var express = require('express');
var route  = express.Router();
var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
var db = require('../modules');



// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1eylj7cJYaUQiNJVS98Ce0OWzIZNEn69W1ugxNU6mO40');

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {

// Get all of the rows from the spreadsheet.
doc.getRows(1, async function (err, rows) {

    for(var i = 1; i<rows.length; i++){
        var data = {};

        data.last_name = rows[i].last_name;
        data.first_name = rows[i].first_name;
        data.birthday = rows[i].birthday;
        data.gender = rows[i].gender;

        var jsonData = JSON.stringify(data);
        console.log(jsonData);
       
        await db.create(jsonData)
        .then(data=>{
            console.log('data saved ', data);
        })
        .catch(err=>{
            console.log('Oops something went wrong ', err);
        });
    }
    console.log(rows[0].party);
    console.log(rows.length);
    });
});

route.get('/display', function(req, res){
    db.find()
    .then(data => res.send(data));
});


module.exports = route;