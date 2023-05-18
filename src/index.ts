import { NumsCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";

const collection = new NumsCollection([2, 52, -7, 10])
collection.sort()
console.log(collection.collection);

const characters = new CharCollection("SOLID")
characters.sort()
console.log(characters.str);
