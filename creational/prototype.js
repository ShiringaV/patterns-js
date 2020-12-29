class TeslaCar {

	constructor(model, price, interior, autopilot) {
		this.model = model;
		this.price = price;
		this.interior = interior;
		this.autopilot = autopilot;
	}

	clone() {
		return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
	}
}

const prototypeCar = new TeslaCar('S', 120000, 'white', false);

// Cloning
const car1 = prototypeCar.clone();
const car2 = prototypeCar.clone();

// Editing a clone
car2.interior = 'black';
car2.autopilot = true;

console.log(car1);
console.log(car2);