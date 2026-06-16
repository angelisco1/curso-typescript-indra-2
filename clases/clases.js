"use strict";
class Mascota {
    _nombre;
    tipo;
    sonido;
    // public nombre: string
    // constructor(nombre: string, tipo: string, sonido: string) {
    //   this.nombre = nombre
    //   this.tipo = tipo
    //   this.sonido = sonido
    // }
    constructor(_nombre, tipo, sonido) {
        this._nombre = _nombre;
        this.tipo = tipo;
        this.sonido = sonido;
    }
    toString() {
        console.log(`Mi ${this.tipo} se llama ${this.nombre} y hace ${this.sonido}`);
    }
    // Los getters y setters en TS no se hacen así
    getNombre() {
        return this.nombre;
    }
    // Los getters y setters en TS no se hacen así
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    get nombre() {
        console.log('Pasa por el getter');
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        console.log('Pasa por el setter');
        this._nombre = nuevoNombre;
    }
}
const ricky = new Mascota('Ricky', 'periquito', 'Pio pio');
console.log(ricky);
ricky.toString();
class Coche1 {
    marca;
    modelo;
    static numRuedas = 4;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}
const seat = new Coche1('Seat', 'Ibiza');
const mazda = new Coche1('Mazda', '3');
console.log(Coche1.numRuedas);
// console.log(ricky.nombre)
// Los getters y setters en TS no se hacen así
// console.log(ricky.getNombre())
// ricky.setNombre('Ricky Martin')
// console.log(ricky.getNombre())
console.log(ricky.nombre);
// ricky.nombre = 'Ricky Martin'
ricky.nombre += ' Martin'; // -> ricky.nombre = ricky.nombre + ' Martin'
console.log(ricky.nombre);
// class Cmp extends OnInit {
//   nombre: string = 'Charly'
//   apellido: string = 'Falco'
//   get nombreCompleto() {
//     return this.nombre + ' ' + this.apellido
//   }
// }
// MUY INEFICIENTE
// <p>{{getNombreCompleto()}}</p>
// <img alt="Imagen de {{getNombreCompleto()}}" />
// <button (click)="llamarALaFN()">Hacer algo</button>
// MAS EFICIENTE
// <p>{{nombreCompleto}}</p>
class Vehiculo {
    matricula;
    marca;
    modelo;
    year;
    velocidad;
    estaArrancado;
    constructor(matricula, marca, modelo, year, velocidad = 0, estaArrancado = false) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.velocidad = velocidad;
        this.estaArrancado = estaArrancado;
    }
    arrancar() {
        this.estaArrancado = true;
    }
    apagar() {
        if (this.velocidad !== 0) {
            throw new Error('No puedes apagarlo si el coche está andando');
        }
        this.estaArrancado = false;
    }
    acelerar(velocidadExtra = 5) {
        if (!this.estaArrancado) {
            throw new Error('No puedes acelerar si el coche no está arrancado');
        }
        this.velocidad += velocidadExtra;
    }
    frenar(velocidadExtra = 5) {
        if (!this.estaArrancado) {
            throw new Error('No puedes frenar si el coche no está arrancado');
        }
        this.velocidad -= velocidadExtra;
    }
    toString() {
        return `Matricula=${this.matricula}, Marca=${this.marca}, Modelo=${this.modelo}, Year=${this.year}`;
    }
}
class Coche extends Vehiculo {
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
class Moto extends Vehiculo {
    matricula;
    marca;
    modelo;
    year;
    capacidadDeposito;
    constructor(matricula, marca, modelo, year, capacidadDeposito) {
        super(matricula, marca, modelo, year);
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.capacidadDeposito = capacidadDeposito;
    }
    toString() {
        return `Moto(${super.toString()}, CapDeposito=${this.capacidadDeposito})`;
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
console.log(seatIbiza);
seatIbiza.acelerar(10);
seatIbiza.acelerar(10);
seatIbiza.frenar(20);
console.log(seatIbiza);
seatIbiza.frenar(10);
seatIbiza.apagar();
console.log(seatIbiza);
// seatIbiza.matricula = ''
