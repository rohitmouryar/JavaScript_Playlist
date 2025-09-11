const  name = "Rohit "
const   repoCount = 50

// console.log(name + repoCount  + " value") //this is not a better way to represent the string

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // this is the better way   


const gameName = new String('Roshit-Rosh')

console.log(gameName[0]);
console.log(gameName.__proto__);    //{} object
console.log(gameName.length);
console.log(gameName.toUpperCase())

// for chracter
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

const newString1 = "    rohit     "
console.log(newString1.trim());

 const url = 'https://rohit.com/rohit%20moury'
console.log( url.replace('%20','-'));
console.log(url.includes('rohit')); // exist in the string


console.log(gameName.split('-')); // divide nto two part



