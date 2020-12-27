class ArrayIterator {
	constructor(el) {
		this.index = 0;
		this.elements = el;
	}

	next() {
		return this.elements[this.index++];
	}

	hasNext() {
		return this.index < this.elements.length;
	}
};

class ObjectIterator {
	constructor(el) {
		this.index = 0;
		this.keys = Object.keys(el),
		this.elements = el;
	}

	next() {
		return this.elements[this.keys[this.index++]];
	}

	hasNext() {
		return this.index < this.keys.length;
	}
};

const autos = {
    bmw: { 
        model: 'X5',
        color: 'dark black',
        price: 57000
    },
    porsche: { 
        model: '911',
        color: 'white r',
        price: 117000
    }
}

const collect = new ObjectIterator(autos);

while(collect.hasNext()) {
    console.log(collect.next());
}