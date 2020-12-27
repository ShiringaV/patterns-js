class Account {
	pay(orderPrice) {
		if (this.canPay(orderPrice)) {
			console.log(`Paid ${orderPrice} using ${this.name}`);
		} else if (this.incomer) {
			console.log(`Cannot pay using ${this.name}`);
			this.incomer.pay(orderPrice)
		} else {
            console.log(`Cannot pay using ${this.name}`);
			console.log('Unfortunately, not enough money');
		}
	}

	canPay(amount) {
		return this.balance >= amount;
	}

	setNext(account) {
		this.incomer = account;
	}
};

class Master extends Account {
	constructor(balance) {
		super();
		this.name = 'Master Card';
		this.balance = balance;
  }
};

class Paypal extends Account {
	constructor(balance) {
		super();
		this.name = 'Paypal';
		this.balance = balance;
    }
};

class Qiwi extends Account {
	constructor(balance) {
		super();
		this.name = 'Qiwi';
		this.balance = balance;
	}
};

const master = new Master(500);
const paypal = new Paypal(1500);
const qiwi = new Qiwi(500);

master.setNext(qiwi);
qiwi.setNext(paypal);

master.pay(9999);