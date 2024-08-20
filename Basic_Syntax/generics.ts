// Generics in TypeScript
function printArray<T>(arr: T[]): void {
    for (let i =0 ; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray([1, 2, 3]);
printArray(["a", "b", "c"]);
printArray([true, false, true]);