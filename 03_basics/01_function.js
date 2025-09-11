function sayMyName(){
    console.log("R");
console.log("O");
console.log("O");
console.log("I");
console.log("T");
}

// sayMyName()

function addTwoNum(num1, num2){
// console.log(    num1 + num2);  // undefined

// let result =  num1 + num2;
// return result;

return num1 + num2
}

const result = addTwoNum(3,5)
// console.log("Result",result);

function loginUserMeg(username = "sam"){
    if(username === undefined){     // !username
        console.log("please enter  username");
        return        
    }
    return `${username} just logged in`
}

// console.log(loginUserMeg("rohit"));
// console.log(loginUserMeg());


//shoping cart

function calculateCartPrice(...n1){
    return n1
}
// console.log(calculateCartPrice(2 ,45,678,98,56));

const user = {
    username :"rohit",
    prices : 234
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
}


// handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myArr = [234, 566, 456]

function retrunSecondValue(getArray){
    return getArray[1]
}

console.log(retrunSecondValue(myArr));
