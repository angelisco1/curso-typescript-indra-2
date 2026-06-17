class HabitacionHotel {
    id;
    numHabitacion;
    estaDisponible = true;
    constructor(id, numHabitacion) {
        this.id = id;
        this.numHabitacion = numHabitacion;
    }
    // calcularPrecioHabitacion(fechaInicio: Date, fechaFin: Date): number {
    //   const totalDias = (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24)
    //   console.log('Total días: ', totalDias)
    //   return Math.floor(totalDias) * this.precio
    // }
    calcularPrecioBase(fechaInicio, fechaFin) {
        const totalDias = (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24);
        console.log('Total días: ', totalDias);
        return Math.floor(totalDias) * this.precio;
    }
    toggleDisponibilidad(disponible) { }
}
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
// applyMixins(HabitacionHotel, [Disponibilidad])
// Aprovechar este ejemplo con los MIXINS
class HabitacionHotelSimple extends HabitacionHotel {
    id;
    numHabitacion;
    precio = 100;
    capacidad = 2;
    constructor(id, numHabitacion) {
        // super(id, numHabitacion, capacidad)
        super(id, numHabitacion);
        this.id = id;
        this.numHabitacion = numHabitacion;
    }
    // Se calcula el precio * total de dias
    // calcularPrecioHabitacion(fechaInicio: Date, fechaFin: Date): number {
    //   const totalDias = (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24)
    //   console.log('Total días: ', totalDias)
    //   return Math.floor(totalDias) * this.precio
    // }
    calcularPrecioHabitacion(fechaInicio, fechaFin) {
        return this.calcularPrecioBase(fechaInicio, fechaFin);
    }
}
class HabitacionHotelDoble extends HabitacionHotel {
    id;
    numHabitacion;
    precio = 200;
    capacidad = 4;
    constructor(id, numHabitacion) {
        // super(id, numHabitacion, capacidad)
        super(id, numHabitacion);
        this.id = id;
        this.numHabitacion = numHabitacion;
    }
    // Se calcula el (precio * total de dias) + (10%)
    calcularPrecioHabitacion(fechaInicio, fechaFin) {
        // const totalDias = (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24)
        // console.log('Total días: ', totalDias)
        // return (Math.floor(totalDias) * this.precio) + ((Math.floor(totalDias) * this.precio) * 0.1)
        const precioBase = this.calcularPrecioBase(fechaInicio, fechaFin);
        return precioBase + (precioBase * 0.1);
    }
}
class HabitacionHotelSuite extends HabitacionHotel {
    id;
    numHabitacion;
    precio = 1000;
    recargo = 100;
    capacidad = 2;
    constructor(id, numHabitacion) {
        // super(id, numHabitacion, capacidad)
        super(id, numHabitacion);
        this.id = id;
        this.numHabitacion = numHabitacion;
    }
    // Se calcula el (precio * total de dias) + (recargo * persona)
    calcularPrecioHabitacion(fechaInicio, fechaFin) {
        // const totalDias = (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24)
        // console.log('Total días: ', totalDias)
        // return (Math.floor(totalDias) * this.precio) + (this.recargo * this.capacidad)
        return this.calcularPrecioBase(fechaInicio, fechaFin) + (this.recargo * this.capacidad);
    }
}
// const h1 = new HabitacionHotelSimple('H1', 1, 2, 100)
// console.log(h1.calcularPrecioHabitacion(new Date(), new Date(2026, 5, 20)))
// const h2 = new HabitacionHotelSuite('H2', 2, 2, 1000)
// console.log(h2.calcularPrecioHabitacion(new Date(), new Date(2026, 5, 20)))
// const h3 = new HabitacionHotelDoble('H3', 3, 4, 200)
// console.log(h3.calcularPrecioHabitacion(new Date(), new Date(2026, 5, 20)))
const h1 = new HabitacionHotelSimple('H1', 1);
console.log(h1.calcularPrecioHabitacion(new Date(), new Date(2026, 5, 20)));
const h2 = new HabitacionHotelSuite('H2', 2);
console.log(h2.calcularPrecioHabitacion(new Date(), new Date(2026, 5, 20)));
const h3 = new HabitacionHotelDoble('H3', 3);
console.log(h3.calcularPrecioHabitacion(new Date(), new Date(2026, 5, 20)));
console.log(h3.estaDisponible);
h3.toggleDisponibilidad(false);
console.log(h3.estaDisponible);
h3.toggleDisponibilidad(true);
console.log(h3.estaDisponible);
export {};
