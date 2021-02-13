
const  siege = require("siege") ;

// ====  test #1 ==============

siege()
    .host()
    .on(4200)
    .for(100000).times
    .get('/')
    .attack();