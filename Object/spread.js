// Операція spread (розпилення)
// Array.prototype.concat() і аналого через spread

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);




// console.log(numbers)

// Пошук самого більшого числа

// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(1,2,3,4,5))
// console.log(Math.min(...temps))
// console.log(temps)

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];
// console.log(a)
// console.log(b)
// console.log(a === b)
// console.log(a[0]===b[0])

// Сшиваєм декілька масивів за допомогою spread

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps)

// Роспилення об'єктів

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({name: 'Mango'}, a, b);


const c = {
    ...a,
    x: 10,
    ...b,
    y: 20,
};

console.log(c);

const defaultSettings = {
    theme: 'light',
    showNotifications: true,
    hideSidebar: false,
  };
  
  const userSettings = {
    showNotifications: false,
    hideSidebar: true,
  };
  
  const finalSettings = {
    ...defaultSettings,
    ...userSettings,
  };
  
  console.log(finalSettings);