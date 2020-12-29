class Equipment {
	getPrice() {
		return this.price || 0;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	setPrice(price) {
		this.price = price;
	}
}

class Engine extends Equipment {
	constructor() {
		super();
		this.setName('Engine');
		this.setPrice(1800);
	}
}

class Body extends Equipment {
	constructor() {
		super();
		this.setName('Body');
		this.setPrice(12000);
	}
}

class Tools extends Equipment {
	constructor() {
		super();
		this.setName('Tools');
		this.setPrice(14000);
	}
}

// Factory pattern, but you can do without it
class EquipmentFactory {
    create(equipment) {
        switch (equipment) {
            case 'engine': return new Engine();
            case 'body': return new Body();
            case 'tools': return new Tools();
            default: 
                console.log(`Part ${equipment} not found`); 
                return {equipment: equipment,
                    error: 'Part not found',
                getPrice(){
                    return 0;
                }};
        }
    }
}

class Composite extends Equipment {
	constructor() {
		super();
		this.equipments = [];
	}

	add(equipment) {
		this.equipments.push(equipmentFactory.create(equipment));
	}

	getPrice() {
		return this.equipments
			.map(equipment => equipment.getPrice())
			.reduce((a, b) => a + b);
	}
}

class Car extends Composite {
	constructor() {
		super();
		this.setName('Audi');
	}
}

const myCar = new Car();
const equipmentFactory = new EquipmentFactory();

myCar.add('engine');
myCar.add('tools');
myCar.add('body');

console.log(`Цена ${myCar.getName()}: ${myCar.getPrice()}`);