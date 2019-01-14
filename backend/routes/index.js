var express = require('express');
var route  = express.Router();
var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
var db = require('../modules');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1aEE9V4e-wCxq8jA7aJ9Hvpz0HhL1OJpf4TSaeopDZMs');


route.get('/update', async function(re, res){

    // Authenticate with the Google Spreadsheets API.
    doc.useServiceAccountAuth(creds, function (err) {

    // Get all of the rows from the spreadsheet.
    doc.getRows(1, async function (err, rows) {

        for(var i = 0; i<rows.length; i++){

            var data = {};

            data.id = rows[i].id
            data.DateSubmitted = rows[i].DateSubmitted
            data.Country = rows[i].Country
            data.OrganisationEmail = rows[i].OrganisationEmail
            data.OrganisationName = rows[i].OrganisationName
            data.Features = rows[i].Features
            data.Website = rows[i].Website
            data.CoursesOffered = rows[i].CoursesOffered
            data.PersonsContactEmail = rows[i].PersonsContactEmail
            data.AgeGroups = rows[i].AgeGroups

            jsonData = JSON.stringify(data);
           
                     db.create(data)
                    .then(data=>{
                        console.log('data saved ', data);
                    })
                    .catch(err=>{
                        console.log('Data already exist');
                    });
                 }


         console.log(rows[0]);
         console.log(rows.length);
        });
    });
})

route.get('/display', function(req, res){
    db.find()
    .then(data => res.send(data));
});

route.get('/deleteAll', async function(req,res){
    db.remove()
    .then(data => res.send(data));
});

//this is in order to display the approved data
route.get('/display/approved', function(req, res){
    db.collection.find({status:"approved"})
      .then(data => res.send(data))
});



module.exports = route;
