//array

const myArr = [1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Naagraj"]
const myArr2 = [1,2, 3, 4]

// console.log(myArr[0]);


// methods of Array

// myArr.push(6)       //add 6 at the end 
// myArr.push(7)
// myArr.pop()         // remove last element

// myArr.unshift(0)       // add in starting
// myArr.shift()           // remove at the start 

// console.log(myArr.includes(9));     // ask the element exist in the array true/false
// console.log(myArr.indexOf(3));      // as the what is the index of the giving element


let newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);        // change into the string
// console.log(typeof newArr);        // String

// splice and slice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn1);
console.log(myn2);









