const user = {
    username: "hitesh",  // jb ham current context ko refer kr rahe hai uske sth this keyword lagate hai
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcom to website`);
        // console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //empty object ko refer kar rha

// phle ke tym pe js ko execute karne ka ek hi tarika tha browser ke ander, jo engine hai joki js ko execute karta tha woh sirf ek hi jagah paya jata tha browser ke ander , abhi hamne usse engine ko nikala ar alg alg nam de diya .. node bun deno{abhi hmre pss engine standalone hai}

// browser ka andr jo global object hai woh hai window object



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);   //ye jo hai woh object ke andr hi kam kr rha function ke andr this use ni kr pa rhae
    
// }
// chai()


const chai = () => {
    let username = "hitesh"
    console.log(this.username);
    
}
//chai()


// const addTwo = (num1,num2) => (num1 + num2) // implicit return of arrow function,{} ye use hua toh return likhna pdega

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4));




