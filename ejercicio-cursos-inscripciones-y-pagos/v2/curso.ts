// Export nombrado

import { Inscripciones } from "./inscripciones.js"

// export class Curso {
export class Curso {
  public listaAlumnos: Array<string> = []

  constructor(
    public cursoId: string,
    public nombre: string,
    public metodoInscripcion: Inscripciones,
  ) { }

  inscribirAlumno(alumno: string): void {
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