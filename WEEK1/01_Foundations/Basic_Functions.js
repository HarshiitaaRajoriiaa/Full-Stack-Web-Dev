//TODO : DataTypes, Arrays, Loops, Objects, Functions
//* simple primitives:
//? write a code to greet a user given their first name and last name.
let firstName = "harshita"
let lastName = "Rajoria"
// console.log(`hey ${firstName} ${lastName}! how are you`)

//?write a code to greet a user based on their gender.{if else}
let gender = "male"
// if(gender== "male") console.log(`hey Mr. ${firstName} ${lastName}`)
// else console.log(`hey MRS. ${firstName} ${lastName}`)


//?write a code that counts from 0 to 1000 and print (for loop.)
let count = 0;
for (let i = 0; i <= 1000; i++) {
    count++;
}
// console.log(`${count}`)
// console.log(count)

//todo let, var = original way to define a variable, const
//*can be redeclare and rewrite: using var isn't a good practice because it can be re-declared by other programmers when they are working together on same project which causes problems redundancy problems. 
var a = 1;
a = 2;
var a = 3;
// console.log(a)

// * can't be redeclare and can be rewrite:
let b = 1;
b = 2;
// console.log(b)

//* can't be redeclare and rewrite
const c = 1;
// c=2;
// console.log(c)


//todo data-type:
let name = "harshita"
let age = 21
// console.log(`this person name is ${name} and age is ${age}`)


// todo if else statements:
let isMarried = false
// if(isMarried) console.log(`this person is ${name} is Married`)
// else console.log(`this person is ${name} is not Married`)

//todo loops:
for (let i = 0; i <= 100; i++) {
    // console.log(i)
}






//todo functions: read by only when function called, otherwise skipped

function add(a, b) {
    console.log(a + b);
}
// add(12,56);
function minus(a, b) {
    if (a > b) return a - b
    else return b - a;
}
// console.log(minus(12,56));
const value = minus(12, 65)
// console.log(value)

function print(prompt) {
    return prompt
}
// console.log(print("prompt is nothing"));


function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function calculateArithmetic(a, b, type) {
    if (type == "sum") {
        const value = sum(a, b);
        return value;
    }
    if (type == "minus") {
        const value = minus(a, b);
        return value;
    }
}
calculateArithmetic(1, 2, sum);


//*callback functions: calling function inside a function
//? write a function which sum two numbers
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

//? write a function to display sum in pretty format
function displayResult(data) {
    // console.log(" result of the sum is : " + data);
}

//? write a function which sum two numbers and print in passive tense. 
function displayResultPassive(data) {
    // console.log("sum's result is " + data);
}

//?you are only allowed to call one function after this!!
//*Approach one: two methods called
let sumResult = sum(10, 20);
displayResult(sumResult);
displayResultPassive(sumResult);

//*Approach two : 
function sum(num1, num2) {
    let result = num1 + num2;
    displayResult(result);
}
sum(1, 2)

//*Approach three without any change any logic : perfect approach with one method
//passed function as  a parameter  in the function:
function sum(num1, num2, fn) {
    let result = num1 + num2;
    fn(result);
}
let ans1 = sum(1, 2, displayResult);
let ans2 = sum(1, 2, displayResultPassive);



function calculateArithmetic(a, b, arithmeticFinalFunction) {
    return arithmeticFinalFunction(a, b)
}
function sum(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}

const value1 = calculateArithmetic(1, 2, sum); //3
const value2 = calculateArithmetic(1, 2, minus); // -1
// console.log(value);


