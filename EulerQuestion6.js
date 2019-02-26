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
console.log(answer);