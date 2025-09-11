let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());     //Thu Sep 11 2025 07:32:41 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString());    //9/11/2025, 7:33:33 AM
// console.log(typeof myDate);     //Object

let mycreatedDate = new Date(2023, 0, 23)
// console.log(mycreatedDate.toDateString());      //Mon Jan 23 2023
// let mycreatedDate = new Date(2023, 0, 23, 5, 3)
// let mycreatedDate = new Date("2023-01-14")
// let mycreatedDate = new Date("01-14-2023")
// console.log(mycreatedDate.toLocaleString());    

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());


let meriDate = newDate.toLocaleString('default',{
    weekday : "long",
    })

    console.log(meriDate);
    













