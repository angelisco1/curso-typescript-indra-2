export class Inscripciones {
    inscribirAlumno(curso, alumno) {
        if (this.puedeInscribirAlumno(curso, alumno)) {
            curso.listaAlumnos.push(alumno);
            console.log(`El alumno ${alumno} inscrito en el curso ${curso.nombre}`);
        }
        else {
            console.log(`El alumno ${alumno} no se ha podido inscribir en el curso ${curso.nombre}`);
        }
    }
}
