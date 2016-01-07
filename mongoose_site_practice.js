/**
* Created by jeffersonwu on 1/4/16.

QUERIES. http://mongoosejs.com/docs/queries.html
*/

//required modules
var mongoose = require('mongoose');
var colors = require('colors');

//create connection
mongoose.connect('mongodb://localhost/test');

//handle on connection
var db = mongoose.connection;

//error handling
db.on('error', function(err){
    console.error('connection error: %s', err);
});

//open DB connection
db.once('open', function() {
    console.log('We are ready to roll!'.green);
});

//define schema
var personSchema = mongoose.Schema(
    {
        'fname':String,
        'lname':String,
        'title':String,
        'age':Number
    }
);

//define schema methods
personSchema.methods.speak = function(){
    console.log('firstname: %s, lastname: %s, title: %s, age: %d',this.fname, this.lname, this.title, this.age);
};
personSchema.methods.holla = function(){
    console.log('Hi! My name is %s %s, I\'m %d years old, and I\'m a %s', this.fname, this.lname, this.age, this.title);
};

//define model
var Person = mongoose.model('Person', personSchema);

//create documents (aka objects)
var jeff = new Person(
    {
        'fname':'jefferson',
        'lname':'wu',
        'title':'creative technologist',
        'age': 32
    }
);

var shirley = new Person(
    {
        fname:'shirley',
        lname:'yang',
        title:'teacher',
        age: 32
    }
);

var wayne = new Person(
    {
        fname:'wayne',
        lname:'dong',
        title:'analyst',
        age:32
    }
);

var wynbert = new Person(
    {
        fname:'wynbert',
        lname:'gan',
        title:'IT director',
        age: 31
    }
);

//make the people bark
jeff.speak();
shirley.speak();
wayne.speak();
wynbert.speak();

//save documents
jeff.save(function(err, peep){
    if(err) return console.error(err);
    peep.holla();
});

shirley.save(function(err, peep){
    if(err) return console.error(err);
    peep.holla();
});

wayne.save(function(err, peep){
    if(err) return console.error(err);
    peep.holla();
});

wynbert.save(function(err, peep){
    if(err) return console.error(err);
    peep.holla();
});

