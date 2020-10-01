// Написати скрипт пошуку логіна
// - Якщо логіна немає, вивести повідомлення 'Користувач [login] не знайдено'
// - Якщо логін знайдено, вивести повідомлення 'Користувач [login] знайдено'

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'k1widab3st';

// let message = `Користувач з логіном ${loginToFind} не найдено`;

// for (let i = 0; i < logins.length; i += 1) {
//     if (loginToFind === logins[i]) {
//         message = `Користувач з логіном ${loginToFind} найдено`;
//         break;
//     }
// }


// for (let login of logins) {
//     if (login === loginToFind) {
//         message = `Користувач з логіном ${loginToFind} найдено`;
//         break;
//     }
// }
// console.log(message)

const message = logins.includes(loginToFind) 
? `Користувач з логіном ${loginToFind} найдено` 
: `Користувач з логіном ${loginToFind} не найдено`;

console.log(message)