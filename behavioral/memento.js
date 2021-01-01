class Memento {
	constructor(value) {
		this.value = value;
	}
};

const creator = {
	save: val => new Memento(val),
	restore: memento => memento.value,
};

class Caretaker {
	constructor() {
		this.values = [];
	}

	addMemento(memento) {
		this.values.push(memento);
	}

	getMemento(index) {
		return this.values[index];
	}
};

const careTaken = new Caretaker();

careTaken.addMemento(creator.save('Wow'));
careTaken.addMemento(creator.save('Wow it`s'));
careTaken.addMemento(creator.save('Wow it`s amazing'));

console.log(creator.restore(careTaken.getMemento(2)));