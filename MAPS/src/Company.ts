import { faker } from '@faker-js/faker';


export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lng: number;
        lat: number;
    }
    color: string = "red";

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

     markerContent(): string {
            return `
            <div>
                <h1>Company Name: ${this.companyName}</h1>
                <h3>Company Catch Phrase: ${this.catchPhrase}</h3>
            </div>
            `
        }
}