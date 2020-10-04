// Функція зворотнього виклику (callback) 
// i функція вищого порядку (hof)

const greet = function(name) {
    console.log(`Hello ${name}`)
};

const greetWithName = (callback) => {
    const name = 'Mango';
    // console.log(callback);
    callback(name)
};

greetWithName(greet);

// ==============================================

setTimeout(()=>console.log('Callback'), 3000);

// ==============================================

const doMath = function (a, b, callback) {
    const result = callback(a, b);
    console.log(result)
}

doMath(8, 9, function(x, y) {
    return x + y;
})

doMath(10, 9, function(x, y) {
    return x - y;
});

// ================================================


const getPositionSuccess = function(position) {
    console.log('Це виклик getPositionSuccess')
    console.log(position);
}

const onGetPositionError = function (error) {
    console.log('Це виклик onGetPositionError');
    console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
    getPositionSuccess,
    onGetPositionError,
);
