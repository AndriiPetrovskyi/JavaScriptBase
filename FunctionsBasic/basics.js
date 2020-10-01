// Функції
// - Функціональні вирази
// - Аргументи і параметри
// - Повернення значення

// function add  (a, b) {
//     console.log(a)
//     console.log(b)

//     return a + b;
// }

const add = function(a, b) {

    return a + b;
}

console.log(add(5, 10));

const r1 = add(12, 13);
console.log('r1', r1);

const r2 = add(6, 4);
console.log('r2', r2)

const fn = function (value) {

    if(value < 50) {
        return 'Меньше ніж 50';
    } 
    return 'Більше ніж 50';
}

console.log(fn(40))
console.log(fn(60))
console.log(fn(0))