 // *Arrow Functions
 const add = (a,b) => {
    return a+b;
}
// console.log(add(1,2))



//Map Filter Find Functions
// ?MAP = take function as the operation u need to attempt on your array
const array = ["1" , "2" , "3" , "4" , "5" ,"6" , "7" , "8" , "9 "];
//transform every element of array with a particular operation.
const mul2 = array.map((a)=>{
    return a*2;
}) 
console.log(mul2)


// ?FILTER = filter out elements based on a condition
const even = array.filter((a)=>{
    return a%2 == 0; 
})
 console.log(even)


// ?FIND = find the first element that matches a condition
 const findFirstEven = array.find((a)=>{
    return a%2 == 0; 
})
 console.log(findFirstEven)


// ? .startsWith = find the first element that matches for string class
const name = "harshita"
console.log(name.startsWith("h")) // Outputs: true