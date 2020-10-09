// Основи ООП: класи, об'єкти, інтерфейс

// Фуекції-конструктори
// Function.prototype

const Car = function ({ brand, model, price } = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
} 

Car.prototype.sayHi = function () {
    console.log('Car.prototype.sayHi -> this:', this.brand);
    console.log('Hello :) ');
}

Car.prototype.changePrice = function(newPrice) {
    this.price = newPrice;
}

console.log(Car.prototype);

const myCar = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
})

console.log(myCar)

myCar.sayHi();
myCar.changePrice(25000)
console.log(myCar)

const User = function ({ email, password } = {}) {
    this.email = email;
    this.password = password;
} 

console.log(User)

const andrea = new User ({email: 'andrea@mail.com', password: 'loulla'});
console.log(andrea)

User.prototype.changeMail = function(newMail) {
    this.email = newMail;
};

andrea.changeMail('loulla@mai;.com');

console.log(andrea)