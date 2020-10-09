// Метод setTimeout()

// const log = () => {
//     console.log('Дог функції через 3 сек')
// } 


// Асинхронність коду

// console.log('Before')
// setTimeout(log, 0)
// console.log('After')

// Очистка таймаута

const logger = (time) => {
    console.log(`Лог через ${time}ms, тому що не відмінили таймаут`)
};

const timerId = setTimeout(logger, 2000, 2000);


const shouldCancelTimer = Math.random()>0.3;
console.log(shouldCancelTimer)
clearTimeout(shouldCancelTimer);

if(shouldCancelTimer) {
    clearTimeout(timerId)
    console.log('clear')
}


