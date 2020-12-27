class Vehicle {
    travelTime() {
        return this.timeTaken;
    }
}

class Bus extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 10
    }
}

class Taxi extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 6
    }
}

class Walk extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 15
    }
}

class Commute {
    travel(transport) {
        return transport.travelTime();
    }
}

const commute = new Commute();

console.log(commute.travel(new Walk()));
console.log(commute.travel(new Bus()));
console.log(commute.travel(new Taxi()));