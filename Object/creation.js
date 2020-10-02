// - Об'єкти, створення через лштерал
// - Характеристики та методи об'єкта
// - this в методах об'єкта
// - Перебір об''ктів: for ... in Object.keys|values|entries

// const hotel = {
//     name: 'Sunset resort',
//     stars: 5,
//     capacity: 200,
// };

// console.log(hotel)

// const fn = function(myObject) {
//     myObject = { a: 1, b: 2 }
//     console.log(myObject);
// }

// fn()

// const rtfm = function () {
//     return {a: 5};
// };

// console.log(rtfm());

// const playlist = {
//     name: 'In the End',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.tracks);
// console.log(playlist.trackCount);

// playlist.rating = 10;
// playlist.qwe = 60;
// console.log(playlist)

// console.log(playlist.propertyName)
// console.log(playlist[propertyName])

// const name = 'Andrea';
// const age = 33;

// const user = {
//     name,
//     age,
// }

// console.log(user)

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPicked = {
//     [inputName]: inputValue,
// }

// console.log(colorPicked);

// Ссилочний тип {} ==== {}

// console.log({a:1} === {a:1});
// console.log([]===[]);

// const a = {a:1, b:2, c:3}
// const b = a;

// console.log(a === b)

// a.hello = 100;
// b.hello = 150;

// console.log('a', a)
// console.log('b', b)

// const a = [1,2,3];
// a.hello = ':)';

// console.log(a);

const fn = function () {
    console.log(hello);
};

fn.hello = ':)';

console.log(fn.hello);