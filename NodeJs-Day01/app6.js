const  fs = require("fs");
const path = __dirname + "/test1.txt";
const data = "This is a sample line of text.";


fs.open(path, "w", function(error, fd) {
	var buffer = new Buffer.from(data);

// syntax: 	buf.write(string, [offset], [length], [encoding])

	fs.write(fd, buffer, 0, buffer.length, null, function(error, written, buffer) {
		if (error) {
			console.error("write err: " + error.message);
		} else {
			console.log("Success. Wrote " + written + " bytes.");
		}
	});
});
