// Псевдомасив Arguments та Array.from

// const fn = function() {
//     console.log(arguments);

//     const args = Array.from(arguments)
//     console.log(args);
// }
    
// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// const fn = (a, b, c, ...args) => {
//     // console.log(`${a}, ${b}, ${c}`);
//     console.log(args);
// }

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

// Написати функцію додавання для будь-якщї кількості аргументів(чисел)
// - Спред ... (rest)

const add = (...args) => {
    // console.log(args)
    let total = 0;
    for(const arg of args) {
        total += arg;
    }
    return total;
}

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

// Написати функцію, яка:
// - першим аргументом приймає масив чисел
// - після першого аргумента може бути довільна кількість інших аргументів, котрі будуть чилами
// - функція повина повернути масив, в котрому будуть тільки ті аргументи,
// починаючи з другого, для котрих є аналог в оригінальному масиві


const filterNumbers = (arr, ...args) => {
    // console.log('arr', arr);
    // console.log('args', args);
    const uniqueElements = [];

    for(const element of arr) {
        if(args.includes(element)) {
            uniqueElements.push(element)
        }
    }
    return uniqueElements;
}

console.log(filterNumbers([1, 2, 3, 4, 5], 1,  10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

