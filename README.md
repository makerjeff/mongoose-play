#MONGOOSE PLAY
Experimenting with Mongoose.

Tutorials to trudge through: <br>
[Mongoose Quickstart Guide](http://mongoosejs.com/docs/) (mongoose_site.js) <br>
[Mongo Director: MongoDB and Mongoose](http://blog.mongodirector.com/getting-started-with-mongodb-and-mongoose/) (server.js)<br/>
[Modulus MongoDB Getting Started](http://blog.modulus.io/getting-started-with-mongoose)

###Basic Setup Workflow:
- include 'mongoose' module with 
```var mongoose = require('mongoose');```
- connect to local mongoose server with ```mongoose.connect('mongodb://localhost/*db name*');```
- create handle for mongoose connection with ```var db = mongoose.connection;```
- define connection error handler with 
```db.on('error', console.error.bind(console, 'connection error:'));```
- open DB connection with ```db.once('open', function() { console.log('we are connected!')});```
- create schema with ```var <schema> = mongoose.Schema({ object }));```
- create Schema methods by adding functions to the *methods* property of Schema. (before compiling with mongoose.model();) 
- create model with ```var <Model> = mongoose.model('<model name:string>, <schema>);```

###CRUD Workflow:
- create documents ```<document>.
- save documents with ```<document>.save(function(error) { if(error) return console.error(error); });```


###Schema Types:
- [String](http://mongoosejs.com/docs/api.html#schema-string-js)
- [Number](http://mongoosejs.com/docs/api.html#schema-number-js)
- [Date](http://mongoosejs.com/docs/api.html#schema-date-js)
- [Buffer](http://mongoosejs.com/docs/api.html#schema-buffer-js)
- Boolean
- Mixed
- [Objectid](http://mongoosejs.com/docs/api.html#schema-objectid-js)
- Array


###More Links
[Mongoose Queries](http://mongoosejs.com/docs/queries.html)
