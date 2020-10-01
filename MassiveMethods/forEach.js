
// Array.prototype.forEach(callback(currentValue, index, array) thisArg)
// - Поелементно перебирає оригінальний масив
//  - Нічого не повертає
//  - Заміняє класичний for, якщо не потрібно переривати цикл


const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//   console.log('number', number);
// });

numbers.forEach(number => {
  console.log(number)
})

console.log(numbers);