// Export nombrado
// export class Curso {
export class Curso {
    cursoId;
    nombre;
    metodoInscripcion;
    listaAlumnos = [];
    constructor(cursoId, nombre, metodoInscripcion) {
        this.cursoId = cursoId;
        this.nombre = nombre;
        this.metodoInscripcion = metodoInscripcion;
    }
    inscribirAlumno(alumno) {
        this.metodoInscripcion.inscribirAlumno(this, alumno);
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
