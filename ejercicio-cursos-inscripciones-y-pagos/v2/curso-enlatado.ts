import { Curso } from "./curso.js";
import { InscripcionesIlimitadas } from "./inscripciones-ilimitadas.js";

export class CursoEnlatado extends Curso {
  // Alumno, MinVisualizados
  public progreso: Map<string, number> = new Map()

  constructor(
    public cursoId: string,
    public nombre: string,
    public plataforma: string,
    public duracion: number,
    public fechaGrabacion: string,
  ) {
    super(cursoId, nombre, new InscripcionesIlimitadas())
  }

  estaObsoleto(): boolean {
    // TODO:
    return false
  }

  verCurso(alumno: string, minVisualizados: number) {
    if (!this.listaAlumnos.includes(alumno)) {
      console.log(`El alumno ${alumno} no está en el curso ${this.nombre}`)
      return
    }

    const minVisualizadosActualizado = (this.progreso.get(alumno) ?? 0) + minVisualizados
    this.progreso.set(alumno, minVisualizadosActualizado)
  }

}