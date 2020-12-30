class ObjectIterator {
	constructor(obj) {
		this.index = 0;
		this.keys = Object.keys(obj),
		this.elements = obj;
	}

	next() {
		return this.elements[this.keys[this.index++]];
	}

	hasNext() {
		return this.index < this.keys.length;
	}
};

const candy = {
    caramel: { 
        calories: 120,
        color: 'Caramel',
        price: 20
    },
    apple: { 
        calories: 92,
        color: 'Apple',
        price: 30
	},
	darkchocolate: {
		calories: 94,
        color: 'Dark chocolate',
        price: 24
	}
	
}

const collect = new ObjectIterator(candy);

while(collect.hasNext()) {
    console.log(collect.next());
}