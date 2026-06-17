import { Curso } from "./curso.js"
import { Inscripciones } from "./inscripciones.js"

export class InscripcionesIlimitadas extends Inscripciones {

  puedeInscribirAlumno(curso: Curso, alumno: string): boolean {
    return !curso.listaAlumnos.includes(alumno)
  }

}