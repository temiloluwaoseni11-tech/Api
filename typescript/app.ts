// 1. Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// 2. Implement the Car class
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  // Constructor
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Implement start method
  start(): void {
    console.log("Car engine started");
  }
}

// 3. Create an instance of Car
const myCar = new Car("Toyota", "Camry", 2022);

// 4. Call the start method
myCar.start();