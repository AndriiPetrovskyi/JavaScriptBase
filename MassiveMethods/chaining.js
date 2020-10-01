// Ланцюжок викликів chaining

const numbers = [1, 5, 3, 4, 2];
console.log(numbers)

// const moreThenTwo = numbers.filter(num => num > 2);
// console.log(moreThenTwo);

// const multByThree = numbers.map(num => num * 3);
// console.log(multByThree)

// const sorted = numbers.sort((a, b) => a - b);
// console.log(sorted)

// Ланцюжок попередніх трьох методів (chaining)

const chain = numbers
        .filter(num => num > 1)
        .map(num => num * 3)
        .sort((a, b) => a - b);

console.log(chain);

// Сортуєм тих хто онлайн по рангу
// - спочатку фільтруєм
// - потім сортуєм

const players = [
    { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
    { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
    { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
    { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
    { id: 'id-5', tag: 'Chelsy', isOnline: false, rank: 200 },
];

const onlineAndSorted = players
    .filter(player => player.isOnline)
    .sort((playerA, playerB) => playerA.rank - playerB.rank);

console.log(onlineAndSorted);