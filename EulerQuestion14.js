majorArray = [];
minorArray = [];

for (i = 1000000; i > 0 ; i--){
    let n = i;
    while (n > 0) {
        minorArray.push(n);
        if (n % 2 === 0 && n !== 1) {
            n /= 2;
        } else if (n % 2 !== 0 && n !== 1){
            n = (3 * n) + 1;
        } else if (n == 1){
            break;
        }
    }
    majorArray.push(minorArray); 
    minorArray = [];
}

const longest = majorArray.reduce((p, c, i, a) => a[p].length > c.length ? p : i, 0);
const solution = majorArray[longest];
console.log(`The Collatz sequence starting with ${solution[0]} produces the longest chain, with ${solution.length} terms.`);