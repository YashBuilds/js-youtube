
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

// console.log(typeof myFunction);
// console.log(typeof BigInt);  // function



//  Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "yashbuilds"

let anothername = myYoutubename
anothername = "chai aur code"

// console.log(anothername);
// console.log(myYoutubename);


let userOne = {
    email: "a@agmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = 'y@ygmail.com'
console.log(userOne.email);



