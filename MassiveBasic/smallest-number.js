// Написати скрипт пошуку найменшого числа в масиві

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

console.log(smallestNumber)