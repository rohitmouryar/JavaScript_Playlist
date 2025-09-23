const user = {
    //properties
    username : "Rohit",
    loginCount : 8,
    signedIn : true,

    grtUserDetails : function(){
        // console.log("got user detials from dtabase");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
}
// console.log(user.username);
console.log(user.grtUserDetails());
console.log(this);


// Constructor = new
// const promiseOne = new Promise()

function User(username, loginCount, IsloggedIn){
    this.username = username 
    this.loginCount = loginCount
    this.IsloggedIn = IsloggedIn

    // return this
}

// const userOne =  User("Rohit", 12, true)
// const userTwo =  User("Roshit" ,23 , true)  //override

const userOne = new User("Rohit", 12, true)
const userTwo = new User("Roshit", 23  , true)  //override
console.log(userOne);
console.log(userTwo)

