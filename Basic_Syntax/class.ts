// Basic example of class
class Greeter {
    greeting: string;
    //constructor
    constructor(message: string) {
        this.greeting = message;
    }

    //class method
    greet() {
        return `Hello ${this.greeting}`;
    }
}

//Create an instance
let greeter = new Greeter("World");
console.log(greeter.greet());