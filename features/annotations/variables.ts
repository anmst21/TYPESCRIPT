const apples: number = 5


let colors: string[] = ["red", "green", "blue"]
let numbers: number[] = [4,7,3]
let truths: boolean[] = [true, false, false]

class Car {

}

let car: Car = new Car()

let point: {x: number, y: number} = {
    x:10,
    y: 20
}

const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

const json = '{"x": 10, "y": 20}';
const coordinates: {x:number, y:number} = JSON.parse(json);
console.log(coordinates);


let words = ['red', 'green', 'blue'];

let foundWord: boolean

for (let i = 0; i < words.length; i++) {
    if(words[i] === 'green') {
        foundWord = true;
    }
}


let number = [-10, -1, 12];

let numbersAboveZero: boolean | number = false;

for (let i = 0; i < number.length; i++) {
    if (numbers[i] > 0) {
        numbersAboveZero = number[i]
    }
}

