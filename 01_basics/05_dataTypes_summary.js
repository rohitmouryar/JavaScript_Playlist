//Primitive data type
//  7 Types : String , Number, Null, undefined, Symbol, Boolean, Bigint



// JS statically or dynamically?

// const score = 100
// const scoreValue = 100.3

// const outsideTem = null;
// const isLoggedIn = false;
// let useEmail;


// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(is === anotherId)



//Reference type (Non primitive Data type)
// Array, Object, Function


// const  names = ['Rohit', 'ROshan', 'Rajendra']
// let myObj  = {
//     name:'Raunak',
//     age : 23
// }

// const myFun = function(){
//     console.log("Hello World");
// } 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory is in the Primitive type data type (copy)
//  Heap memory is use in the non primitive data type (reference)

let myYoutubeName = "RohitMourya"
let anotherName  = myYoutubeName

console.log(myYoutubeName);
anotherName = 'ChaiOurCode';
console.log(anotherName);

let user = {
    email : "user@google.com",
    upi : "user@ybi"
}

let user2 = user

user2.email = "rohit@goggle.com"

console.log(user.email);
console.log(user2.email);

