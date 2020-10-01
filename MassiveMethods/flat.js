// Array.prototype.flat(depth)
// Розглажує масив до вказаної глибини
// По замовчюваню глибина один 1

const array = [1, 2, [3, 4,[5]], [6, [7, 8, [9]]]];
console.log(array.flat(2))

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

console.log(tweets)

// const tags = tweets.flatMap(tag => tag.tags);
// console.log(tags)

// const stats = tags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag] : acc[tag] ? acc[tag] + 1: 1,
//     };
// }, {});

// console.log(stats)

const stats = tweets.flatMap(tweet => tweet.tags)
.reduce(
    (acc, tag) => ({
        ...acc,
        [tag] : acc[tag] ? acc[tag] + 1 : 1,
    }),
    {},
);
console.log(stats)