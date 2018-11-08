var mongoose = require('mongoose');


mongoose.Promise = Promise;

var entityInfo = new mongoose.Schema({

    lastname:{
        type: String,
        required:true
    },
    firstname:{
        type: String
    },
    birthday:{
        type: String
    },
    gender:{
        type: String
    },
    type:{
        type: String
    },
    status:{
        type: Boolean
    }
})

var db = mongoose.model('db', entityInfo);
module.exports = db;