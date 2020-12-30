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
		this.name = 'MasterCard';
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

class Visa extends Account {
	constructor(balance) {
		super();
		this.name = 'Visa';
		this.balance = balance;
	}
};

const visa = new Visa(500);
const master = new Master(505);
const paypal = new Paypal(1500);

master.setNext(visa);
visa.setNext(paypal);

master.pay(505);