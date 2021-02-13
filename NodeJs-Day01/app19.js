var express = require("express");
var http = require("http");
var app = express();


app.get("/", function(request, res) {
  res.send({loc: 'home', pin:560001 });
 
});

app.get("/user/:who", function(req, res) {
  res.send({"User" : req.params.who });
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page.");
});

http.createServer(app).listen(3000);

console.log("listening  on 3000...") ;