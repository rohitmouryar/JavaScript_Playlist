// let myName  = "Rohit         "
// let mychannel = " chai    "
// console.log(myName.trueLength);



let myHeros = ["thor", "Spidermam"]

let heroPower = {
    thor : "hammer",
    spderman : "Sling",

    getSpiderman : function(){
    console.log(`Spidly power is ${this.spiderman}`);
    }
}


Object.prototype.Rohit = function(){
    console.log(`Rohit is present in all objects`);    
}

// heroPower.Rohit()

// myHeros.Rohit()

Array.prototype.heyRohit = function(){
    console.log(`Rohit say`);
}

// myHeros.Rohit()
// myHeros.heyRohit()
// heroPower.heyRohit()



//inheritance

const user = {
    name : 'Rohit',
    email : 'Email.com'
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isavailable : false
}

const TASupport = {
    makeAssignment : 'JsAssignmenet',
    fullTime : true,
    __proto__:TeacherSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher)


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()