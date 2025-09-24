class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}


class Teacher extends User{
constructor(username, email, password){
    super(username)
    this.email = email
    this.password = password
    }

    addCourse(){
        console.log(`A new course was add by ${this.username}`);        
    }
}


//object
const chai = new Teacher("chai", "chai.com", "234")
chai.addCourse()
const masalachai = new User("masalachai")
masalachai.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);

