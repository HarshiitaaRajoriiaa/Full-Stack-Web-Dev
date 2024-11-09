// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()



//? push()  : push element in array at the end
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// ?pop():  pop element from array at the end
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);



//? shift() : remove element from array at the beginning
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

//? unshift() : add element to array at the beginning
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

//? concat() : combine two or more arrays
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

//? forEach() : loop through array and execute a function for each element
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function (item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);

//? map() : create a new array with the results of calling a provided function on every element in the calling array
// array. map() returns the new array, and the original array is unchanged.
function mapExample(arr) {
  console.log("Original Array:", arr);
  let newArr = arr.map((i) => {
    return i * 2;
  }
  );
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

//? filter() : create a new array with all elements that pass the  filter test implemented by the provided function
//Returns a new array containing all elements that satisfy the provided testing function.
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function (item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

//? find() : return the value of the first element in the array that satisfies the provided testing function
//Returns the first element in the array that satisfies the provided testing function.
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function (item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);
  arr.sort(function (a, b) {
    return a - b;
  })
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
