
//  # Primitive

// 7 types - String , Number, Boolean , undefined , null, Symbol, BigInt

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 0425724859048329842n


// Reference (Non primitive)

//Array, Objects, Functions


const heros = ["shaktimaan", "naagraj" , "doga"]

let myObj = {
    name: "histesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
console.log(typeof BigInt);  // function
