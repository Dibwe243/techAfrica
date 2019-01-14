var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/techAfricaDB2', {useNewUrlParser: true});
mongoose.Promise = Promise;

var entityInfo = new mongoose.Schema({

    id:{
        type: Number,
        unique: true
    },

    DateSubmitted:{
        type: String
    },

    Country:{
        type: String
    },

    OrganisationEmail:{
        type: String
    },
    OrganisationName:{
        type: String
    },
    
    Features:{
        type: String
    },

    Website:{
        type: String,
    },

    CoursesOffered:{
        type: String,
    },

    PersonsContactEmail :{
        type: String,
    },

    AgeGroups:{
        type: String,
    },

    Status:{
        type: String,
        default: 'Pending'
    }
})

var db = mongoose.model('db', entityInfo);
module.exports = db;