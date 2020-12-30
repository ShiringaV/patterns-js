class Candy {

    constructor(name, calories, descriptions){
        this.name = name;
        this.calories = calories;
        this.descriptions = descriptions;
    }
}

class CandyFactory{
    create(name) {
        switch(name){
            case 'caramel':
                return new Candy('Caramel', 120, 'Candy with caramel');
            case 'apple':
                return new Candy('Apple', 92, 'Candy with apple');
            case 'chocolate':
                return new Candy('Dark Chocolate', 94, 'Candy with chocolate');
            default:
                console.log(`Type: ${name} not found`);
                break;
        }
    }
}

const factory = new CandyFactory();

console.log(factory.create('caramel'));
console.log(factory.create('chocolate'));
console.log(factory.create('apple'));