import { Curso } from "./curso.js";
import { InscripcionesLimitadas } from "./inscripciones-limitadas.js";
export class CursoOnline extends Curso {
    cursoId;
    nombre;
    plataforma;
    numPlazas;
    sesiones = [];
    // Alumno, Fecha[]
    asistencias = new Map();
    constructor(cursoId, nombre, plataforma, numPlazas) {
        super(cursoId, nombre, new InscripcionesLimitadas(numPlazas));
        this.cursoId = cursoId;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.numPlazas = numPlazas;
    }
    addSesion(fecha) {
        if (this.sesiones.includes(fecha)) {
            console.log(`La sesión ${fecha} ya estaba registrada`);
            return;
        }
        this.sesiones.push(fecha);
        console.log(`Se ha añadido la sesión ${fecha} al curso ${this.nombre}`);
    }
    registrarAsistencia(alumno, fecha) {
        if (!this.listaAlumnos.includes(alumno)) {
            console.log(`El alumno ${alumno} no está apuntado al curso ${this.nombre}`);
            return;
        }
        if (!this.sesiones.includes(fecha)) {
            console.log(`La sesión ${fecha} no existe`);
            return;
        }
        const fechasAsistenciaAlumno = this.asistencias.get(alumno) ?? [];
        if (fechasAsistenciaAlumno.includes(fecha)) {
            console.log(`El alumno ${alumno} ya está apuntado`);
            return;
        }
        fechasAsistenciaAlumno.push(fecha);
        this.asistencias.set(alumno, fechasAsistenciaAlumno);
        console.log(`El alumno ${alumno} ha sido apuntado para el ${fecha}`);
    }
}
