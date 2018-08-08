const Vehicle = require ("./vehicle");


class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    transportPeople() {
        console.log(`I am starting transporting passengers`);

    }
}


module.exports = Car;