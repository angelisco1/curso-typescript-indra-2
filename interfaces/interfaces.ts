interface Usuario {
  nombre: string,
  apellido: string,
  email: string,
  edad: number,
  cumplirAnyos: () => void
}

const charly: Usuario = {
  nombre: 'Charly',
  apellido: 'Falco',
  email: 'cfalco@gmail.com',
  edad: 47,
  cumplirAnyos: function() {
    console.log(this)
    this.edad += 1
  }
}

const mike: Usuario = {
  nombre: 'Mike',
  apellido: 'Kozinski',
  email: 'mike.koz@gmail.com',
  edad: 52,
  cumplirAnyos: function() {
    console.log(this)
    this.edad += 1
    
    const that = this
    const fn1 = function() {
      console.log('Fn1', that)
    }
    fn1()

    const fn = () => {
      console.log('Fn', this)
    }
    fn()
    
  }
  // cumplirAnyos: () => {
  //   console.log(this)
  //   this.edad += 1
  // }
}

console.log(charly.edad)
charly.cumplirAnyos()
console.log(charly.edad)

console.log(mike.edad)
mike.cumplirAnyos()
console.log(mike.edad)

// Extensión de interfaces
interface MediaElement {
  src: string,
  volume: number,
  duration: number,
  // play?: () => void,
  // pause?: () => void,
}

// Fusión de declaraciones: el compilador mergea en 1 sola interface los 2 bloques de MediaElement
interface MediaElement {
  play?: () => void,
  pause?: () => void,
}

interface AudioElement extends MediaElement {
  lang: string
}

interface VideoElement extends MediaElement {
  poster: string,
  requestFullScreen?: () => void
}

const cancion1: AudioElement = {
  lang: 'es',
  src: 'lamacarena.mp3',
  volume: 0.8,
  duration: 3,
  play() {
    console.log('Reproduciendo la macarena...')
  },
}

const video1: VideoElement = {
  poster: 'src/images/poster1.png',
  src: 'src/videos/videoclip-macarena.mp4',
  volume: 0.7,
  duration: 3,
}

// No se suele tener el problema de cancion1.play() porque se suele implementar en las clases
// De todas formas, podríamos quitar los errores con las siguientes 2 formas
// - Forma 1
// if (cancion1.play) {
//   cancion1.play()
// }
// - Forma 2
// cancion1.play!()


// Ejercicio:
// 1. Definir la interaface Pelicula (titulo, año, oscars<array de objetos> (año, categoria), director)
interface Oscar {
  año: number,
  categoria: string
}

type Oscars = Array<Oscar>

interface Pelicula {
  titulo: string,
  año: number,
  director: string,
  oscars: Oscars,
}

// 2. Crear una lista con 4 peliculas
const peliculas: Array<Pelicula> = [
  {
    titulo: 'El Señor de los Anillos 3',
    año: 2005,
    director: 'Peter Jackson',
    oscars: [
      { año: 2006, categoria: 'Mejor pelicula' },
      { año: 2006, categoria: 'Mejor director' },
    ]
  },
  {
    titulo: 'Interestellar',
    año: 2016,
    director: 'Christopher Nolan',
    oscars: [
      { año: 2006, categoria: 'Mejor pelicula' },
      { año: 2006, categoria: 'Mejor director' },
    ]
  },
  {
    titulo: 'Origen',
    año: 2015,
    director: 'Christopher Nolan',
    oscars: [
      { año: 2006, categoria: 'Mejor pelicula' },
    ]
  },
  {
    titulo: 'Transporter 2',
    año: 2000,
    director: 'Desconocido',
    oscars: []
  },
]


// 3. Buscar las peliculas que tienen al menos 2 Oscars 
const peliculasCon2Oscars = peliculas
  .filter((pelicula: Pelicula) => pelicula.oscars.length >= 2)
  .map((pelicula: Pelicula) => `${pelicula.titulo}: ${pelicula.oscars.map((oscar: Oscar) => oscar.categoria).join(', ')}`)
console.log(peliculasCon2Oscars)

// 4. Buscar las peliculas de "Director1"
const peliculasSinDirectorConocido = peliculas.filter((pelicula: Pelicula) => pelicula.director === 'Desconocido')
console.log(peliculasSinDirectorConocido)

// 5. Contar cuantos oscars ha conseguido el director "Director1" con sus peliculas
const numOscarsCNolan = peliculas.reduce((acc: number, pelicula: Pelicula) => {
  if (pelicula.director === 'Christopher Nolan') {
    return acc + pelicula.oscars.length
  }
  return acc
}, 0)
console.log(numOscarsCNolan)