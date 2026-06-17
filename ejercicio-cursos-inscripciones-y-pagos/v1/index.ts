// commonjs
// const Curso1 = require('./curso.js')

// Importación de item con export por defecto
// import Curso1 from './curso.js'

// Importación de item con export nombrado
// import { Curso } from './curso.js'

// // const c1 = new Curso1.Curso('curso1', 'Curso 1')
// const c1 = new Curso('curso1', 'Curso 1')
// console.log(c1)

import { Curso } from "./curso.js";
import { CursoOnline } from "./curso-online.js";

const cursoTs: CursoOnline = new CursoOnline('curso1', 'TypeScript', 'Teams', 2)
cursoTs.inscribirAlumno('Charly')
cursoTs.inscribirAlumno('Charly')
cursoTs.inscribirAlumno('Juan')
cursoTs.inscribirAlumno('Mike')

cursoTs.addSesion('15/06/26')
cursoTs.addSesion('15/06/26')
cursoTs.addSesion('16/06/26')
cursoTs.addSesion('17/06/26')

cursoTs.registrarAsistencia('Charly', '15/06/26')
cursoTs.registrarAsistencia('Charly', '16/06/26')

cursoTs.registrarAsistencia('Juan', '15/06/26')
cursoTs.registrarAsistencia('Juan', '16/06/26')
cursoTs.registrarAsistencia('Juan', '17/06/26')