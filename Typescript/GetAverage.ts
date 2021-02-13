//optional argument c. Optional args are right aligned
//use "any" type for args to pretend that the function supports function overloading
function getAverage2(a: number, b: number, c?: number): string {
    var total;
    if(c === undefined)
    {
        total = a + b;
    }
    else
    {
        total = a + b + c;
    }
    
    var average = total / 3;
    return 'The average is: ' + average;
}
var result = getAverage2(4, 3);
console.log(result);