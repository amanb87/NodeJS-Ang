interface Vehicle {moveTo(x: number, y: number): any;  }

class Car implements Vehicle {
    moveTo(x: number, y: number) {
        console.log('Driving to ' + x + ' ' + y);
    }
}

class SportsCar extends Car { }

class Airplane {
    moveTo(x: number, y: number) {
        console.log('Flying to ' + x + ' ' + y);
    }
}

function navigate(vehicle: Vehicle) {vehicle.moveTo(59.94, 10.71); }

let spcar = new SportsCar();
navigate(spcar);

let airplane = new Airplane();
navigate(airplane);