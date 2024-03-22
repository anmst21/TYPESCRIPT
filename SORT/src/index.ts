import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharectersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([10, -3, 5, -2, 7, 11])
// numbersCollection.sort();
// console.log(numbersCollection.data)



// const charactersCollection = new CharectersCollection("sheovaxlz");
// charactersCollection.sort()
// console.log(charactersCollection.data);



const linkedList = new LinkedList();
linkedList.add(-399);
linkedList.add(200);
linkedList.add(4);
linkedList.add(4000);

linkedList.sort();
linkedList.print()
