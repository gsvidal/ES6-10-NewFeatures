//Default parameters
//Before this feature
function newFunction(name, age, country) {
  var name = name || "Gonza";
  var age = age || "32";
  var country = country || "Perú";
  console.log(name, age, country);
}

newFunction();

//Default parameters (es6):
function newFunction2(name = "Gon", age = "33", country = "PE") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Lex","4","PE");


//Template literals(separa o une varios elementos)
//Without template literals
let hello = "Hola";
let friends = "amigos";
let epicPhrase = hello + " " + friends;
console.log(epicPhrase);

//With template literals
let epicPhrase2 = `${hello} ${friends}`;
console.log(epicPhrase2);


//Multiline
//Before es6
let frase1 = "Si es que quieres ser tan bueno si lo sueñas de verdad, \n" + "intentalo, empiezalo seguro y veloz."

//es6
let frase2 = `Esta es otra frase X
y aquí continúa la multilínea`;

console.log(frase1);
console.log(frase2);

//Desestructuration
//before es6
let person = {
  name: "Gonzalo",
  age: 32,
  country: "Perú"
}
console.log(person.name, person.age);

//es6
let { name, age, country } = person;
console.log(name, age, country);

//Spread Operator
//es6
let team1 = ["Gonza", "Osa", "Lex"];
let team2 = ["Jan", "Mao", "El Bred"];

let education = ["Monzón", ...team1, ...team2];

console.log(education);

//var, let & const:
{
  var global = "global var";
}

{
  let blockLet = "block let";
  console.log(blockLet);
}

console.log(global);

//TypeError: Assignment to constant variable:
const a = "b";
a = "a";


let name = "Gonza";
let age = 32;
//es5
obj = { name: name, age: age};
console.log(obj);
//es6
obj2 = { name, age };
console.log(obj2);


//Arrow Functions: Sintaxis reducida & This no vinculante

const names = [
  { name: "Gonzalo", age: 32 },
  { name: "Osa", age: 35}
]
//Anonymous Function
let listOfNames = names.map(
  function(item) {
    console.log(item.name);
  }
)
//Named Function
let listOfNamesNF = names.map(
  function arrayRecorrido(item) {
    console.log(item.name);
  }
)
//Arrow function in action:
let listOfNames2 = names.map(item => console.log(item.name));

//3 Arrow function examples
const listOfNames3 = (name, age, country) => {
 //..
}

const listOfNames4 = name => {
  //..
}

const square = num => num * num;

//Asynchronism
//Promises
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve("Promise resolved!");
    } else {
      reject("Something went wrong");
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));


//Classes
class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log(calc.sum(3,2));


//Modules
// import  hello   from "./module.js";
//Old Sintaxis:
const hello2 = require("./module");

console.log(hello2());


//Generator
//is a function that produces a sequence of results(series of values) instead of a single value.
function* helloWorld() {
  if(true) {
    yield "Hello, ";
  }
  if(true) {
    yield "World.";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

function* idMaker() {
  var index = 0;
  while (true)
    yield ++index;
}

var gen = idMaker();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4

//yield*
//This expression is usedd to elegate to another generator function
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

const iterator = g2();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: undefined, done: true}

var sum = 0;
var num = 1;
var ant;

function* fibonacciItems() {
  sum = sum + num;
  while(true) {
    yield sum + num;
  }
}

const fibonacciGen = fibonacciItems();

console.log(fibonacciGen.next());
console.log(fibonacciGen.next());
console.log(fibonacciGen.next());
console.log(fibonacciGen.next());
console.log(fibonacciGen.next());


function* fibonacci() {
  let a = 0, b = 1;
  while (a !== Infinity) {
    yield a;
    //The next assigment expresion makes two asignations executes at the same time ( a = b; b = a + b; )
    [a, b] = [b, a + b];
  }
}

for (let value of fibonacci()) {
  console.log(value);
}