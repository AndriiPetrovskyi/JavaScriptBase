// Робота з колекцією(мфсив об'єктів)

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: true },
  ];

//   Шукаєм друга по імені

const findFriendByName = (arr, findName) => {
    for(const item of arr) {
        if(item.name === findName) {
            return 'Find'
        }
    }
    return 'Not found';
}

console.log(findFriendByName(friends, 'Kiwi'));


// Отримуємо iмена усіх друзів

const getNames = (arr) => {
    const names = [];
    
    for(const i of arr) {
        names.push(i.name)
    }
    return names;
}

// console.log(getNames(friends));

// Отримуємо імена тільки друзва онлайн

const getOnlineFriends = (arr) => {
    const onlineFriends = [];
    
    for(const i of arr) {
        if(i.online) {
            onlineFriends.push(i.name);
        }
    }
    // return onlineFriends;
}

// console.log(getOnlineFriends(friends));

const getOfflineFriends = (arr) => {
    const offlineFriends = [];

    for(const i of arr) {
        // console.log(i.name)
        if (!i.online) {
            offlineFriends.push(i.name);
        }
    }
    return offlineFriends;
}

// console.log(getOfflineFriends(friends));

// Створення двох масивів, якщо онлайн, то в перший
// офлайн, то в други

const getfriendsByStatus = (arr) => {
    const freindsByStatus = {
        online: [],
        offline: [],
    };

    for(const item of arr) {
        if(item.online) {
            freindsByStatus.online.push(item)
            continue;
        }
        freindsByStatus.offline.push(item);
    }
    return freindsByStatus;
}

console.log(getfriendsByStatus(friends))