function reverse<T>(SomeArray:T[]):T[]{
    return SomeArray.reverse();
}

var letters = ['a', 'b', 'c', 'd'];
var reversedLetters = reverse<string>(letters);
console.log(reversedLetters);

var numbers = [1, 2, 3, 4];
var reversedNumbers = reverse<number>(numbers);
console.log(reversedNumbers);