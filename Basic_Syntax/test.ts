let message: string = "Typescript is awesome";
console.log(`message ${message}`);

class Gretting {
    greet(): void {
        console.log("Welcome to the world of TypeScript");
    }
}

let obj = new Gretting();
obj.greet();

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10));

let a: number = 10;
function printNumber(num: number) {
    console.log(num);
}
printNumber(a);