var express = require('express');
var route  = express.Router();
var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
var db = require('../modules');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('12VI1CKd2Q4Ep8qtvv-5EdQyv9hrmvFYjKTYgGlpouxY');


route.get('/update', async function(re, res){

    // Authenticate with the Google Spreadsheets API.
    doc.useServiceAccountAuth(creds, function (err) {

    // Get all of the rows from the spreadsheet.
    doc.getRows(1, async function (err, rows) {
    
        for(var i = 0; i<rows.length; i++){
    
            var data = {};
    
            data.id = rows[i].id
            data.lastname = rows[i].lastname
            data.firstname = rows[i].firstname
            data.birthday = rows[i].birthday
            data.gender = rows[i].gender
            data.type = rows[i].type
    
            jsonData = JSON.stringify(data);
            // db.findOne({id: data.id}, async function(err, found){
            //     if(err || found){

            //          console.log('ID already exists ', err);
            //      }
            //      else{
                    await db.create(data)
                    .then(data=>{
                        console.log('data saved ', data);
                    })
                    .catch(err=>{
                        console.log('Data already exist');
                    });
                 }
    
        
        // console.log(rows[0]);
        // console.log(rows.length);
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

route.get('/display', function(req, res){
db.find()
.then(data => res.send(data))

// .catch(err =>{
//   console.log('something went wrong');
//   res.send(err)
// })
});

module.exports = route;
