const fs = require("fs");
fs.readFile("test1.txt", "utf-8", function(err, data){
    if (err) { throw err; }
    console.log(data);
});
console.log("===>> Reading file...");

