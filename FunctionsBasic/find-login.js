// Написати функцію findLogin(allLogins, loginFind) для пошуку логіна
// - якщо логіна немає, вивести повідомлення 'Користувач [логін] не найдений'
// - Якщо знайшли логін, вивести 'Користувач [логін] найдений'

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n', 'Andrea2486'];

// const findLogin = (allLogins, loginFind) => {
//     for(const login of allLogins) {
//         if (login === loginFind) {
//             return `Користувач ${loginFind} найдений`
//         }
//     }
//     return `Користувач ${loginFind} не найдений`
// }

// console.log(findLogin(logins, 'S-Igor54'))

function findLogin (arr, loginFind) {
    return arr.includes(loginFind)
    ? `Користувач ${loginFind} найдений`
    : `Користувач ${loginFind} не найдений`
};

console.log(findLogin(logins, 'Andrea2486'))
