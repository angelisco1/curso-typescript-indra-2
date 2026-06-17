// Export nombrado
// export class Curso {
export class Curso {
    cursoId;
    nombre;
    numPlazas;
    listaAlumnos = [];
    constructor(cursoId, nombre, numPlazas) {
        this.cursoId = cursoId;
        this.nombre = nombre;
        this.numPlazas = numPlazas;
    }
    inscribirAlumno(alumno) {
        const hayPlazas = this.numPlazas === null || this.numPlazas > this.listaAlumnos.length;
        if (hayPlazas && !this.listaAlumnos.includes(alumno)) {
            this.listaAlumnos.push(alumno);
            console.log(`El alumno ${alumno} inscrito en el curso ${this.nombre}`);
        }
        else {
            console.log(`El alumno ${alumno} no se ha podido inscribir en el curso ${this.nombre}`);
        }
    }
}
export const A = 1;
export const B = 2;
// Exportación por defecto (solo puede haber 1 por archivo)
// export default Curso
// export default {
//   Curso,
//   A,
//   B
// }
