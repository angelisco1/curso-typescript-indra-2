export class Disponibilidad {
  estaDisponible: boolean = false

  toggleDisponibilidad(disponible: boolean): void {
    this.estaDisponible = disponible
  }
}