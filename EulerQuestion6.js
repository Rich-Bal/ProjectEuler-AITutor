let squaresArray = [];
let toBeSquared = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

for (let i = 0; i <= 100; i++){
    let k = i * i
    squaresArray.push(k);
    toBeSquared.push(i);
}

let squared = toBeSquared.reduce(reducer) * toBeSquared.reduce(reducer) ;
let answer = squared - squaresArray.reduce(reducer);
console.log(`The difference between the square of the sum and the sum of the squares of the first 100 natural numbers is: ${answer}`);