// singleton -- jb bhi ham literals ki tarah declare karte hai toh singleton nhi banta hai,constructor se banega toh han singleton banega

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh", // ye jo name hai woh string ki tarah rakha ja rha hai "name"
    "full name": "Hitesh Choduary",
    [mySym]: "mykey1", // agr key ko symbol ki tarah use karna hai toh square bracket mai likho
    age: 18,
    location: "Jaipur",
    email: "yash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser.email);

//Object.freeze(JsUser)
// console.log(JsUser.email);


JsUser.greeting = function(){
    console.log("Hello Js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());





