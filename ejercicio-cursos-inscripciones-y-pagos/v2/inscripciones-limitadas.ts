import { Curso } from "./curso.js"
import { Inscripciones } from "./inscripciones.js"

export class InscripcionesLimitadas extends Inscripciones {
  constructor(
    public numPlazas: number
  ) {
    super()
  }

  puedeInscribirAlumno(curso: Curso, alumno: string): boolean {
    const hayPlazas = this.numPlazas > curso.listaAlumnos.length
    return hayPlazas && !curso.listaAlumnos.includes(alumno)
  }

}