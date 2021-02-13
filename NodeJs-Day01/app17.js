let http = require('http');
const fs = require("fs");


let  server = http.createServer(function(request, response) {
    fs.readFile("index.html", "utf-8", function(err, data){
        if (err) { throw err; }  
        response.write(data);
        response.end();      
    });
    
});
server.listen(3000);