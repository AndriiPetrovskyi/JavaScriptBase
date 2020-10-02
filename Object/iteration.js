// Перебір через for ...in та Object.keys|values|entries

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
}

const keys = Object.keys(feedback)
// console.log(keys)
const values = Object.values(feedback);
// console.log(values);

let totalFeedback = 0;

// for(const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);
//     totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback)

for(const value of values) {
    console.log(value);

    totalFeedback += value;
}

console.log('totalFeedback: ', totalFeedback)

