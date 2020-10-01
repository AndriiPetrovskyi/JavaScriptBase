// Array.prototype.filter()
// - По елементно перебирає оригінальний масив
// - Повертає новий масив(з елементами або пустий)
// - Добавляє в повернений масив елементти, котрі відповідають кмові колбек-функції

const numbers = [5, 10, 15, 20, 25];

const filterNumbers = numbers.filter(number => number < 10 || number > 20);
console.log(filterNumbers);



const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
  ];

// Отримуємо масив всіх онлайн гравців

// const onlinePlayers = players.filter(player => player.online);
const onlinePlayers = players.filter(({online}) => online);
console.log(onlinePlayers);

// Отримуємо масив всіх офлайн гравців

const offlinePlayers = players.filter(player => !player.online);
console.log(offlinePlayers)

// Отримуємо масив всіх хардкорних гравців з часом більше 200

const hardcorePlayers = players.filter(player => player.timePlayed > 200);
console.log(hardcorePlayers)