//? calculate sum from 1 to 100

//* LOOPS-
let sum =0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
// console.log(sum); // Output: 5050




//* FUNCTIONS-
function sumTill(till){
    let sum = 0;
    for (let i = 0; i <= till; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumTill(5)); // Output: 5050



//* CALLBACKS-
function square(a){
    return a * a;
}

function cube(a){
    return a * a * a;
}

function sumOfSquares(a, b, ){
    return square(a) + square(b); //calling square function inside sumOfSquares / call back
}

console.log(sumOfSquares(2, 3)); // Output: 29


function sumOfCubes(a, b){
    return cube(a) + cube(b); //calling cube function inside sumOfCubes / call back
}

console.log(sumOfCubes(2, 3)); // Output: 273



//*using proper  use callback function
function sum(a, b, functionToBeCall){
    return functionToBeCall(a) + functionToBeCall(b);
}
sum(2, 3, square); // Output: 29
sum(2, 3, cube); // Output: 273