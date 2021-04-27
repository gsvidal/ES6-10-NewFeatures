//es10 New Features:
//Array.flat()
//Array.flatMap()
//
//
//


//Array.flat()
//Allows to flat n-dimensional arrays
let array = [1,2,3, [4,55,6, [7,88,999]]];

console.log(array.flat(1));
// [ 1, 2, 3, 4, 55, 6, [ 7, 88, 999 ] ]


//Array.flatMap()
//Same us flat but also allows manipulate array's data
let array = [1,2,3,4,5];

console.log(array.flatMap(val => [val, val*2])); 
// [
//   1, 2, 2, 4,  3,
//   6, 4, 8, 5, 10
// ]


//trimStart-trimEnd
//Delete the blank spaces from a string
let hello = "   hello world    ";

console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());
//   hello world    
//hello world    
//   hello world


//try/catch
//Now we don't need an error argument for the catch
//before:
try {

} catch (error) {
  error
}
//now:
try {

} catch {
  error
}


//Object.Entries()
// It will create an object from entries we put within an array
let entries = [["name", "gonzalo"], ["age", 32]];

console.log(Object.fromEntries(entries));


//Symbol
// We can get the Symbol optional description 
let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);

console.log(symbol.description);
