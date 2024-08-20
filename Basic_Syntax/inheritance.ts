// Base Class
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    display(): void {
        console.log(this.name);
    }
}

// Derived Class
class Employee extends Person {
    empCode: number;
    constructor(name: string, code: number) {
        super(name);
        this.empCode = code;
    }
    show(): void {
        console.log(this.empCode);
    }
}

let emp: Employee = new Employee("Pradeep", 123);
emp.display();
emp.show();