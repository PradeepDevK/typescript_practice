//variable or member intialization
let x = 20;
let y =  "Hello World";
let z = true;
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//object member intialization
class Person {
    name = "Pradeep";
    age = 33;
}
const p = new Person();
console.log(`${p.name} ${p.age}`);

//Function default parameter
function add(x = 10, y = 10) {
    return x + y
}
console.log(add(2,3));

//function return type
function mul(x:number, y:number) {
    return x * y;
}
let res:number = mul(2, 3);
console.log(res);