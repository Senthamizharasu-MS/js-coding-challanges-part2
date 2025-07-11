class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

const myDog = new Dog("Tiger", "Pug");
myDog.bark();
