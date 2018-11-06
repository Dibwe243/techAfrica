var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb//localhost:27017/techAfricaDB', {useNewUrlParser: true});

var userSchema = new mongoose.Schema({
    last_name:{
        type: String,
        required: true
    },
    first_name:{
        type: String,
        required: true
    },
    birthday:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required: true
    }
})

var db = mongoose.model('db', userSchema);
module.exports = db;