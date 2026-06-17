// Export nombrado
// export class Curso {
export class Curso {
  public listaAlumnos: Array<string> = []

  constructor(
    public cursoId: string,
    public nombre: string,
    public numPlazas: number | null
  ) { }

  inscribirAlumno(alumno: string): void {
    const hayPlazas = this.numPlazas === null || this.numPlazas > this.listaAlumnos.length

    if (hayPlazas && !this.listaAlumnos.includes(alumno)) {
      this.listaAlumnos.push(alumno)
      console.log(`El alumno ${alumno} inscrito en el curso ${this.nombre}`)
    } else {
      console.log(`El alumno ${alumno} no se ha podido inscribir en el curso ${this.nombre}`)
    }
  }
}

export const A = 1
export const B = 2


// Exportación por defecto (solo puede haber 1 por archivo)
// export default Curso

// export default {
//   Curso,
//   A,
//   B
// }