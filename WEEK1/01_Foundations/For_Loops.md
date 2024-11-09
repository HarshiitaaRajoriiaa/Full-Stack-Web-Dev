#  LOOPS:

1. For :
   for(int i = 0 ; i< ; i++){

   }

2. For each :
   array.forEach(()=>{

   })


3. For of:
   for(var element of array){

   }

4. For in :
   for(var key in object){

   }

### ARRAYS : 
for in  , for  of , for each 
### OBJECTS :
for in


``` javascript
 //! COMPLEX PRIMITIVES:
//? write a code that prints even number in the array.
let array = [1, 2, 3, 4, 5]

// for(i = ; i < ; i++){
// }

//*array.forEach(()=>{})
array.forEach(e => {
    if(e%2==0) console.log(e)
})

//forOf(){}
for (const element of array) {
    // if(element%2==0) console.log(element)
}
//? write a code that prints largest number in the array.
let max = -1;
array.forEach(i => {
    if (i > max) max = i;
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

```
