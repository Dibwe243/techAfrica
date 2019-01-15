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
            data.datesubmitted = rows[i].datesubmitted
            data.country = rows[i].country
            data.organisationemail = rows[i].organisationemail
            data.organisationame = rows[i].organisationame
            data.features = rows[i].features
            data.website = rows[i].website
            data.coursesoffered = rows[i].coursesoffered
            data.personscontactemail = rows[i].personscontactemail
            data.agegroups = rows[i].agegroups

            jsonData = JSON.stringify(data);
           
                     await db.create(data)
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

//display all data
route.get('/display', function(req, res){
    db.find()
    .then(data => res.send(data));
});

//display approved data
route.get('/appoved', function(req, res){
    db.find({Status:"approved"})
      .then(data => res.send(data))
});

//display rejected data
route.get('/rejected', function(req, res){
    db.find({Status:"rejected"})
      .then(data => res.send(data))
});

//display pending data
route.get('/pending', function(req, res){
    db.find({Status:"pending"})
      .then(data => res.send(data))
});


route.get('/deleteAll', function(req,res){
    db.deleteMany()
    .then(data => res.send(data));
});





module.exports = route;
