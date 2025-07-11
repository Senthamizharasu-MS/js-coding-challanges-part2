import Animal from "./Animal.js";

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    return "Woof!";
  }
}

export default Dog