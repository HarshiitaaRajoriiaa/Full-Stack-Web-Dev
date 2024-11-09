

const dog = {
  name: "dog",
  age: 3,
  breed: "Golden Retriever"
}
const cat = {
  name: "cat",
  age: 2,
  breed: "Siamese"
}


function print(animal) {
  console.log(`Name: ${animal.name}`);
  console.log(`Age: ${animal.age}`);
  console.log(`Breed: ${animal.breed}`);
}


print(dog); // Output: Name: dog, Age: 3, Breed: Golden Retriever

print(cat); // Output: Name: cat, Age: 2, Breed: Siamese


// here we can both the objects have same attributes and we have to make manualy copy the attributes every time we create a new object of same attributes
// wew= will make class which have same attributes and will create new object with same attributes
class Animal {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }


  static print(){
    console.log("This is Animal class");
  }
  breedInfo( this) {
    console.log(`Breed: ${this.breed}`);
  }
  printInfo(this) {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
}



console.log(Animal.print()); // Output: This is Animal class doesn't need new object, it is static method
const dog2 = new Animal("dog", 3, "Golden Retriever");
dog2.breedInfo(); // Output: Breed: Golden Retriever
dog2.printInfo(); // Output: Name: dog, Age: 3


