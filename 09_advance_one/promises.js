const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task 1 is compelete');
        resolve()  // it is connect with then
    }, 1000)
})

// promise consumotion
promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2");
              resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
    
})



const promiseTHree  = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Rohit", email: "rohit@example.com"})
    }, 1000)
})
promiseTHree.then(function(user){
    console.log(user);    // use for take the data 
})



const promiseForth = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        // let error = false;

        if(!error){
            resolve({username :"Rohit", password : "1234"})
        }
        else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})


//CHAINING
promiseForth.
then((user)=>{
    console.log(user);
    return user.username    
})
.then((myusername) => {           //myusername is variable
    console.log(myusername);
})
.catch(function(error){
    console.log(error);    
})
.finally(() => console.log("The promise is either resolve and reject finally"));



const promiseFive = new Promise(function(resolve, reject){
     setTimeout(function(){
        let error = true;
        // let error = false;

        if(!error){
            resolve({username :"Roshit", password : "1234"})
        }
        else{
            reject('Error: Roshit went wrong')
        }
    }, 1000)
})



async function consumepromiseFive(){
   try {
     const response = await promiseFive
    console.log(response); 
   } catch (error) {
    console.log(error);    
   }   
}
consumepromiseFive()

// *****************************************************
// async function getAllUsers(){
//    try {
//      const response = await fetch('https://api.github.com/users')
//     const data = await response.json()
//     console.log(data); 
//    } catch (error) {
//     console.log(error);    
//    }   
// }
// getAllUsers()

fetch('https://api.github.com/users/maurya-rohit')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error));
