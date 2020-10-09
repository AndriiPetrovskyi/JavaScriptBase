// Метод setInterval()

// const logger = time => {
//     console.log(`Лог кожні ${time}ms - ${Date.now()}`)
// }

// setInterval(logger, 2000, 2000)

// let subscriptionCounter = 0;
// let hasSubscribed = false;

// const intevalId = setInterval(() => {
//     if(subscriptionCounter === 3 || hasSubscribed) {
//         console.log('Stop interval');
//         clearInterval(intevalId);
//         return;
//     }
//     console.log('Subscribe!!!!!!');
//     // hasSubscribed = true
//     subscriptionCounter += 1;
// }, 1000)