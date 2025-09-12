// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);        
}

const greeting = "hello_world"

for (const val of greeting) {
    // console.log(`Each char is ${val}`);
}

//Map

const map = new Map()
map.set('IN', "Indai")
map.set('USA', "Unistaes of America")
map.set('Fr', "France")
// map.set('IN', "Indai") 

// console.log(map);

for (const key of map) {
    // console.log(key);   
}

for (const [key,value] of map) {
    // console.log(key, ':-', value);   
}

const myobj = {
    'game1' : "NFS",
    'game2' : "Spiderman"
}

// for (const [key, value] of myobj) {
//        console.log(key, ':-', value);       
// }

