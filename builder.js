// Строитель — порождающий шаблон проектирования 
// предоставляет способ создания составного объекта

class Car {

	constructor() {
		this.autoPilot = false;
		this.parktronic = false;
		this.signaling = false;
	}
}

class CarBuilder {
	constructor() {
		this.car = new Car();
	}

	addAutoPilot(autoPilot) {
		this.car.autoPilot = autoPilot;
		return this;
	}

	addParktronic(parktronic) {
		this.car.parktronic = parktronic;
		return this;
	}

	addSignaling(signaling) {
		this.car.signaling = signaling;
		return this;
	}
  
	updateEngine(engine) {
		this.car.engine = engine;
		return this;
    }
    
    consolelog() {
        console.log(this.car);
        return this;
    }

	build() {
		return this.car;
	}
}

const car = new CarBuilder().addAutoPilot(true).addSignaling(true).updateEngine('3.0-150').consolelog().build;

const car2 = new CarBuilder().consolelog().build();