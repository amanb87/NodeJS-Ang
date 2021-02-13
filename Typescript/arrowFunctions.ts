var addNumbers = (a: number, b: number) => a + b; //inline

var addNumbers2 = (a: number, b: number) => { //multi-line
    return a + b;
};

console.log("addNumbers: ", addNumbers(2,3));
console.log("addNumbers2: ", addNumbers2(2,8));