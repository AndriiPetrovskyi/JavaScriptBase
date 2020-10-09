// Класи
// - оголошення
// - констпуктор
// - методи 
// - static
// - приватні властивості
// - синтаксис публічних влативостей та матоди класів
// - геттери та сеттери

class Car {
    static description = 'Клас, який змальовує автомобіль';

    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    };

    constructor({ brand, model, price}) {
        this.barnd = brand;
        this._model = model;
        this._price = price;
    }

    get price() {
        return this._price;
    }
    set price(newPrice) {
        return this._price = newPrice;
    }
    get model() {
        return this._model;
    }
    set model(newModel) {
        this._model = newModel
    }
}

const carInstance = new Car({
    brand: 'BMW',
    model: 'X5',
    price: 80000,
})

console.log(carInstance)

carInstance.model ='M8';
// console.log(carInstance)
console.log(carInstance.model)

carInstance.price = 50000;
console.log(carInstance.price)

console.dir(Car)