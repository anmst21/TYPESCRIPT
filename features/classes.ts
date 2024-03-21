class Vehicle {

constructor(public color: string) {
}

   protected honk(): void {
        console.log('beep')
    }
}
const transport = new Vehicle("orange");
console.log(transport.color)

class CarClass extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

   private drive(): void {
        console.log("Wroooom")
    }
    startMoving(): void {
        this.drive();
        this.honk();
    }
}

const carConst = new CarClass(4, "red");
carConst.startMoving()