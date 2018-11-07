var express = require('express');
var router  = express.Router();
var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
var db = require('../modules');



// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1eylj7cJYaUQiNJVS98Ce0OWzIZNEn69W1ugxNU6mO40');

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {

// Get all of the rows from the spreadsheet.
doc.getRows(1, function (err, rows) {
    console.log(rows);
    console.log(rows.length);
});
});

router.get('/display', function(req, res){
db.find()
.then(data => res.send(data))

// .catch(err =>{
//   console.log('something went wrong');
//   res.send(err)
// })
});



module.exports = router;
