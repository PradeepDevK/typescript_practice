let car_name: string = "Breeza";
let car_price: number = 1000000;

console.log(car_name);
console.log(car_price);


let bool: boolean = true;
if (bool) {
    let result: number = 10;
    console.log(result); //it can only access in this block
}
// console.log(result); //print undefined

// variables with the same name in different blocks
let bool1: boolean = false;
// If the bool1 is true then num is 1 else num is 2
if (bool1) {
    let num: number = 1;
    console.log(num);
} else {
    let num: number = 2;
    console.log(num);
}

// const variable declarations
const lang: string = 'TypeScript';
const PI: number = 3.14;
console.log(lang);
console.log(PI);