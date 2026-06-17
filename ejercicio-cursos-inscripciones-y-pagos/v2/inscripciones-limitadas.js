import { Inscripciones } from "./inscripciones.js";
export class InscripcionesLimitadas extends Inscripciones {
    numPlazas;
    constructor(numPlazas) {
        super();
        this.numPlazas = numPlazas;
    }
    puedeInscribirAlumno(curso, alumno) {
        const hayPlazas = this.numPlazas > curso.listaAlumnos.length;
        return hayPlazas && !curso.listaAlumnos.includes(alumno);
    }
}
