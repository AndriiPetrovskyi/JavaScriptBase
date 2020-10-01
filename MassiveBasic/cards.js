const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];

  console.log(cards)

//   Видалення по індексу (indexOf)

// const cardToRemove = 'Карточка-3';

// const index = cards.indexOf(cardToRemove);
// console.log(index)

// cards.splice(index, 1)
// console.log(cards);

// Додавання по індексу

// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.log(cards)

// Оновлення по індексу

const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);

console.log(index);

cards.splice(index, 1, 'Оновлена карточка-4');
console.log(cards)