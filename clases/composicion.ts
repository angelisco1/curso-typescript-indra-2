class Vehiculo {
  constructor(
    readonly matricula: string,
    public marca: string,
    public modelo: string,
    public year: number,
    public velocidad: number = 0,
  ) { }

  acelerar(velocidadExtra: number = 5) {
    this.velocidad += velocidadExtra
  }

  frenar(velocidadExtra: number = 5) {
    this.velocidad -= velocidadExtra
  }

  toString(): string {
    return `Matricula=${this.matricula}, Marca=${this.marca}, Modelo=${this.modelo}, Year=${this.year}, Velocidad=${this.velocidad}`
  }
}


class Motor {
  constructor(
    public estaArrancado: boolean = false,
  ) { }

  arrancar() {
    this.estaArrancado = true
  }

  apagar() {
    this.estaArrancado = false
  }

  toString(): string {
    return `MotorArrancado=${this.estaArrancado}`
  }
}

class VehiculoAMotor extends Vehiculo {
  private motor: Motor

  constructor(
    readonly matricula: string,
    public marca: string,
    public modelo: string,
    public year: number,
    public velocidad: number = 0,
    // public estaArrancado: boolean = false, // Ahora está en la clase Motor
  ) {
    super(matricula, marca, modelo, year, velocidad)
    this.motor = new Motor()
  }

  arrancar() {
    // this.estaArrancado = true
    this.motor.arrancar()
  }

  apagar() {
    if (this.velocidad !== 0) {
      throw new Error('No puedes apagarlo si el coche está andando')
    }
    // this.estaArrancado = false
    this.motor.apagar()
  }

  acelerar(velocidadExtra: number = 5) {
    if (!this.motor.estaArrancado) {
      throw new Error('No puedes acelerar si el coche no está arrancado')
    }
    // this.velocidad += velocidadExtra
    super.acelerar(velocidadExtra)
  }
  
  frenar(velocidadExtra: number = 5) {
    if (!this.motor.estaArrancado) {
      throw new Error('No puedes frenar si el coche no está arrancado')
    }
    // this.velocidad -= velocidadExtra
    super.frenar(velocidadExtra)
  }

  toString(): string {
    return `${super.toString()}, ${this.motor.toString()}`
  }
}

class Coche extends VehiculoAMotor {
  constructor(
    readonly matricula: string,
    public marca: string,
    public modelo: string,
    public year: number,
    public numPuertas: number,
    public capacidadMaletero: number,
  ) {
    super(matricula, marca, modelo, year)
  }

  toString(): string {
    return `Coche(${super.toString()}, NumPuertas=${this.numPuertas}, CapMaletero=${this.capacidadMaletero})`
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
console.log(seatIbiza.toString())
seatIbiza.acelerar(10)
seatIbiza.acelerar(10)
seatIbiza.frenar(20)
console.log(seatIbiza.toString())
seatIbiza.frenar(10)
seatIbiza.apagar()
console.log(seatIbiza.toString())


class VehiculoSinMotor extends Vehiculo {
  constructor(
    readonly matricula: string,
    public marca: string,
    public modelo: string,
    public year: number,
    public velocidad: number = 0,
  ) {
    super(matricula, marca, modelo, year, velocidad)
  }

  // acelerar(velocidadExtra: number = 5) {
  //   // this.velocidad += velocidadExtra
  //   super.acelerar()
  // }

  // frenar(velocidadExtra: number = 5) {
  //   // this.velocidad -= velocidadExtra
  //   super.frenar()
  // }

  // toString(): string {
  //   return super.toString()
  // }
}

class Bici extends VehiculoSinMotor {
  constructor(
    readonly matricula: string,
    public marca: string,
    public modelo: string,
    public year: number,
  ) {
    super(matricula, marca, modelo, year)
  }

  toString(): string {
    return `Bici(${super.toString()})`
  }
}

const biciTrek = new Bici('123A', 'Trek', '1990', 2025)
biciTrek.acelerar()
biciTrek.acelerar()
console.log(biciTrek.toString())
biciTrek.frenar()
console.log(biciTrek.toString())