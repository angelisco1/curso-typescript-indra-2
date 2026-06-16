// ----------------------------
// ------ Tipos de datos ------
// ----------------------------

const nombre: string = 'Charly'
const apellido: string = 'Falco'
let edad = 33

const estaTrabajando: boolean = true


console.log(nombre + " " + apellido + " tiene " + edad + " años.")

// any -> es una mala práctica
let numero: any = 2
numero = "cuatro"
numero = [5]

// null, undefined
let unTexto; // undefined
unTexto = 3;
unTexto = "abc"

// Union type
// let usuario: null | any = null
let usuario: null | {
  nombre: string;
  apellido: string,
  edad: number
  estaTrabajando: boolean
} = null

console.log('Haciendo petición para obtener los datos del usuario')

setTimeout(() => {
  console.log('Recibidos los datos del usuario')
  usuario = {
    nombre,
    apellido,
    edad,
    estaTrabajando,
  }
  console.log(usuario)
}, 1000)

// const usuario2: {
//   nombre: string;
//   apellido: string,
//   edad: number
//   estaTrabajando: boolean
// } = {
//   nombre: 'Mike',
//   apellido: 'Kozinski',
//   edad: 40,
//   estaTrabajando: true
// }

// Crear tipos y alias

type DNI = string

// type Usuario = {
//   nombre: string;
//   apellido: string,
//   edad: number
//   estaTrabajando: boolean,
//   dni: DNI
// }

// const usuario2: null | Usuario = {
//   nombre: 'Mike',
//   apellido: 'Kozinski',
//   edad: 40,
//   estaTrabajando: true,
//   dni: '00000000T'
// }

type Usuario = null | {
  nombre: string;
  apellido: string,
  edad: number
  estaTrabajando: boolean,
  dni: DNI,
  telefonos?: {
    movil?: {
      prefijo: string,
      numero: number
    },
    fijo?: {
      prefijo: string,
      numero: number
    },
  }
}
type Usuarios = Array<Usuario>

const usuario2: Usuario = {
  nombre: 'Mike',
  apellido: 'Kozinski',
  edad: 40,
  estaTrabajando: true,
  dni: '00000000T',
  telefonos: {
    movil: {
      prefijo: '+34',
      numero: 666777888
    }
  }
}

// Valores truthy y falsy
// Falsy: false, 0, '', undefined, null, NaN
// Truthy: true, >0, <0, !'', [], {}


// Operador ??

const edad2 = 0
if (edad2) {
  console.log('Tiene valor')
} else {
  console.log('No tiene valor')
}

const token = ''
const headers = {
  'Authorization': 'Bearer ' + token
}

const a = token || 'No hay token'
console.log(a)

const b = token ?? 'No hay token'
console.log(b)
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   token ?? headers
// })


// Optional chaining operator .?

if (usuario2 && usuario2.telefonos && usuario2.telefonos.fijo) {
  console.log('Fijo: ' + usuario2.telefonos.fijo.numero)
} else {
  console.log('No tiene fijo')
}

console.log('Fijo: ' + (usuario2?.telefonos?.fijo?.numero ?? 'No tiene'))


// String interpolation -> Template literals
console.log(nombre + " " + apellido + " tiene " + edad + " años.")
console.log(`${nombre} ${apellido} tiene ${edad} años.`)

// Tuplas
const telefono: [string, number] = ['+34', 666777888]

// type Telefono = [prefijo: string, numero: number]
type Telefono = [nombre: string, numero: number]
const telefono2: Telefono = ['Charly', 666777888]

type Direccion = [tipo: string, nombre: string, numero: number, otrosDatos?: string | number]
// const direccion: [tipo: string, nombre: string, numero: number] = ['C/', 'Norte', 23]
const direccion: Direccion = ['C/', 'Norte', 23]
const direccion2: Direccion = ['C/', 'Oeste', 72, '3º G']
const direccion3: Direccion = ['C/', 'Oeste', 72, 3]

// Array
// const numeros: number[] = [1, 2, 3]
const numeros: Array<number> = [1, 2, 3]

const numerosYLetras: (number | string)[] = [1, 2, 3, 'a', 'b', 'c']
const numerosYLetras2: Array<number | string> = [1, 2, 3, 'a', 'b', 'c']

// Desestructuración
// const tipoDireccion1 = direccion[0]
// const nombreDireccion1 = direccion[1]
// const numDireccion1 = direccion[2]
const [tipoDireccion, nombreDireccion, numDireccion] = direccion

// Esto se suele usar mucho en React para crear un estado del componente
// - Así quedaría sin la desestructuración
// const estado = useState(0)
// estado[0]
// estado[1](estado[0] + 1)
// - Así quedaría con la desestructuración
// const [cuenta, setCuenta] = useState(0)


// Objetos
type DireccionObj = {
  tipo: string,
  nombre: string,
  numero: number,
  otrosDatos?: string
}
const direccionObj = {
  tipo: 'C/',
  nombre: 'Norte',
  numero: 23
}

const {tipo, nombre: nombre2, numero: numero2} = direccionObj


// Rest params / Spread operator (...)

const jsonStatham: Partial<Usuario> = {
  nombre: 'JSON',
  apellido: 'Statham',
  estaTrabajando: true
}

// const yamlStatham: Partial<Usuario> = jsonStatham
// yamlStatham.nombre = 'YAML'

// const yamlStatham: Partial<Usuario> = {
//   ...jsonStatham,
// }
// yamlStatham.nombre = 'YAML'
const yamlStatham: Partial<Usuario> = {
  ...jsonStatham,
  nombre: 'YAML',
  estaTrabajando: false,
}

