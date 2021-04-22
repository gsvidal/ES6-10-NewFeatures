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