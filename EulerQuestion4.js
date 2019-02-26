palindromeArray = [0];
let checkIndex = palindromeArray.length - 1

for (let i = 999; i > 0; i--) {
    for (let j = 999; j > 0; j--){
        let k = i * j
        let numberArray = Array.from(k.toString()).map(Number);
        let reverseArray = numberArray.slice().reverse();
        if (numberArray.join('') === reverseArray.join('') && k > palindromeArray[checkIndex]){
            palindromeArray.push(k);
            palindromeArray.shift();
        }
    }
}

console.log(palindromeArray[0]);

