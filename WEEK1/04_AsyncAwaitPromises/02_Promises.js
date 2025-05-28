//? PROMISES- BASED ASYNC/AWAIT but with promised output
// promises are syntactical sugar which make code more readable and easier to understand
// if there are promise no need of callback functions

let promise = new Promise((resolve)=>{
    console.log("that's how you create a promise"); //promise { state: "pending"  }
    // anything happening  asynchronously maybe file-Reading , network request  , API etc.
    resolve("promise resolved"); // promise { state: "fulfilled", value: "promise resolved"  }
})
promise.then(()=>{
    console.log(promise)
})

//above resolve we make an asynchronous function  call and that do it's work in background and not blocking the main thread.
// then resolve (took the return value of that async function) 
// after resolve .then() function will be called and return whatever has been asked in the function



//* Function without Promise
const read = require('fs');
function readFile( fn){
    read.readFile("exampletext.txt", "utf8", (err, data) => {
        if(err) throw err;
        fn(data);
    })
}
function printData(data){
    console.log(data);
}
readFile(printData);


//* Function with Promise
const read2 = require('fs');
function readFileWithPromise(){
    return new Promise((resolve)=>{
        read2.readFile("exampletext.txt", "utf8", (err, data) => {
            if(err) throw err;
            resolve(data);
        })
    })
}

function printData(data){
    console.log(data);
}
readFileWithPromise.then(printData);


// Promise-
const p = new Promise((resolve)=>{

});
console.log(p); // Promise { <pending> } 
//* threes states of promise: pending,  resolve, rejected
const p1 = new Promise((resolve)=>{

});
console.log(p1); // Promise { <pending> } 


const p2 = new Promise((resolve)=>{
    resolve("Promise Resolved");
})
function print(){
    console.log(p2); // Promise Resolved
}
p2.then(print);
