var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/techAfricaDB', {useNewUrlParser: true});
mongoose.Promise = Promise;

var userSchema = new mongoose.Schema({
    last_name:{

    },
    first_name:{

    },
    birthday:{

    },
    gender:{

    }
})

var db = mongoose.model('db', userSchema);
module.exports = db;