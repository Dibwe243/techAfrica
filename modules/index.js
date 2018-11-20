var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/techAfricaDB', {useNewUrlParser: true});
mongoose.Promise = Promise;

var entityInfo = new mongoose.Schema({

    id:{
        type: Number,
        unique: true
    },

    lastname:{
        type: String
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
        type: String,
        default: pending
    }
})

var db = mongoose.model('db', entityInfo);
module.exports = db;