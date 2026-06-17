class Mascota {
  // public nombre: string
  // public tipo: string
  // public sonido: string
  
  // constructor(nombre: string, tipo: string, sonido: string) {
  //   this.nombre = nombre
  //   this.tipo = tipo
  //   this.sonido = sonido
  // }
  
  constructor(
    private _nombre: string,
    public tipo: string,
    public sonido: string
  ) { }

  toString(): void {
    console.log(`Mi ${this.tipo} se llama ${this.nombre} y hace ${this.sonido}`)
  }

  // Los getters y setters en TS no se hacen así
  getNombre(): string {
    return this.nombre
  }

  // Los getters y setters en TS no se hacen así
  setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre
  }

  get nombre(): string {
    console.log('Pasa por el getter')
    return this._nombre
  }
  
  set nombre(nuevoNombre: string) {
    console.log('Pasa por el setter')
    this._nombre = nuevoNombre
  }
}

const ricky = new Mascota('Ricky', 'periquito', 'Pio pio')
console.log(ricky)
ricky.toString()

class Coche1 {
  static numRuedas: number = 4
  constructor(
    public marca: string,
    public modelo: string,
  ) {}
}

const seat = new Coche1('Seat', 'Ibiza')
const mazda = new Coche1('Mazda', '3')
console.log(Coche1.numRuedas)

// console.log(ricky.nombre)

// Los getters y setters en TS no se hacen así
// console.log(ricky.getNombre())
// ricky.setNombre('Ricky Martin')
// console.log(ricky.getNombre())

console.log(ricky.nombre)
// ricky.nombre = 'Ricky Martin'
ricky.nombre += ' Martin' // -> ricky.nombre = ricky.nombre + ' Martin'
console.log(ricky.nombre)



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
  constructor(
    readonly matricula: string,
    public marca: string,
    public modelo: string,
    public year: number,
    public velocidad: number = 0,
    public estaArrancado: boolean = false,
  ) { }

  arrancar() {
    this.estaArrancado = true
  }

  apagar() {
    if (this.velocidad !== 0) {
      throw new Error('No puedes apagarlo si el coche está andando')
    }
    this.estaArrancado = false
  }

  acelerar(velocidadExtra: number = 5) {
    if (!this.estaArrancado) {
      throw new Error('No puedes acelerar si el coche no está arrancado')
    }
    this.velocidad += velocidadExtra
  }

  frenar(velocidadExtra: number = 5) {
    if (!this.estaArrancado) {
      throw new Error('No puedes frenar si el coche no está arrancado')
    }
    this.velocidad -= velocidadExtra
  }

  toString(): string {
    return `Matricula=${this.matricula}, Marca=${this.marca}, Modelo=${this.modelo}, Year=${this.year}`
  }
}

class Coche extends Vehiculo {
  constructor(
    readonly matricula: string,
    public marca: string,
    public modelo: string,
    public year: number,
    public numPuertas: number,
    public capacidadMaletero: number
  ) {
    super(matricula, marca, modelo, year)
  }

  toString(): string {
    return `Coche(${super.toString()}, NumPuertas=${this.numPuertas}, CapMaletero=${this.capacidadMaletero})`
  }
}

class Moto extends Vehiculo {
  constructor(
    readonly matricula: string,
    public marca: string,
    public modelo: string,
    public year: number,
    public capacidadDeposito: number
  ) {
    super(matricula, marca, modelo, year)
  }

  toString(): string {
    return `Moto(${super.toString()}, CapDeposito=${this.capacidadDeposito})`
  }
}


const seatIbiza = new Coche('1234 CVB', 'Seat', 'Ibiza', 2023, 5, 30)
console.log(seatIbiza)
try {
  seatIbiza.acelerar()
} catch (err) {
  console.log('Error: ', err)
} finally {
  console.log('Finally')
}
seatIbiza.arrancar()
seatIbiza.acelerar()
seatIbiza.acelerar()
console.log(seatIbiza)
seatIbiza.acelerar(10)
seatIbiza.acelerar(10)
seatIbiza.frenar(20)
console.log(seatIbiza)
seatIbiza.frenar(10)
seatIbiza.apagar()
console.log(seatIbiza)

// seatIbiza.matricula = ''