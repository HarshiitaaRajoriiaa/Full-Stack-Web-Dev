//? Asynchronous Functions : CONTEXT SWITCHING / when a function is called, it starts executing and does not wait for the function to complete before moving on to the next function.
//* setTimeout(() => {} , 1000); // setTimeout is an asynchronous function
//* setInterval(() => {} , 1000); // setInterval is also an asynchronous function
// intentionally , want to introduce a delay
function syncSleep(){
    for(let i=0; i<1000000000; i++){
        // intentionally, create a loop to take up more CPU time
        // this will make the execution of the function pause and switch to other tasks
        // this is a form of context switching, but the pause is not due to a delay
        // it's just the execution of the function taking longer
    }
}
// act as an example of a synchronous function



// another example  of a Asynchronous function call
// reading  a file can take a long time to complete which allow other tasks to run in the meantime
const read = require('fs'); // just a syntax to use the file system module
//fs stands for File System
read.readFile("exampletext.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log(data);
})
console.log("This is a synchronous function call"); // this will be executed before the readFile function call completes


//* asynchronous function with execute independently and other function will execute in the mean time . after when the async function completes, it will wait in callback queue for thread to become free and then execute.



//? Synchronous Functions: need a sequence of  function calls to complete an operation.
//all function calls are synchronous by default.