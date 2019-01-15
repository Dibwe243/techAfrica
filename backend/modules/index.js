var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/techAfrica', {useNewUrlParser: true});
mongoose.Promise = Promise;

var entityInfo = new mongoose.Schema({

    id:{
        type: Number,
        unique: true
    },

    datesubmitted:{
        type: String
    },

    country:{
        type: String
    },

    organisationemail:{
        type: String
    },
    organisationame:{
        type: String
    },
    
    features:{
        type: String
    },

    Website:{
        type: String,
    },

    coursesoffered:{
        type: String,
    },

    personscontactemail :{
        type: String,
    },

    agegroups:{
        type: String,
    },

    Status:{
        type: String,
        default: 'Pending'
    },
})

var db = mongoose.model('db', entityInfo);
module.exports = db;