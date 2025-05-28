// ? JAVASCRIPT OBJECT NOTATION (JSON)

const data ={ //one kind of data structure used to import and export data from a server or a file
  "name": "John",
  "age": 30,
  "isStudent": true
}
console.log(data["1"]) // output: undefined
console.log(data.name) // output: John
console.log(data["name"]) // output: John


//! how can we send this data to a server or backend
const string = '{name:"john", age:"30", "Student:"true" }'; //  we can't treat this as a object and access it like an object
console.log(string["name"]) // Output: undefined
const jsonString = JSON.stringify(data); // converting JavaScript object to JSON string






function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);



//todo When you receive JSON data from a web server or an API, you use JSON.parse() to convert it into a JavaScript object that you can work with in your code.
const jsonString1 = '{"name": "Alice", "age": 25}';
const jsonObject1 = JSON.parse(jsonString);
console.log(jsonObject1.name); // Outputs: Alice
console.log(jsonObject1.age);  // Outputs: 25


//todo When you need to send data to a web server or store it in a format that can be easily transferred or saved, you use JSON.stringify() to convert the JavaScript object into a JSON string.
const jsonObject2 = { name: "Bob", age: 30 };
const jsonString2 = JSON.stringify(jsonObject2);
console.log(jsonString2); // Outputs: '{"name":"Bob","age":30}'