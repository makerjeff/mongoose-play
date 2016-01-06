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

//create model
var Kitten = mongoose.model('Kitten', kittySchema);

//creat documents
var silence = new Kitten({name:'Silence'});
declareCreation(silence);

var fluffy = new Kitten({name:'Fluffy'});
fluffy.speak();


// === HELPER FUNCTIONS ===

/**
 * Simple function that spits out doc creation info.
 * @author Jefferson Wu (MakerJeff)
 * @param {object} docObject The Mongoose document object to pass in.
 */
function declareCreation(docObject) {
    console.log(colors.yellow('created document named: ' + docObject.name));
}

