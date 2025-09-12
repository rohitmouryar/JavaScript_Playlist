const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (val){
    // console.log(val);
} )



//arrow functionn
coding.forEach((item)=> {
    // console.log(item);    
})



//++++++++++++++++++++++
function printme(item){
    console.log(item);    
}
// coding.forEach(printme)

//++++++++++++++
coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);   
})


//++++++++++++++
const mycoding = [{
    languagename : "Js",
    languagefile: "jsfile"
},
{
    languagename : "java",
    languagefile : "javafile"
}
]

mycoding.forEach( (item) => {
    console.log(item.languagefile);    
})
