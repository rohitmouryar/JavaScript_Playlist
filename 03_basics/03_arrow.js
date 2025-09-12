const user  = {
    username : "Rohit",
    price : 999,

    welcomeMsg : function(){
        console.log(`${this.username}, welocme to website`)
        // console.log(this);
        
    }
}


// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()    

// console.log(this)



// function chai(){
//  const username = "Rohit"
    // console.log(this.username);
//   
// }
//   chai()


// const  chai = function () {
//     let username = "Rohit"
//     console.log(this.username);
// }
//     ,chai()


const  chai = () => {
    let username = "Rohit"
    console.log(this.username);
}
    // chai()



    //Basic Arrow Function
// const addtwo = (num1 , num2) =>{
//     return num1 +num2;
// }

// console.log(addtwo(9,8));


// implicit return
// const addtwo = (num1 , num2) => num1 +num2;
// console.log(addtwo(9,8));

// const addtwo = (num1 , num2) => (num1 +num2);
// console.log(addtwo(9,8));

const addtwo = (num1 , num2) => num1 +num2;
console.log(addtwo(9,8));
  