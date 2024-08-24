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


//* complex primitives:
//? write a code that prints even number in the array.
let array = [1, 2, 3, 4, 5]

//for(){}

//array.forEach(()=>{})
array.forEach(element => {
    // if(element%2==0) console.log(element)
});

//forOf(){}
for (const element of array) {
    // if(element%2==0) console.log(element)
}
//? write a code that prints largest number in the array.
let max = -1;
array.forEach(element => {
    if (element > max) max = element;
});
// console.log(max)

//?write a code that prints all the male people's first name given a complex object.

let people = [
    {
        name: "John",
        age: 25,
        gender: "male"
    },
    {
        name: "Jane",
        age: 30,
        gender: "female"
    }, {
        name: "Harshita",
        age: 21,
        gender: "female"
    }, {
        name: "Hitesh",
        age: 28,
        gender: "male"
    }
]

for (const element of people) {
    // if(element.gender === "male") console.log(element.name)
}

//?write a code that reverses all the elements of the array.

let array2 = ['a', 'b', 'c', 'd', 'e']
for (let i = 0; i < (array2.length) / 2; i++) {
    temp = array2[i];
    array2[i] = array2[array2.length - 1 - i]
    array2[array2.length - 1 - i] = temp;
};
// console.log(array2)

//todo Arrays:
names = ["harshita", "rajoria", "hkirat", "hitesh"];
// console.log(names[0])
// console.log(" ")
for (let i = 0; i < names.length; i++) {
    // console.log(`element of names[]  ${names[i]}`);
}

//todo Objects:
const firstOject = {
    name: "harshita",
    age: 21,
    gender: "female"
}

// console.log(firstOject.gender)

//*object with functions or properties
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}


//*array of Objects
const arrayObject = [
    {
        name: "John",
        age: 25
    },
    {
        name: "Jane",
        age: 30
    },
    {
        name: "Bob",
        age: 35
    }
    , {
        name: "Alice",
        age: 20
    }, {
        name: "Tom",
        age: 28
    }
]
// console.log(arrayObject[0].name)
for (const i in arrayObject) {
    // console.log(arrayObject[i])
    // if(arrayObject[i].age >=25) console.log(arrayObject[i].name)
}
arrayObject.forEach(element => {
    // console.log(element.name)
});
for (const element of arrayObject) {
    // console.log(element)
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
    console.log(" result of the sum is : " + data);
}

//? write a function which sum two numbers and print in passive tense. 
function displayResultPassive(data) {
    console.log("sum's result is " + data);
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
console.log(value);


//! setTimeOut() : function take a function as argument
function print(value){
    console.log(value);
}
function greet(){
    console.log("Hello")
}
setTimeout(greet , 1000);
setTimeout(()=>{
    console.log("Harshita");
},  1000) //will call print function after 1000 milliseconds/ 1 seconds.

//! setinterval()
setInterval(() => { console.log("Rajoria"); }, 2000);  //will print "rajoria" after 2000 milliseconds.

