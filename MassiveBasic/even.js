// Написати скрипт, котрий підраховує усі парні числа в масиві

const numbers = [3, 5, 8, 2, 11, 36, 18, 13, 111, 56];
let total = 0;


// for(let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     // console.log(number)

//     if(number % 2 === 0) {
//         // console.log(number)
//         total += number;
//     }
// }

// console.log(total)

// for(let number of numbers) {
//     if (number % 2 === 0) {
//         console.log(`${number} - even`)
//         total += number;
//     }
// }

for (const number of numbers) {
    if (number % 2 !== 0) {
        console.log(`Цю ітерацію потрібно пропустити - ${number}`)
        continue;
    } 
    console.log(`${number} - EVEN`)
    total += number;
}

console.log(total)