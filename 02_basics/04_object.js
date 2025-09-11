

// const tinderUser = new Object()  //Singleton Object  O/P {}
// const tinderUser = {}   //non singleton object       O/P {}


const tinderUser = {}
tinderUser.id = "1234"
tinderUser.name = "sammy"
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstnsme : "rohit",
            lastname : "mourya"
        }
    }
}


// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstnsme);


//Merge
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 5:"d"}

// const obj3 = {, obj1, obj2}

const obj3 = Object.assign({}, obj1,obj2)
// const obj3 = Object.assign( obj1,obj2)
console.log(obj3);
// console.log(obj1);

const obj4 = {...obj1, ...obj2}
console.log(obj4);





 

