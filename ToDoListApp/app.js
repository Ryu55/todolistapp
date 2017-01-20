//set up the express module for usage
var express = require('express');

//require the toDoController into our app
//specify the path './controllers/todoController'
var todoController = require('./controllers/todoController');

//set up the express app
var app = express();

//set our template engine, using ejs to make templates in this project
//set the view engine equal to ejs
app.set('view engine', 'ejs');

//to serve up static files, we'll use the built-in express middleware
//called express.static.
//this is going to be used for every route that put in the URL bar
//or request in a file.
app.use(express.static('./public'));

//link app.js with our methods inside todoController.js
//this links the express app 'app.js' to the controller,
//which provides the express methods to be used inside the controller.
//(ex.)->can now set up and use routes such as app.get inside the controller
todoController(app);

//listen to port
app.listen(4000);
//log a message to say what port we're listening to as a reminder
console.log('You are listening to port 4000');
