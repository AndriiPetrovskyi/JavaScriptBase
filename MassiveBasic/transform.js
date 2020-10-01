// Написати скрипт, який об'єднує усі елемнти масива в одну строку.

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

console.log(friends)

// let string = '';

// for (let friend of friends) {
//     string += friend + ',';
// }

// string = string.slice(0, string.length - 1)

// console.log(string)

const string = friends.join(', ');
console.log(string)