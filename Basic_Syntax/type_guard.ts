let value: number | string = 10;
//Type Guard
if (typeof value === "number") {
    console.log("value is number");
} else {
    console.log("value is string");
}