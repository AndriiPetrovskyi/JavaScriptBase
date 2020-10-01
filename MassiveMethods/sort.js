// Array.prototype.sort(callback(currentEl, nextEl), {})
// - Сортує і ЗМІНЮЄ оригінальний масив
// По замовчуваню сортує в порядку зростання, приводить елементи до строки

const numbers = [6, 2, 15, 5, 4, 24, 10, 33] 
// numbers.sort();
console.log(numbers)

// const letters = ['b', 'B', 'A', 'a'];
// letters.sort()
// console.log(letters)

// compareFunction - функція порівняння (callback)


// numbers.sort((currentEl, nextEl) => {
//     return currentEl - nextEl;
// })

// console.log(numbers)

// numbers.sort((currentEl, nextEl) => {
//     return nextEl - currentEl;
// })

// console.log(numbers)

// Як зробити копію масива, щоб не сортувати оригінальний
// - Array.prototype.slice();
// - Операція spread

const descSortedNumbers = [...numbers].sort((a, b) => b - a);
console.log(descSortedNumbers)

const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(ascSortedNumbers)

// Кастомне сортування складних типів

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const sortedByTimeWorst = [...players].sort((prev, next) => prev.timePlayed - next.timePlayed);
console.log('Worst :', sortedByTimeWorst);

const sortedByTimeBest = [...players].sort((prev, next) => next.timePlayed - prev.timePlayed);
console.log('Best :', sortedByTimeBest);



const byName = [...players].sort((a, b) => {
    const result = a.name[0] > b.name[0];

    if (result) {
        return 1;
    }

    if (!result) {
        return -1;
    }
});

console.table(byName);