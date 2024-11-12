// *String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.



//? Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

//? lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// ?slice : end excluded
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// ?substring
function getSubstring(str, start, length) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, length));
}
getSubstring("Hello World", 0, 5);

//? replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// ?split : split string with 
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " W");
//   Original String: Hello World
// After split: [ 'Hello', 'orld' ]

//? trim : trim out the extra spaces from starting
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World     ");

//? toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

//? toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");
