// Структурный паттерн
// Используется для кеширование данных.
// Позволяет использовать повторно объекты если они уже есть в массиве.
// porscheSport === porschePanamera

class Car {
    constructor(model, price){
        this.model = model 
        this.price = price
    }
}

class CarFactory { 
    constructor() {
        this.cars = []
    }

    create(model, price) {
        const candidate = this.getCar(model)
        if(candidate) {
            return candidate
        }
        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }

    getCar (model) {
        return this.cars.find(car => car.model === model)
    }
}

const factory = new CarFactory;

const porscheSport = factory.create('Porsche', 120000)
const audi = factory.create('Audi', 29000)
const porschePanamera = factory.create('Porsche', 110000)

console.log(porscheSport)
console.log(audi)
console.log(porschePanamera)