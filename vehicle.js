class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }

    displayCarInfo(){
        console.log(`Name: ${this.model}; 
Year: ${this.year};
Max Speed: ${this.maxSpeed};
Type: ${this.type};`);
    }
}

class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    displayCarInfo(){
      console.log(`Car name: ${this.model}; 
      Release year: ${this.year};
      Maximum Speed: ${this.maxSpeed};
      Type: ${this.type};`);
  }

    transportPeople() {
        console.log(`I am starting transporting passengers`);
    }
}

module.exports = Vehicle;
