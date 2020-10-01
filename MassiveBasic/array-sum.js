const arr = [10, 20];
const array = [30, 40];

let total = 0;

const numbersArr = arr.concat(array);
console.log(numbersArr)

for (let numb of numbersArr) {
    total += numb;
}

console.log(total)