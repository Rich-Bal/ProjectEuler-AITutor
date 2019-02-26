let solutionsArray = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

for (let i = 0; i < 1000; i ++) {
    if (i % 3 === 0 || i % 5 === 0) {
        solutionsArray.push(i);
    }
};

console.log(` The sum of all the numbers divisible by 3 or 5 under 1000 is ${solutionsArray.reduce(reducer)}`);

