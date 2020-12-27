class TeslaCar {

	constructor(model, price, interior, autopilot) {
		this.model = model;
		this.price = price;
		this.interior = interior;
		this.autopilot = autopilot;
	}

	produce() {
		return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
	}
}

const prototypeCar = new TeslaCar('S', 120000, 'white', false);

//Клонируем
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

console.log(car1);

car1.interior = 'white';
car1.autopilot = true;

console.log(car1);



// Еще один пример 
const car = {
    wheels: 4,
    init() {
        console.log(`У меня есть ${this.wheels} колеса. Владелец: ${this.owner}`);
    }
}

const c2 = Object.create(car, {
    owner: {
        value: 'Влад'
    }
})


c2.init();