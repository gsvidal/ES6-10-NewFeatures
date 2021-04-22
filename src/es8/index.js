//Object.
const data = {
  frontend: "Gonza",
  backend: "Fernando",
  design: "Osa",
}
//Object.entries is a bidimensional array
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
//Object.keys is a unidimensional array
const keys = Object.keys(data);
console.log(keys);
//Object.values is a unidimensional array
const values = Object.values(data);
console.log(values);


//Padding
//Adding white spaces or content to a string
//padStart(max characters,string to add)
const string = "hello";
console.log(string.padStart(6,"hi"));
console.log(string.padEnd(6,"hi"));
console.log("food".padEnd(12, " -----"));
console.log("drinks".padEnd(12, " -----"));


//Trailing commas
const obj = {
  name: "Gonzalo", //That comma doesn't affect our code even if there's not another property bellow it
}


//Async Await
//If we do it without try catch block, the error msg could add this kind of warning -> UnhandledPromiseRejectionWarning: 
// Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false ? setTimeout(() => resolve("Hello to the World!"), 3000) : reject(new Error("Test Error"))
  }); 
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

//This is the best way to work with async await to better handle errors
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false ? setTimeout(() => resolve("Hello to the World!"), 3000) : reject(new Error("Test Error"))
  }); 
};
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
}

anotherFunction();

