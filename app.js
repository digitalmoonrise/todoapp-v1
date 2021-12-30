const express = require('express');
const app = express();
const port = 8000;


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})


app.listen(port, function(){
  console.log("the app is running on " + port);
})
