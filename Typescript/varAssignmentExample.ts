let myBoxA = {
    heightA: 12,
    widthA: 14,
    metaData: [{"unit": "inch"}, {"price": 1000, "currency" : "INR"}]
};
let { heightA, widthA, metaData } = myBoxA;

console.log(heightA, widthA, metaData[1]["price"] );