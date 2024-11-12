# 1. Callbacks: Function pass as an argument in any function
``` javascript
function square(a){
    return a * a;
}

function cube(a){
    return a * a * a;
}
function operation(a, b, functionToBeCall){
    return functionToBeCall(a) + functionToBeCall(b);
}
operation(2, 3, square); // Output: 29
operation(2, 3, cube);
```

# 2. Asynchronous Function: Thread does not stuck when it is a async function : setTimeout, setInterval, ReadFile, etc. / webAPI provides you these kind of methods not JS. 
### after completion of the async function, it will go in the callback queue and wait for thread to idle again.
 ``` javascript

const file = require("fs");
file.readFile("example.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log(data);
}

 ```

 # 3. Promises: Promises are a more flexible and powerful way to handle asynchronous operations in JavaScript. Promises are just syntactic sugar over callbacks.
 how can you a async function of your own? you will just wrap out bunch of async operations inside your code.
 ```javascript
 myOwnAsyncFunction(fn , time_Of_Delay) {
    setTimeout(() => {
        fn();
    },time_Of_delay);
 }
print(){
    console.log("Hello");  // this will be printed after 2 seconds.
}
myOwnAsyncFunction(print, 2000);


//CALLBACK HELL:
setTimeout(() => {
    console.log("first");
    setTimeout(() => {
        console.log("second");
        setTimeout(() => {
            console.log("third");
        }, 2000);
    }, 2000);
} //can be more nested and hard to read. and promise make it easier to manage and look like synchronous code as well good looking.


//* Using Promises:
promisedFunction (duration){
    return new Promise((resolve)=>{
        setTimeOut(resolve , duration)
    })
}
promisedFunction(2000).then(print) // will print after 2 seconds.


const fs = require('fs');
print(data){
    console.log(data);
}
fs.readFile('example.txt', 'utf8').then(print).catch((err)=>{
    console.error(err);
})
 ```