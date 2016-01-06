/**
 * Created by jeffersonwu on 1/4/16.
 */

//MONGOOSEJS.COM Getting Started:
// link: http://mongoosejs.com/docs/index.html

var mongoose = require('mongoose');
var colors = require('colors');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
//error handling
db.on('error', function(err0r) {
    console.error('connection error: %s', err0r);
});

//open mongoose connection
db.once('open', function(){
    console.log('Connected to MongoDB!'.rainbow);
});

//create schema
var kittySchema = mongoose.Schema({ name: String });

//create schema.methods


kittySchema.methods.speak = function() {
    var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
    console.log(greeting);
};

kittySchema.methods.saveSpeak = function() {
    console.log(this.name + ' was "shaved".');
};

//create model
var Kitten = mongoose.model('Kitten', kittySchema);

//create documents
var silence = new Kitten({name:'Silence'});
silence.speak();

var fluffy = new Kitten({name:'Fluffy'});
fluffy.speak();

var lucy = new Kitten({name:'Lucifer'});
lucy.speak();

//save documents

//silence
silence.save(function(err, cat){
    if(err) return console.error(err);
    cat.saveSpeak();
});
//fluffy
fluffy.save(function(err, cat){
    //error logging
    if(err) return console.error(err);
    cat.saveSpeak();
});
//lucy
lucy.save(function(err, cat){
    if(err) return console.error(err);
    cat.saveSpeak();
});

differentConsole('My first string', 'My second string', 330); //testing

// === HELPER FUNCTIONS ===
/**
 * Simple function that spits out doc creation info.
 * @author Jefferson Wu (MakerJeff)
 * @param {object} docObject The Mongoose document object to pass in.
 */
function declareCreation(docObject) {
    console.log(colors.yellow('created document named: ' + docObject.name));
}

/**
 * Console logging with substitution strings
 * @author Jefferson Wu (MakerJeff)
 * @param {String} string1 First string to inject.
 * @param {String} string2 Second string to inject.
 * @param {Integer} number1 Integer!
 */
function differentConsole(string1, string2, number1){
    console.log('%s, %s, %d', string1.yellow, string2.green, number1);
}

