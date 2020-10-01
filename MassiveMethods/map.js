// Array.prototype.map()
// - Поелементно перебирає оригінальний масив
// - Не змінює оригінальний масив
// - Повертає такий ж масив, такої ж довжини

// const numbers = [5, 10, 15, 20, 25];

// const doubleNumbers = numbers.map(number => {
//     return number * 2
// })

// console.log(numbers);
// console.log(doubleNumbers);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];
  console.table(players);

//   Отримуєм масив всіх імен гравців

// const playerNames = players.map(player => {
//     return player.name
// });
// console.log('Playernames', playerNames);

// const playersId = players.map(player => player.id);
// console.log('playersId', playersId);

// const res = players.map(({ name, online}) => ({ name, online }));
// console.log(res);

// Збільшуєм кількість поінтів кожному гравцю на 10%

// const updatePlayers = players.map(player => ({
//     ...player,
//     points: Math.round(player.points * 1.1),

// }))

// console.table(updatePlayers)

// Збільшуєм кількість годин гравця по Id

const playerIdToUpdate = 'player-3';

const updatedPlayers = players.map(player => {
    if (player.id === playerIdToUpdate) {
        return {
            ...player,
            timePlayed: player.timePlayed +100,
        };
    }
    return player;
})

console.log(updatedPlayers)