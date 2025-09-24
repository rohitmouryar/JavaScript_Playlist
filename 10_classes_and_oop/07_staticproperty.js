class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
        
    }
    
    static createId(){
        return `123`
    }
}


const rohit = new User("Rohit")
// console.log(rohit.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.logMe.email= email
    }
}

const iphone = new
 Teacher("iphone", "I@phone.com")
iphone.logMe();

