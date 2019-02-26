let fibonacciArray = [1,1];
let evenArray = [];
let currentValue = 0;
let i = 2;
const reducer = (accumulator, currentValue) => accumulator + currentValue;

while (currentValue < 4000000){
    currentValue = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    fibonacciArray.push(currentValue);        
    i++;   
    }

for (let value of fibonacciArray) {
    if (value % 2 === 0){
        evenArray.push(value);
    }
}

console.log(`The sum of even numbers in the Fibonacci sequence with value less than 4000000 is ${evenArray.reduce(reducer)}`);
