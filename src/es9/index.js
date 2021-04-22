//ES9

const obj =  {
  name: "Gonzalo",
  age: 32,
  country: "Perú",
};
//Destructuring assignment
let { name } = obj;
console.log(name);

//Destructuring + spread operator
const obj =  {
  name: "Gonzalo",
  age: 32,
  country: "Perú",
};
//Destructuring assignment
let { name, ...all } = obj;
console.log(name, all);
//rest: data I want
let { country, ...rest } = obj;
console.log(rest);