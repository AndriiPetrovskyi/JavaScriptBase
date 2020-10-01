const title = 'Top 10 benefits of React framework';

const normalizedTitle = title.toLocaleLowerCase();
console.log(normalizedTitle);

const words = normalizedTitle.split(' ')
console.log(words)

const slug = words.join('-');
console.log(slug)

const easySlug = title.toLowerCase().split(' ').join('-');
console.log(easySlug);