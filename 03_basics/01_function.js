function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName // ye hogya uska reference
// sayMyName() // execution


// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){

    // let result = number1 + number2
    // return result

    return number1 + number2
    console.log("yash"); //unreachable code , return jo kr diya uske bd koi kam nhi krega function
    
}

const result = addTwoNumbers(3,4)

// console.log("Result: ",result);

// addTwoNumbers(3, null)  //arguments - jb function ko call karte hai, parmeters jb argument pss krte hai function mai


function loginUserMessage(username = "sam"){
    if(!username){
       console.log("Please enter a username");
       return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh")) 

// console.log(loginUserMessage);  //undefined just logged in


function calculateCartPrice(val1,val2,...num1){   //rest operator
    return num1
}
 
console.log(calculateCartPrice(200, 400, 500, 2000));  // array ke andr parameter pss ho jaega


// object function ke andr

const user = {
    username: "Hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
    
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

// Arrays in functions

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));
