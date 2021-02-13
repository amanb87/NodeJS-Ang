var express = require("express");
var http = require("http");
var app = express();


app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
  console.log("homepage...") ;
 
});

app.get("/user/:who", function(req, res) {
  res.end("User " + req.params.who + ": welcome back to the system.");
  console.log("/user/:who");
  console.log(req.route);
  console.log("\n  field: ", res.get('Content-Type')); 
});

app.get("/about", function(request, response) {
  response.end("<html> <head> <title>Dyn Page</title> </head> <body><h3>Welcome to the about page!</h3></body> </html>");
   console.log("/about...") ;
});

app.get("*", function(request, response) {
  response.end("<h4>404! File Missing</h4>");
  console.log("404") ;
});



http.createServer(app).listen(4200);
console.log("listening  on 4200...") ;