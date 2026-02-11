


const mylib = require('./mylib');


console.log("Main Program Start")

try {
    const num1 = 10;
    const num2 = 3;

    console.log(`Add: ${num1} + ${num2} = ${mylib.add(num1, num2)}`);
    console.log(`Subtract: ${num1} - ${num2} = ${mylib.subtract(num1, num2)}`);
    console.log(`Multiply: ${num1} * ${num2} = ${mylib.multiply(num1, num2)}`);
    console.log(`Divide: ${num1} / ${num2} = ${mylib.divide(num1, num2)}`);


} catch (error) {
    console.error("An error occured:", error.message);
}

console.log("Main Program End");
