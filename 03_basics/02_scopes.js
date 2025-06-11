// let a = 10
// const b = 20
// var c = 30

// {} //object mai b {} ye hai but dont relate , function if else ye wale scope
// var c = 300

let a = 300
if(true){
   let a = 10
   const b = 20
   var c = 30
//    console.log("INNER: ", a);
   
}

// browser ke through or node environment m global scope alg hai

// console.log(a);
//  console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    } //closure - jo child function hote hai woh parent ke varible ko access kr pate hai
    // console.log(website);
    
    two()
}

// one()

if(true) {
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        //console.log(username + website);
        
    }
    // console.log(website)
}

// console.log(username)



// ++++++++++++++++  interesting  +++++++++++++++++++++

console.log(addone(5)); 

function addone(num){
    return num + 1
}



addTwo(5) //can not access addTwo before intialization(hoisting)

// another way of declaring function(expression)
const addTwo = function(num){
    return num + 2
}
