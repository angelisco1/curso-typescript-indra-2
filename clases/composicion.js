"use strict";
class Vehiculo {
    matricula;
    marca;
    modelo;
    year;
    velocidad;
    constructor(matricula, marca, modelo, year, velocidad = 0) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.velocidad = velocidad;
    }
    acelerar(velocidadExtra = 5) {
        this.velocidad += velocidadExtra;
    }
    frenar(velocidadExtra = 5) {
        this.velocidad -= velocidadExtra;
    }
    toString() {
        return `Matricula=${this.matricula}, Marca=${this.marca}, Modelo=${this.modelo}, Year=${this.year}, Velocidad=${this.velocidad}`;
    }
}
class Motor {
    estaArrancado;
    constructor(estaArrancado = false) {
        this.estaArrancado = estaArrancado;
    }
    arrancar() {
        this.estaArrancado = true;
    }
    apagar() {
        this.estaArrancado = false;
    }
    toString() {
        return `MotorArrancado=${this.estaArrancado}`;
    }
}
class VehiculoAMotor extends Vehiculo {
    matricula;
    marca;
    modelo;
    year;
    velocidad;
    motor;
    constructor(matricula, marca, modelo, year, velocidad = 0) {
        super(matricula, marca, modelo, year, velocidad);
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.velocidad = velocidad;
        this.motor = new Motor();
    }
    arrancar() {
        // this.estaArrancado = true
        this.motor.arrancar();
    }
    apagar() {
        if (this.velocidad !== 0) {
            throw new Error('No puedes apagarlo si el coche está andando');
        }
        // this.estaArrancado = false
        this.motor.apagar();
    }
    acelerar(velocidadExtra = 5) {
        if (!this.motor.estaArrancado) {
            throw new Error('No puedes acelerar si el coche no está arrancado');
        }
        // this.velocidad += velocidadExtra
        super.acelerar(velocidadExtra);
    }
    frenar(velocidadExtra = 5) {
        if (!this.motor.estaArrancado) {
            throw new Error('No puedes frenar si el coche no está arrancado');
        }
        // this.velocidad -= velocidadExtra
        super.frenar(velocidadExtra);
    }
    toString() {
        return `${super.toString()}, ${this.motor.toString()}`;
    }
}
class Coche extends VehiculoAMotor {
    matricula;
    marca;
    modelo;
    year;
    numPuertas;
    capacidadMaletero;
    constructor(matricula, marca, modelo, year, numPuertas, capacidadMaletero) {
        super(matricula, marca, modelo, year);
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.numPuertas = numPuertas;
        this.capacidadMaletero = capacidadMaletero;
    }
    toString() {
        return `Coche(${super.toString()}, NumPuertas=${this.numPuertas}, CapMaletero=${this.capacidadMaletero})`;
    }
}
const seatIbiza = new Coche('1234 CVB', 'Seat', 'Ibiza', 2023, 5, 30);
console.log(seatIbiza);
try {
    seatIbiza.acelerar();
}
catch (err) {
    console.log('Error: ', err);
}
finally {
    console.log('Finally');
}
seatIbiza.arrancar();
seatIbiza.acelerar();
seatIbiza.acelerar();
console.log(seatIbiza.toString());
seatIbiza.acelerar(10);
seatIbiza.acelerar(10);
seatIbiza.frenar(20);
console.log(seatIbiza.toString());
seatIbiza.frenar(10);
seatIbiza.apagar();
console.log(seatIbiza.toString());
class VehiculoSinMotor extends Vehiculo {
    matricula;
    marca;
    modelo;
    year;
    velocidad;
    constructor(matricula, marca, modelo, year, velocidad = 0) {
        super(matricula, marca, modelo, year, velocidad);
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.velocidad = velocidad;
    }
}
class Bici extends VehiculoSinMotor {
    matricula;
    marca;
    modelo;
    year;
    constructor(matricula, marca, modelo, year) {
        super(matricula, marca, modelo, year);
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
    }
    toString() {
        return `Bici(${super.toString()})`;
    }
}
const biciTrek = new Bici('123A', 'Trek', '1990', 2025);
biciTrek.acelerar();
biciTrek.acelerar();
console.log(biciTrek.toString());
biciTrek.frenar();
console.log(biciTrek.toString());
