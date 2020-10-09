// Прототип об'єкта
// Object.create()
// [[Prototype]] and __proto__
// Ланцюжок викликів

// const objA = {
//     x: 1,
//     y: 2,
// }

// console.log(objA);

const objB = {
    y: 15,
};

const objC = objB;
console.log(objC);

const objA = Object.create(objB);

console.log(objA)

objA.x = 5;

console.log(objA.y)

console.log(objA.hasOwnProperty('x'))