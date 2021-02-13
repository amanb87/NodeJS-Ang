console.log("starting  parent...") ;
var cp = require("child_process");

var child = cp.fork(__dirname + "/child01");

child.on("disconnect", function() {
	console.log("Goodbye from the parent process");
});

child.disconnect();