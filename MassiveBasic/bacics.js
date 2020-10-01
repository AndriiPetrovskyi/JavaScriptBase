// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// console.table(friends)

// friends[1] = 'Alexis';
// friends[3] = 2486;
// console.table(friends)

// const lastIndex = friends.length - 1;
// console.log(lastIndex); // 3

// Ссылочное равенство (referential equality)
// const a = [1, 2, 3]
// const b = a;

// console.log('a', a) // [1, 2, 3]
// console.log('b', b) // [1, 2, 3]

// console.log(a === b) // true

// a[0] = 500;

// console.log('a', a); // [500, 2, 3]
// console.log('b', b); // [500, 2, 3]

// console.log(a === b) // true

// console.log([1, 2, 3] === [1, 2, 3]) // false

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */


const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// console.log(friends)

// for (let i = 0; i < friends.length; i += 1) {
//     friends[i] += `: index ${i}`
// }

for (let friend of friends) {
    console.log(friend)
}

// console.log(friends)