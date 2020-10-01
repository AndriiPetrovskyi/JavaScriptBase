// Написати функцію findSmallesNumber(numbers) для пушуку найменшого числа в масиві,
// при умові, що числа унікальні

const findSmallestNumber = (arr) => {
    let smallestNumber = arr[0];

    for(const number of arr) {
        if(smallestNumber > number) {
            smallestNumber = number;
        }
    } 
    return smallestNumber;
}

console.log(findSmallestNumber([5,3,8,12]))
console.log(findSmallestNumber([5,10]))