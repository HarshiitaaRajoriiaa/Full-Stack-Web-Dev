//! setTimeOut() : function take a function as argument


// *setTimeout(function() , time in miliseconds)
function print(value) {
    // console.log(value);
}
function greet() {
    // console.log("Hello")
}
setTimeout(greet, 1000);
setTimeout(() => {
    // console.log("Harshita");
}, 1000) //will call print function after 1000 milliseconds/ 1 seconds.


//! setinterval()
//* setInterval( function() , time in miliseconds)
//will call function after every time in miliseconds
// setInterval(() => { console.log("Rajoria"); }, 2000);  //will print "rajoria" after 2000 milliseconds.
