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
//* setInterval( function() , time in milliseconds)
//will call function after every time in milliseconds)
// setInterval(() => { console.log("Rajoria"); }, 2000);  //will print "rajoria" after 2000 milliseconds.


//clock in terminal


function clock(){
    let date = new Date();
    // let show = date.getHours().toString() + ":" + date.getMinutes().toString() + ":" + date.getSeconds().toString() + ":" + date.getMilliseconds()
    process.stdout.write( `\r${date.toLocaleTimeString()}` );
    //process.stdout.write only accepts string values
}

setInterval(clock, 1000); // calling clock function every second.
