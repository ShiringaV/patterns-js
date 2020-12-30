class Car {
    constructor(model, price){
        this.model = model;
        this.price = price;
    }
}

class CarFactory { 
    constructor() {
        this.cars = [];
    }

    create(model, price) {
        const candidate = this.getCar(model);
        if(candidate) {
            return candidate;
        }
        const newCar = new Car(model, price);
        this.cars.push(newCar);
        return newCar;
    }

    getCar (model) {
        return this.cars.find(car => car.model === model);
    }
}

const factory = new CarFactory;

const porscheSp = factory.create('Porsche', 120000);
const audi = factory.create('Audi', 29000);
const porschePa = factory.create('Porsche', 120000);

console.log(porscheSp);
console.log(audi);
console.log(porschePa);

console.log(porscheSp === porschePa ? 'The same object' : 'Various objects');