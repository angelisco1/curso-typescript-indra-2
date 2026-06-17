enum Lenguajes { ES, EN, PT, IT, FR }
console.log(Lenguajes.IT)
console.log(Lenguajes.ES)

enum Lenguajes2 { ES = 1, EN = 4, PT, IT }
console.log(Lenguajes2.ES)
console.log(Lenguajes2.PT)
console.log(Lenguajes2.IT)
console.log(Lenguajes2.ES)

let lenguajeSeleccionado: Lenguajes2 = 1
lenguajeSeleccionado = 5

enum Categorias {
  Comedia = 'comedia',
  Accion = 'accion',
  CienciaFiccion = 'cienciaficcion',
  Fantasia = 'fantasia',
  Unknown = 'unknown'
}

console.log(Categorias.Comedia)
console.log(Categorias.Fantasia)


const fromStringToCategorias = (categoria: string): Categorias => {
  switch(categoria) {
    case 'comedia':
      return Categorias.Comedia
    case 'accion':
      return Categorias.Accion
    case 'fantasia':
      return Categorias.Fantasia
    case 'cienciaficcion':
      return Categorias.CienciaFiccion
    default:
      return Categorias.Unknown
  }
}


interface Pelicula {
  titulo: string,
  año: number,
  director: string,
  categoria: Categorias,
}

const peliculas: Array<Pelicula> = [
  {
    titulo: 'El Señor de los Anillos 3',
    año: 2005,
    director: 'Peter Jackson',
    categoria: Categorias.Fantasia
  },
  {
    titulo: 'Interestellar',
    año: 2016,
    director: 'Christopher Nolan',
    categoria: Categorias.CienciaFiccion
  },
  {
    titulo: 'Origen',
    año: 2015,
    director: 'Christopher Nolan',
    categoria: fromStringToCategorias('cienciaficcion')
  },
  {
    titulo: 'Transporter 2',
    año: 2000,
    director: 'Desconocido',
    categoria: fromStringToCategorias('accion')
  },
]


const peliculasCienciaFiccion = peliculas.filter((pelicula: Pelicula) => pelicula.categoria === Categorias.CienciaFiccion)
console.log(peliculasCienciaFiccion)


enum Lenguajes3 { ES, EN, PT, IT, FR }

// type LenguajesStr = 'ES' | 'EN' | 'PT' | 'IT' | 'FR'

// Extraer claves como strings para crear un tipo nuevo de dato
type LenguajesStr = keyof typeof Lenguajes3
const lenguajeSeleccionado2: LenguajesStr = 'ES'

