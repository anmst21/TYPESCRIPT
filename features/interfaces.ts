interface Reportable {
  
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
};//

const drink2 = {
    color: "brown",
    carbonated: true, 
    sugar: 40,
    summary(): string {
        return `This 2 has ${this.sugar}g. of sugar.`;
    }
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink2)