//Singleton
//objext.create



//Object literals
const mySym = Symbol("key1")
const jsUser = {
    name: "Rohit",
    "fullName" : "Rohit Mourya",
    age : 18,
    [mySym]: "mykey1",   // sym : mykey ***
    location : "Jaipur",
    email : "rohit@google.com",
    islooggedIn : false    ,
    lastLoginDays : ["monday", "tuesday"]    
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser["fullName"]);
// console.log(typeof jsUser["fullName"]);


// jsUser.email = "roshit@chatgpt.com"
// // console.log(jsUser.email);
// Object.freeze(jsUser)
// jsUser.email = "roshit@microsoft.com"
// console.log(jsUser);



jsUser.greeting = function(){
    console.log("Hello Js User");
 }
 
 jsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
 }
 
 console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());


