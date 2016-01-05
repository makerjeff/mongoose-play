// = MONGOOSE PLAY SERVER.JS =

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myTestDB');

var db = mongoose.connection;

db.on('error', function(err){
    console.log('connection error', err);
});

db.once('open', function(){
    console.log('connected!');
});

// == create SCHEMA ==
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    age: Number,
    DOB: Date,
    isAlive: Boolean
});

// == create MODEL ==
var User = mongoose.model('User', userSchema);

// == user instances ==
var arvind = new User({
    name:'Arvind',
    age: 99,
    DOB: '01/01/1915',
    isAlive: true
});

arvind.save(function(err, data){
    if(err) {
        console.log(err);
    }
    else {
        console.log('Saved: ', data);
    }
});