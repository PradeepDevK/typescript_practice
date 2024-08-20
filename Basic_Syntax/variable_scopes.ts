let global_num = 12; // global variable

class Numbers {
    num_val = 13;   // class variable
    static sval = 10;   // static field

    storeNum(): void {
        let local_num = 14; //local variable
    }
}

console.log(`Global num: ${global_num}`);
console.log(`Static Number Val: ${Numbers.sval}`);  // static variable
let objNumbers = new Numbers();
console.log(`Global Num: ${objNumbers.num_val}`);