// Interfaces in Typescript
interface IPerson {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

// Define an object that implements the interface
let obj1: IPerson = {
    firstName: "Pradeep",
    lastName: "Raj",
    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

console.log(obj1.getFullName());