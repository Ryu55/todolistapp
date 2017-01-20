//require the body parser module.
//this allows us to access the data that is sent from the post request (when
//an item is added to the todo list)
var bodyParser = require('body-parser');

//display some pre-filled todo items when the page loads
var data = [{item: 'hehehe'}, {item: 'hahaha'}, {item: 'huhuhu'}];

//this is the middleware we'll run in app.post
var urlencodedParser = bodyParser.urlencoded({extended: false});

//this controller will control the behavior of our todo list,
//such as manipulating data, handling the routes, passing data to the view, etc.
module.exports = function(app){

    //get and render the todo view
    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });

    //this is how to add items to the todo list
    app.post('/todo', urlencodedParser, function(req, res){
        data.push(req.body);
        res.json(data);
    });

    //this is how to delete items from the todo list
    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });

};
