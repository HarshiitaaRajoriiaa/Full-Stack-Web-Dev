// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);   // Original Object

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys); //['key1', 'key2', 'key3'] array of keys

  let values = Object.values(obj);
  console.log("After Object.values():", values); // ['value1', 'value2', 'value3'] array of values

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries); // [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']] array of [key-value pairs]

  let hasProp = obj.hasOwnProperty("key1");
  console.log("After hasOwnProperty():", hasProp); //check if the object has a specific property or not

  let newObj = Object.assign({}, obj, { newProperty: "newValue" }); // create a new object with the original object and a new property
  console.log("After Object.assign():", newObj); //* important method
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