console.log(jsonStatham)
console.log(yamlStatham)

const nums = [1, 2, 3]
// const nums2 = nums
const nums2 = [...nums, 4]
nums2[1] = 0
console.log(nums)
console.log(nums2)


const usuarios = [usuario, usuario2, jsonStatham, yamlStatham]
const [u1, u2, ...rest] = usuarios
console.log(u1)
console.log(u2)
console.log(rest)

// equipos = ['España', 'Cabo Verde', 'Alemania', 'Japón', 'EEUU', 'Canada', ...]
// const [eq1, eq2, ...resto] = equipos


// Función con tipos

const suma = (n1: number, n2: number): number => {
  return n1 + n2
}

function resta(n1: number, n2: number): number {
  return n1 - n2
}

function mostrarMensaje(texto: string, conFecha?: boolean): void {
  if (conFecha) {
    console.log(`[${new Date().toLocaleDateString()}] ${texto}`)
    return
  }
  console.log(texto)
}

console.log(suma(1, 2))
console.log(resta(1, 2))
mostrarMensaje('Hola mundo!!!')
mostrarMensaje('Hola mundo!!!', true)


// Función con rest params
const generarNumerosLoteria = (sorteo: string = 'primitiva'): Array<number> => {
  const numeros = []
  let numNumeros = 5
  switch (sorteo) {
    case 'primitiva': {
      numNumeros = 6
    }
    case 'euromillon': {
      numNumeros = 5
    }
    case 'bonoloto': {
      numNumeros = 6
    }
  }

  for(let i = 0; i < numNumeros; i++) {
    numeros.push(Math.floor(Math.random()*50) + 1)
  }
  return numeros
}

const getTicketLoteria = (sorteo: string, ...nums: Array<number>): string => {
  return `-- Sorteo: ${sorteo} --
    Fecha: ${new Date().toLocaleDateString()}
    ${nums.join(', ')}
  `
}

const generarTicketLoteria = (sorteo: string): string => {
  const numeros = generarNumerosLoteria(sorteo)
  const ticket = getTicketLoteria(sorteo, ...numeros)
  return ticket
}

console.log(generarTicketLoteria('primitiva'))
console.log(getTicketLoteria('primitiva', 1, 2, 3, 4, 5, 6))


// Arrays
// usuarios.filter(function() {

// })

// Utility type: Partial
type ListaUsuarios = Array<Partial<Usuario>>

const usuariosQueNoTrabajan: ListaUsuarios = usuarios.filter((usuario: Partial<Usuario>) => {
  return !usuario?.estaTrabajando
})
console.log(usuariosQueNoTrabajan)

const usuariosQueTrabajan: ListaUsuarios = usuarios.filter((usuario: Partial<Usuario>) => usuario?.estaTrabajando)
console.log(usuariosQueTrabajan)

type UsuarioCard = {
  nombreCompleto: string,
  edad: number | undefined,
  estaTrabajando: boolean | undefined,
  telefono: string | null
}
type UsuariosCards = Array<UsuarioCard>

// const cards: UsuariosCards = usuarios.map(usuario => {
//   return {
//     nombreCompleto: `${usuario?.nombre} ${usuario?.apellido}`,
//     edad: usuario?.edad,
//     estaTrabajando: usuario?.estaTrabajando,
//     telefono: usuario?.telefonos?.movil?.numero + ''
//   }
// })
const cards: UsuariosCards = usuarios
  .filter(usuario => usuario)
  .map(usuario => ({
    nombreCompleto: `${usuario?.nombre} ${usuario?.apellido}`,
    edad: usuario?.edad ?? -1,
    estaTrabajando: usuario?.estaTrabajando,
    telefono: (usuario?.telefonos?.movil?.numero ?? '') + ''
  }))
console.log(cards)


cards[1].edad = 48
cards[2].edad = 48
cards[2].telefono = '654321098'


const mediaEdadUsuarios = cards.reduce((acc: number, usuarioCard: UsuarioCard) => {
  return acc + usuarioCard.edad!
}, 0) / cards.length
console.log(mediaEdadUsuarios)

const usuarioBuscado = cards.find((usuarioCard: UsuarioCard) => usuarioCard.telefono === '654321098')
console.log(usuarioBuscado)

const todosEstanTrabajando = cards.every((usuario: UsuarioCard) => usuario.estaTrabajando)
console.log('Están trabajando todos?: ' + todosEstanTrabajando)

const hayAlguienSinTrabajo = cards.some((usuario: UsuarioCard) => !usuario.estaTrabajando)
console.log('Hay alguien sin trabajo?: ' + hayAlguienSinTrabajo)

// Diferencia entre == y ===
console.log(1 == 1) // true
console.log(1 === 1) // true
// console.log(1 == '1') // true
// console.log(1 === '1') // false

// == -> compara solo valores
// === -> compara valores y tipos
// != -> compara solo valores
// !== -> compara valores y tipos


// Sobrecarga de funciones
function doble(valor: number): number;
function doble(valor: string): string;
function doble(valor: Array<any>): Array<any>;

function doble(valor: any): any {
  const tipo = typeof valor
  if (tipo === 'string') {
    return valor.repeat(2)
  } else if (tipo === 'number') {
    return valor * 2
  } else if (Array.isArray(valor)) {
    return [...valor, ...valor]
  }
  return valor
}

console.log(doble(3))
console.log(doble('hola'))
console.log(doble([true, false]))





