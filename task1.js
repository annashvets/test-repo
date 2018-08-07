//Task 1 
//Create instances of car and truck. 
//Try to call different methods for both, investigate output and explain why


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


let mazda = new Car("6", 2015, 200);
mazda.displayCarInfo(); //Call method displayCArInfo from instance Car. Output mazda car details
mazda.transportPeople(); // if call only this method, car details will not be displayed
console.log(" ");


let zil = new Truck("131", 1980, 80);
zil.displayCarInfo(); //Call method displayCarInfo from instance Truck. Output zil truck details
zil.transportContainer(); //call only this method, car details will not be displayed









