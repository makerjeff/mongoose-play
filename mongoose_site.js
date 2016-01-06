/**
 * Created by jeffersonwu on 1/4/16.
 */

//MONGOOSEJS.COM Getting Started:
// link: http://mongoosejs.com/docs/index.html

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
//error handling
db.on('error', console.error.bind(console, 'connection error:'));

//open mongoose connection
db.once('open', function(){
    console.log('we are connected!');
});

//create schema
var kittySchema = mongoose.schema({
    name: String
});

//create model
var Kitten = mongoose.model('Kitten', kittySchema);


