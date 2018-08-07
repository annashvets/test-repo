//Task 2-4
//2. Add static method to one class, try to call it and investigate output.

//3. all method of father’s class.
//4. Override method of father’s class.
 
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

    static staticMethod(){                    // added static method 'displayStatic' to class Vehicle
        console.log("text for static method");

    }
}

class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    transportPeople() {
        Vehicle.staticMethod(); //3. all Vehicle staticMethod in Car instance method
    }
}

class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    displayCarInfo(){
        console.log(`Car name: ${this.model}; 
        Release year: ${this.year};
        Maximum Speed: ${this.maxSpeed};
        Type: ${this.type};`);
    }

}


Vehicle.staticMethod(); // call static method
console.log(" ");

let mazda = new Car(); // call static method from father's class
mazda.transportPeople();
console.log(" ");

let zil = new Truck("131", 1980, 80); //override
zil.displayCarInfo(); 


 








