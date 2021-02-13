console.log("starting child ...") ;

process.on("disconnect", function() {
	console.log("Goodbye from the child process");
});