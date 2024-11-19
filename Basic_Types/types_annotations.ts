//variable annotation
let pName: string;
let pAge: number;
pName = "Pradeep";
pAge = 33;
console.log(`${pName} ${pAge}`);

// function type annotation
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(2,3));

//Object properties type annotation
interface Person {
    name: string;
    age: number;
}

const persons: Person = {
    name: "Pradeep",
    age: 33,
};
console.log(`${persons.name} ${persons.age}`);

