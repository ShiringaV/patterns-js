// Позволяет создавать только один инстанс объекта

class Counter {

	constructor() {
		if (typeof Counter.instance === 'object') {
			return Counter.instance;
		}
		this.count = 0;
		Counter.instance = this;
		return this;
	}
  
	getCount() {
		return this.count;
	}
  
	increaseCount() {
		return this.count++;
	}
}

const c1 = new Counter;
const c2 = new Counter;

c1.increaseCount();
c2.increaseCount();
c1.increaseCount();
c2.increaseCount();
c2.increaseCount();

console.log(c1.getCount());
console.log(c2.getCount());

// Примес с БД

class Database {
    constructor(data) {
        if (Database.exists){
            return Database.instance;
        }
        Database.instance = this;
        Database.exists = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const db = new Database('mongodb');
const newDb = new Database('PostgresSQL');

console.log(newDb.getData());
