// Функція для підрахунку загальної ціни 


const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// let total = null;

// for(let value of cart) {
//     total = total + value;
// }

// console.log(total)

const calculatePrice = (arr) => {
    let total = 0;
    for(let item of arr) {
         total += item;
    }
    return total;
}

console.log(calculatePrice(cart))

const arr1 = calculatePrice([1, 9, 20]);
console.log(arr1)