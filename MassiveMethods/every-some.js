// Array.prototype.every()
// -Поелементно перебирає оригінальний масив і повертає true, 
// якщо всі елементи відповідають умові

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
    ];

    const isAllOnlinePlayers = players.every(player => player.online);
    console.log(isAllOnlinePlayers);

    // Array.prototype.some()
// -Поелементно перебирає оригінальний масив і повертає true, 
// якщо хоча б один елемент відповідає умові

const isAnyOnlinePlayers = players.some(player => player.online);
console.log(isAnyOnlinePlayers);

