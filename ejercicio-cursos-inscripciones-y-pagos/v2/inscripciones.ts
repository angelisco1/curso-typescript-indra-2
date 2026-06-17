import { Curso } from "./curso.js"

export abstract class Inscripciones {

  abstract puedeInscribirAlumno(curso: Curso, alumno: string): boolean;

  inscribirAlumno(curso: Curso, alumno: string) {
    if (this.puedeInscribirAlumno(curso, alumno)) {
      curso.listaAlumnos.push(alumno)
      console.log(`El alumno ${alumno} inscrito en el curso ${curso.nombre}`)
    } else {
      console.log(`El alumno ${alumno} no se ha podido inscribir en el curso ${curso.nombre}`)
    }
  }

}