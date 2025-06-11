// array

const myArr = [0, 1, 5, 6, 3]

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,4,5)
// console.log(myArr[1]);


//  Array methods


myArr.push(6)
// console.log(myArr);

myArr.pop()
// console.log(myArr);

myArr.unshift(7)  //in starting position, not a good practice
// console.log(myArr);


myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


const newArr = myArr.join()  //return string

// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);


// slice ,splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)  // original array ko manipulate karta hai
console.log("C", myArr);
console.log(myn2);

















