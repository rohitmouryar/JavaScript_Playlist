function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)  // REFERENCE HOLD = .call

    this.email = email
    this.password = password
}


const chai = new createUser("chai", "chai@fb.com", "1123")
console.log(chai);
