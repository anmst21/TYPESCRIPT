const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

const car1 = carMakers[0];
const myCar = carMakers.pop();

carMakers.push("111")

carMakers.map((car: string): string => {
    return car.toUpperCase();
})

const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];

importantDates.push("2030-10-10");
importantDates.push(new Date());





