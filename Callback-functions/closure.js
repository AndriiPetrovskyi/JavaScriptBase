// Функція, рузультатом своєї роботи може повертати іншу функцію
// Повертаюча функція буде мати доступ до всіх локальних змінних (область видимості)
// Батьківська функція(та з котрої її вернули), називається "замикання"


// const foo = () => {
//     const x = 5;

//     return function() {
//         console.log(x)
//     }
// } 

// foo()

// const outerFoo = foo();
// console.log(outerFoo)
// outerFoo()


// const makeDish = function(shefName, dish) {
//     console.log(`${shefName} готує ${dish}`)
// }

// makeDish('Poly', 'суп')
// makeDish('Mango', 'омлет')

// const makeShef = function (name) {
//     return function(dish) {
//         console.log(`${name} готує ${dish}`)
//     }
// }

// const mango = makeShef('Mango')
// mango('omlet')
// mango('cofee')
// mango('becon')

// const poly = makeShef('Poly')


// const fnA = function(a) {
//     return function fnB(b) {
//         return function fnC(c){
//             console.log(a,b,c);
//         };
//     };
// };

// const res = fnA(5)(10);

// res(15)

// console.log(res)

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    return {
        raise(amount) {
            if(amount > 1000) {
                return "No!!!"
            }

            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current(amount) {
            return `Поточна зарплатня ${employeeName} - ${salary}`
        },
    };
};

const salaryManager = salaryManagerFactory('Mango', 5000);
console.log(salaryManager.current())
salaryManager.raise(1000)
console.log(salaryManager.current())
salaryManager.lower(2500)
console.log(salaryManager.current())