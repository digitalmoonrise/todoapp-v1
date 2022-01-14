const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 8000;

//add ejs
app.set('view engine', 'ejs');

//use body bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var listItems = [];

app.get("/", function(req, res) {
  var today = new Date();
  var options = { weekday: 'long', month: 'long', day: 'numeric' };
  var day = today.toLocaleString('en-US', options);


  res.render('list', {
    kindOfDay: day,
    newListItems: listItems
  });

})

//post route
app.post("/", function(req, res){
  var listItem = req.body.newItem;

  listItems.push(listItem);

  res.redirect("/");
})




app.listen(port, function() {
  console.log("the app is running on " + port);
})
