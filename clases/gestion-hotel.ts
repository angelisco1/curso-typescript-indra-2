import { Disponibilidad } from "./disponibilidad.mixin.js"

abstract class HabitacionHotel implements Disponibilidad {
  protected abstract precio: number
  public estaDisponible: boolean = true

  constructor(
    public id: string,
    public numHabitacion: number,
    // public capacidad: number,
    // public precio: number,
  ) { }

  // calcularPrecioHabitacion(fechaInicio: Date, fechaFin: Date): number {
  //   const totalDias = (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24)
  //   console.log('Total días: ', totalDias)
  //   return Math.floor(totalDias) * this.precio
  // }

  calcularPrecioBase(fechaInicio: Date, fechaFin: Date): number {
    const totalDias = (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24)
    console.log('Total días: ', totalDias)
    return Math.floor(totalDias) * this.precio
  }

  abstract calcularPrecioHabitacion(fechaInicio: Date, fechaFin: Date): number;

  toggleDisponibilidad(disponible: boolean): void {}
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
    derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

// Aprovechar este ejemplo con los MIXINS
applyMixins(HabitacionHotel, [Disponibilidad])

class HabitacionHotelSimple extends HabitacionHotel {
  protected precio: number = 100
  private capacidad: number = 2
  
  constructor(
    public id: string,
    public numHabitacion: number,
    // public capacidad: number,
    // public precio: number,
  ) {
    // super(id, numHabitacion, capacidad)
    super(id, numHabitacion)
  }
  
  // Se calcula el precio * total de dias
  // calcularPrecioHabitacion(fechaInicio: Date, fechaFin: Date): number {
  //   const totalDias = (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24)
  //   console.log('Total días: ', totalDias)
  //   return Math.floor(totalDias) * this.precio
  // }
  calcularPrecioHabitacion(fechaInicio: Date, fechaFin: Date): number {
    return this.calcularPrecioBase(fechaInicio, fechaFin)
  }
}

class HabitacionHotelDoble extends HabitacionHotel {
  protected precio: number = 200
  private capacidad: number = 4

  constructor(
    public id: string,
    public numHabitacion: number,
    // public capacidad: number,
    // public precio: number,
  ) {
    // super(id, numHabitacion, capacidad)
    super(id, numHabitacion)
  }

  // Se calcula el (precio * total de dias) + (10%)
  calcularPrecioHabitacion(fechaInicio: Date, fechaFin: Date): number {
    // const totalDias = (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24)
    // console.log('Total días: ', totalDias)
    // return (Math.floor(totalDias) * this.precio) + ((Math.floor(totalDias) * this.precio) * 0.1)
    const precioBase = this.calcularPrecioBase(fechaInicio, fechaFin)
    return precioBase + (precioBase * 0.1)
  }

}

class HabitacionHotelSuite extends HabitacionHotel {
  protected precio: number = 1000
  private recargo: number = 100
  private capacidad: number = 2
  
  constructor(
    public id: string,
    public numHabitacion: number,
    // public capacidad: number,
    // public precio: number,
  ) {
    // super(id, numHabitacion, capacidad)
    super(id, numHabitacion)
  }
  
  // Se calcula el (precio * total de dias) + (recargo * persona)
  calcularPrecioHabitacion(fechaInicio: Date, fechaFin: Date): number {
    // const totalDias = (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24)
    // console.log('Total días: ', totalDias)
    // return (Math.floor(totalDias) * this.precio) + (this.recargo * this.capacidad)
    return this.calcularPrecioBase(fechaInicio, fechaFin) + (this.recargo * this.capacidad)
  }
}

// const h1 = new HabitacionHotelSimple('H1', 1, 2, 100)
// console.log(h1.calcularPrecioHabitacion(new Date(), new Date(2026, 5, 20)))

// const h2 = new HabitacionHotelSuite('H2', 2, 2, 1000)
// console.log(h2.calcularPrecioHabitacion(new Date(), new Date(2026, 5, 20)))

// const h3 = new HabitacionHotelDoble('H3', 3, 4, 200)
// console.log(h3.calcularPrecioHabitacion(new Date(), new Date(2026, 5, 20)))


const h1 = new HabitacionHotelSimple('H1', 1)
console.log(h1.calcularPrecioHabitacion(new Date(), new Date(2026, 5, 20)))

const h2 = new HabitacionHotelSuite('H2', 2)
console.log(h2.calcularPrecioHabitacion(new Date(), new Date(2026, 5, 20)))

const h3 = new HabitacionHotelDoble('H3', 3)
console.log(h3.calcularPrecioHabitacion(new Date(), new Date(2026, 5, 20)))

console.log(h3.estaDisponible)
h3.toggleDisponibilidad(false)
console.log(h3.estaDisponible)
h3.toggleDisponibilidad(true)
console.log(h3.estaDisponible)