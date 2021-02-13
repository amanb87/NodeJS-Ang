//callback registration happens first
process.nextTick(function () {
    
    while(true){
       console.log(' executed? ');
       break;
   }
});

console.log("Executing nth tick");

setTimeout(function() {
   console.log("Task 3");    			
}, 0);

console.log("Executing 1 tick");
console.log("Executing 2 tick");