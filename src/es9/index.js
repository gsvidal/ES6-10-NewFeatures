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

//Spread operator
const obj = {
  name: "Gonzalo",
  age: 32,
}

const obj1 = {
  ...obj,
  country: "Perú"
}

console.log(obj);
console.log(obj1);


//Promise finally
const helloWorld2 = () => {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => {
      resolve("Hello World2!")
    },3000) :
    reject(new Error("Test Error2"))
  });
};

helloWorld2()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("Ended"));


//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2021-01-24");

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
console.log(year);
console.log(month);
console.log(day);

