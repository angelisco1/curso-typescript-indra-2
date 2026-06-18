// Export nombrado

import { Inscripciones } from "./inscripciones.js"
import { Alumno, Alumnos, ICurso } from "./types.js"

// export class Curso {
export class Curso implements ICurso {
  public listaAlumnos: Alumnos = []

  constructor(
    public cursoId: string,
    public nombre: string,
    public metodoInscripcion: Inscripciones,
  ) { }

  inscribirAlumno(alumno: Alumno): void {
    this.metodoInscripcion.inscribirAlumno(this, alumno)
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