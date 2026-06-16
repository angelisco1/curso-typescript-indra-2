"use strict";
const charly = {
    nombre: 'Charly',
    apellido: 'Falco',
    email: 'cfalco@gmail.com',
    edad: 47,
    cumplirAnyos: function () {
        console.log(this);
        this.edad += 1;
    }
};
const mike = {
    nombre: 'Mike',
    apellido: 'Kozinski',
    email: 'mike.koz@gmail.com',
    edad: 52,
    cumplirAnyos: function () {
        console.log(this);
        this.edad += 1;
        const fn = () => {
            console.log(this);
        };
        fn();
    }
    // cumplirAnyos: () => {
    //   console.log(this)
    //   this.edad += 1
    // }
};
console.log(charly.edad);
charly.cumplirAnyos();
console.log(charly.edad);
console.log(mike.edad);
mike.cumplirAnyos();
console.log(mike.edad);
const cancion1 = {
    lang: 'es',
    src: 'lamacarena.mp3',
    volume: 0.8,
    duration: 3,
    play() {
        console.log('Reproduciendo la macarena...');
    },
};
const video1 = {
    poster: 'src/images/poster1.png',
    src: 'src/videos/videoclip-macarena.mp4',
    volume: 0.7,
    duration: 3,
};
// 2. Crear una lista con 4 peliculas
const peliculas = [
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
];
// 3. Buscar las peliculas que tienen al menos 2 Oscars 
const peliculasCon2Oscars = peliculas
    .filter((pelicula) => pelicula.oscars.length >= 2)
    .map((pelicula) => `${pelicula.titulo}: ${pelicula.oscars.map((oscar) => oscar.categoria).join(', ')}`);
console.log(peliculasCon2Oscars);
// 4. Buscar las peliculas de "Director1"
const peliculasSinDirectorConocido = peliculas.filter((pelicula) => pelicula.director === 'Desconocido');
console.log(peliculasSinDirectorConocido);
// 5. Contar cuantos oscars ha conseguido el director "Director1" con sus peliculas
const numOscarsCNolan = peliculas.reduce((acc, pelicula) => {
    if (pelicula.director === 'Christopher Nolan') {
        return acc + pelicula.oscars.length;
    }
    return acc;
}, 0);
console.log(numOscarsCNolan);
