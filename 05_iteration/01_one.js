// for
for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
}

    // console.log(element); // this is not accessible outer of the loop

    for (let index = 0; index <= 10; index++) {
    const element = index;
    if(index == 5){
    //  console.log("5 is the best number");
    }
    // console.log(element)    
}


for(let i = 0; i<=10; i++){
    // console.log(`outer loop vqlue : ${i}`);    
    for(let j = 0; j<= 10; j++){
        // console.log(`inner loop vlaue ${j} and inner loo ${i}`)
        // console.log(i + '*' +j + '=' +i*j);
        
    }
}

let myarr = ["rohit", "roshit", "yash"];
// console.log(myarr.length);

for(let i = 0; i< myarr.length; i++){
    const element = myarr[i]
    // console.log(element);    
}

// break and continue

// for(let i=0; i<=20; i++){
//     if(i==5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i is ${i}`);
    
// }

for(let i=0; i<=20; i++){
    if(i==5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
    
} 