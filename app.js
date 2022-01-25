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
let workItems = [];

//home route
app.get("/", function(req, res) {
  var today = new Date();
  var options = { weekday: 'long', month: 'long', day: 'numeric' };
  var day = today.toLocaleString('en-US', options);


  res.render('list', {
    listTitle: day,
    newListItems: listItems
  });

})

//post route for home
app.post("/", function(req, res){
  let listItem = req.body.newItem;
  console.log(req.body);

//which array to send to
  if (req.body.list === 'Work') {
    workItems.push(listItem);
    res.redirect("/work");
  } else {
    listItems.push(listItem);
      res.redirect("/");
  }
})

//work route
app.get("/work", function(req, res) {
  let work = "Work List";

  res.render('list', {
    listTitle: work,
    newListItems: workItems
  });
})


//about page
app.get("/about", function(req,res){
  res.render("about");
})


app.listen(port, function() {
  console.log("the app is running on " + port);
})
