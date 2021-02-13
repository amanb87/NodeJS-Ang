const events = require("events");
const emitter = new events.EventEmitter();

function memUsage(){

	console.log("process.mem: ", process.memoryUsage()) ;

}
function Pulsar(timer, times){
    emitter.on('pulse', function(timer){
        var timer = setInterval(memUsage, timer);
        setTimeout(function(){
        clearInterval(timer);
    }, times);
    })    
    emitter.emit("on");
}

const pulsar = new Pulsar(1000, 8); // run every sec,  only 8 times.

pulsar.on('pulse', function(){
  console.log("process.mem: ", process.memoryUsage());
});

