// const tinderUser = new Object()  //singleton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName:{
        userfullName:{
            firstname: "hitesh",
            lastname: "choudary"
        }
    }
}

// console.log(regularUser.fullName.userfullName.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@agmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // output value milti hai uska datatype hai array, ab loop laga sakte hai
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //array ke andr array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",  //json format
//     "price": "free"
// }


[
    {},
    {},
    {}
]



// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")
