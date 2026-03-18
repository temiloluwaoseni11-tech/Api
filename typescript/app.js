// 2. Implement the Car class
var Car = /** @class */ (function () {
    // Constructor
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement start method
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// 3. Create an instance of Car
var myCar = new Car("Toyota", "Camry", 2022);
// 4. Call the start method
myCar.start();
