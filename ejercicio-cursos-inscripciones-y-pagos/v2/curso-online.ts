import { Curso } from "./curso.js";
import { InscripcionesLimitadas } from "./inscripciones-limitadas.js";

export class CursoOnline extends Curso {
  public sesiones: Array<string> = []
  // Alumno, Fecha[]
  public asistencias: Map<string, Array<string>> = new Map()

  constructor(
    public cursoId: string,
    public nombre: string,
    public plataforma: string,
    public numPlazas: number,
  ) {
    super(cursoId, nombre, new InscripcionesLimitadas(numPlazas))
  }

  addSesion(fecha: string): void {
    if (this.sesiones.includes(fecha)) {
      console.log(`La sesión ${fecha} ya estaba registrada`)
      return
    }
    this.sesiones.push(fecha)
    console.log(`Se ha añadido la sesión ${fecha} al curso ${this.nombre}`)
  }

  registrarAsistencia(alumno: string, fecha: string) {
    if (!this.listaAlumnos.includes(alumno)) {
      console.log(`El alumno ${alumno} no está apuntado al curso ${this.nombre}`)
      return
    }
    
    if (!this.sesiones.includes(fecha)) {
      console.log(`La sesión ${fecha} no existe`)
      return
    }

    const fechasAsistenciaAlumno = this.asistencias.get(alumno) ?? []
    
    if (fechasAsistenciaAlumno.includes(fecha)) {
      console.log(`El alumno ${alumno} ya está apuntado`)
      return
    }
    
    fechasAsistenciaAlumno.push(fecha)
    this.asistencias.set(alumno, fechasAsistenciaAlumno)
    console.log(`El alumno ${alumno} ha sido apuntado para el ${fecha}`)
  }

  // porcentajeAsistencia() { }

}