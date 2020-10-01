// Написати функцію яка міняє регістр
// кожного символа в строці на протилежний


const changeCase = (string) => {
    const letters = string.split('');
    let invertedString = '';

    for (const letter of letters) {
        const toUpperCase = letter === letter.toUpperCase();

        invertedString += toUpperCase 
        ? letter.toLowerCase() 
        : letter.toUpperCase(); 
        
    }
    return invertedString;
}

console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX