 const mynums = [1,2,3,4]
// const mytotal = mynums.reduce(function(acc, currval) {
// console.log(`acc: ${acc} and currval: ${currval}`);
  
//     return acc + currval
// }, 0)

// console.log(mytotal);


//arrow function

// const  myTotal = mynums.reduce((acc , curval)=> acc+curval,0)
// console.log(myTotal);


// example

const shoppingCat = [
    {
        itemName : "Js course",
        price : 2999
    },
    {
        itemName : "Pythoncourse",
        price : 3999
    },
    {
        itemName : "Mobile dev course",
        price : 5999
    },
    {
        itemName : "Data Science course",
        price : 12999
    },

]

const priceToPay = shoppingCat.reduce( (acc, item) => acc + item.price,0)
console.log(priceToPay);
