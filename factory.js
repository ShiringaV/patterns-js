// Дизайн паттерн
// Фабрика, позволяет так сказать создать фабрику объектов
// !Понять до конца где нужен

class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandartMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory { 
    static list = {
        simple: SimpleMembership,
        standart: StandartMembership,
        premium: PremiumMembership
    }
    create (name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Stas', 'simple'),
    factory.create('Vlad', 'premium'),
    factory.create('Vitalina', 'standart'),
    factory.create('Rostik', 'simple')
]

members.forEach((m =>  {
    m.define() // !!!!!
}))

// Пример фабрики с БМВ

class Bmw {

	constructor(model, price, maxSpeed) {
		this.model = model;
		this.price = price;
		this.maxSpeed = maxSpeed;
	}
}

class BmwFactory {
	create(type) {
		if (type === 'X5')
            return new Bmw(type, 108000, 300);
		if (type === 'X6')
			return new Bmw(type, 111000, 320);
	}
}

const bmwFactory = new BmwFactory;

console.log(bmwFactory.create('X5'));
console.log(bmwFactory.create('X6'));