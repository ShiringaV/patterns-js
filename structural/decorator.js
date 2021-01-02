class Auto {

    constructor(name, model){
        this.name = name;
        this.model = model;
    }

    get info() {
        return `Car: ${this.name} ${this.model}`
    }
}

function sport(auto) {
    auto.isNO2 = true;
    auto.isSport = function() {
        return `${this.name} ${this.model} is a improved car. NO2: ${auto.isNO2}`;
    }
    return auto;
}

const bmw = sport(new Auto('BMW', 'X7'));

console.log(bmw.isSport());