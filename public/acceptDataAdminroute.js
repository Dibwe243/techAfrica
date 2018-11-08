var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://localhost:27017/newdata';

//post route for sending data from the old unsorted database to the new sorted data with data accepted by adamin

router.post('/delete', function(req, res,next){
  var id = req.body.id;

  mongo.connect(url, function(err,db){
    assert.equal(null,err);
    db.collection('techAfrica-data').deleteOne({"_id": objectId(id)}), function(err, res){
      assert.equal(null, err);
      console.log('Item deleted');
      db.close();
    });
  });
});

router.post('/approval', function(req, res){
  var id = req.body.id;

  mongo.connect(url, function(err,db){
    assert.equal(null,err);
    db.collection('techAfrica-data').addOne({"_id": objectId(id)}), function(err, res){
      assert.equal(null, err);
      console.log('Item added');
      db.close();
    });
  });
});


module.exports = router;
