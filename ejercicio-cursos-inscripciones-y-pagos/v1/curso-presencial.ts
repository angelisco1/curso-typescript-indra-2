import { Curso } from "./curso.js"


export class CursoPresencial extends Curso {
  // Fecha[]
  public sesiones: Array<string> = []
  // Alumno, Fecha[]
  public asistencias: Map<string, Array<string>> = new Map()

  constructor(
    public cursoId: string,
    public nombre: string,
    public direccion: string,
    public numPlazas: number,
  ) {
    super(cursoId, nombre, numPlazas)
  }

  addSesion(fecha: string): void {
    this.sesiones.push(fecha)
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