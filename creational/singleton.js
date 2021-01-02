class Counter {

	constructor() {
		if (Counter.exists) {
			return Counter.instance;
		}
		Counter.instance = this;
		Counter.exists = true;
		this.count = 0;
		return this;
	}
  
	getCount() {
		return this.count;
	}
  
	increaseCount() {
		this.count++;
	}
}

const counte1 = new Counter;
const counte2 = new Counter;

counte1.increaseCount();
counte1.increaseCount();
counte1.increaseCount();
counte2.increaseCount();
counte2.increaseCount();

// Вывод в консоль
console.log(counte1.getCount());
console.log(counte2.getCount());

console.log(counte1 === counte2 ? 'This is the same object' : 'This is another object');