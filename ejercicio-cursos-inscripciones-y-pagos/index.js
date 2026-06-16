// commonjs
// const Curso1 = require('./curso.js')
// Importación de item con export por defecto
// import Curso1 from './curso.js'
// Importación de item con export nombrado
import { Curso } from './curso';
// const c1 = new Curso1.Curso('curso1', 'Curso 1')
const c1 = new Curso('curso1', 'Curso 1');
console.log(c1);
