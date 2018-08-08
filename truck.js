const Vehicle = require ("./vehicle");

class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

      displayCarInfo(){  
      console.log(`Name: ${this.model}; 
      Year: ${this.year};
      Max Speed: ${this.maxSpeed};
      Type: ${this.type};`);
  }

    transportContainer() {
        console.log(`I am transporting heavy container`);
    }
}

module.exports = Truck;