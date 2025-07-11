import sum from "./functions/sum.js";
import sumAll from "./functions/sumAll.js";
import objRenaming from "./functions/objRenaming.js";
import spreadOps from "./functions/spreadOps.js";
import fetchHandle from "./functions/fetchHandle.js";
import totalPrice from "./functions/totalPrice.js";
import groupByProp from "./functions/groupByProp.js";
import Dog from "./functions/class/Dog.js";
import capitalize from "./functions/utils.js";
import displayStatus from "./functions/displayStatus.js";
import findByProp from "./functions/findByProp.js";
import arrCheck from "./functions/arrCheck.js";
import parallelAPICalls from "./functions/parallelAPICalls.js";
import fastestAPICall from "./functions/fastestAPICall.js";
import idGenerator from "./functions/idGenerator.js";
import displayUserInfo from "./functions/displayUserInfo.js";
import createUniqueId from "./functions/createUniqueId.js";
import Rectangle from "./functions/Rectangle.js";
import add, { PI, subtract } from "./functions/util.js";

sum(10, 12);

sumAll(1, 2, 3, 4, 5);
objRenaming({ id: 1, firstName: "John", email: "john@example.com" });
spreadOps({ a: 1, b: { c: 2 } });
fetchHandle(1);
fetchHandle(2);
totalPrice([
  { item: "A", price: 10 },
  { item: "B", price: 20 },
  { item: "C", price: 30 },
]);
groupByProp([
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
]);
const myDog = new Dog("Buddy", "Golden Retriever");
console.log(`${myDog.name} says ${myDog.makeSound()} and is a ${myDog.breed}.`);
capitalize("hello");
displayStatus(true);
displayStatus(false);
findByProp(
  [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ],
  2
);
arrCheck([2, 4, 6, 8]);
parallelAPICalls();
fastestAPICall();
idGenerator(10);
idGenerator(10, 3);
displayUserInfo({ name: "tamil", age: 22 });
createUniqueId();

const id1 = createUniqueId();
const id2 = createUniqueId();

console.log(id1);
console.log(id2);

console.log(id1 === id2);

const rect = new Rectangle(10, 5);
console.log(rect.area);

rect.dimensions = { width: 7, height: 3 };
console.log(rect.area);

console.log(add(2, 3));
console.log(subtract(5, 2));
console.log(PI);
