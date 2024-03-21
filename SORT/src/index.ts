import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharectersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, -3, 5, -2, 7, 11])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data);


const charactersCollection = new CharectersCollection("sheovaxlz");
const sorter = new Sorter(charactersCollection)
sorter.sort();
console.log(charactersCollection.data);
