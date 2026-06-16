// Export nombrado
// export class Curso {
export class Curso {
    cursoId;
    nombre;
    listaAlumnos = [];
    constructor(cursoId, nombre) {
        this.cursoId = cursoId;
        this.nombre = nombre;
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
