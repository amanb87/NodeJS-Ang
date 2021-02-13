const events = require("events");
const emitter = new events.EventEmitter();

emitter.setMaxListeners(2);  


const username = "nodeUser2";
const password = "password";

emitter.on("userAdded", function(username, password) {
	console.log("Added user " + username);
});

// One-Time Event Listener
emitter.once("userAdded", function(username, password) {
	console.log("Added user " + username);
});




// add the user & then emit an event
emitter.emit("userAdded", username, password);
emitter.emit("userAdded", username, password);
emitter.emit("userAdded", username, password);

