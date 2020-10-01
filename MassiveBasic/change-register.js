// // Написати скрипт, який міняє регістр на протилежний

const string = 'qWeRTzxCv';
const letters = string.split('');
let invertedString = '';

console.log(letters);


for(const letter of letters) {
    console.log(letter)

    // if (letter === letter.toLowerCase()) {
    //     invertedString += letter.toUpperCase();
    // }   else {
    //     invertedString += letter.toLowerCase();
    // }


    const isEqual = letter === letter.toLowerCase();
    invertedString += isEqual ? letter.toUpperCase()
    : letter.toLowerCase();
}
console.log('InvertedString: ',invertedString)
