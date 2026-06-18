import { Inscripciones } from "./inscripciones";

export type Alumno = string
export type Alumnos = Array<Alumno>

export type Fecha = string
export type Fechas = Array<Fecha>

export interface ICurso {
  cursoId: string
  nombre: string
  metodoInscripcion: Inscripciones
  listaAlumnos: Alumnos
  inscribirAlumno(alumno: Alumno): void
}

export interface ConAsistencias {
  sesiones: Fechas
  asistencias: Map<Alumno, Fechas>
  // asistencias: Record<Alumno, Fechas>
  addSesion(fecha: Fecha): void
  registrarAsistencia(alumno: Alumno, fecha: Fecha): void
  // porcentajeAsistencia
}

// interface CursoResumen {
//   nombre: string,
//   cursoId: string
// }
export type ResumenCurso = Readonly<Pick<ICurso, 'cursoId' | 'nombre'>>


// interface Sugus {
//   [key: string]: string
// }
type SugusT = Record<string, string>

type PostRequestCurso = Omit<ICurso, 'inscribirAlumno' | 'listaAlumnos' | 'metodoInscripcion' | 'cursoId'>

const nuevoCurso: PostRequestCurso = {
  nombre: 'Curso 2000'
}