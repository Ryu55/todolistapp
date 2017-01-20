//when the document is ready, we'll fire a function
$(document).ready(function(){

  //when we have a submit event on the form,
  //'var item' will be created, which is set equal to the "Add new item..."
  //on the input form,
  //'var todo' will be created, which is set equal to an object,
  //and the 'item' property of the object 'item.val' will be set equal to
  //the input that comes from the 'Add new item...' from the form
  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};

      //make an AJAX request to the server using jQuery,
      //this will be for making post requests to the '/todo' route
      //from the todoController.js handler, 'app.post('/todo', function(req, res){})'
      $.ajax({
        type: 'POST',
        url: '/todo',

        //this data property retrieves data from above, 'var todo = {item: item.val()}'
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          //location.reload() updates the view with the new item added to the todo list
          location.reload();
        }
      });

      return false;

  });

  //when we click on an item in the todo list in the view, a function is triggered,
  //'var item' will be set to the item we selected and any spaces are replaced with
  //hyphens.
  //an AJAX request is made to the type: DELETE handler,
  //and we're deleting the item from 'url: '/todo/'.
  //
  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
