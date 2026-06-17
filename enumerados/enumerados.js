"use strict";
var Lenguajes;
(function (Lenguajes) {
    Lenguajes[Lenguajes["ES"] = 0] = "ES";
    Lenguajes[Lenguajes["EN"] = 1] = "EN";
    Lenguajes[Lenguajes["PT"] = 2] = "PT";
    Lenguajes[Lenguajes["IT"] = 3] = "IT";
    Lenguajes[Lenguajes["FR"] = 4] = "FR";
})(Lenguajes || (Lenguajes = {}));
console.log(Lenguajes.IT);
console.log(Lenguajes.ES);
var Lenguajes2;
(function (Lenguajes2) {
    Lenguajes2[Lenguajes2["ES"] = 1] = "ES";
    Lenguajes2[Lenguajes2["EN"] = 4] = "EN";
    Lenguajes2[Lenguajes2["PT"] = 5] = "PT";
    Lenguajes2[Lenguajes2["IT"] = 6] = "IT";
})(Lenguajes2 || (Lenguajes2 = {}));
console.log(Lenguajes2.ES);
console.log(Lenguajes2.PT);
console.log(Lenguajes2.IT);
console.log(Lenguajes2.ES);
let lenguajeSeleccionado = 1;
lenguajeSeleccionado = 5;
var Categorias;
(function (Categorias) {
    Categorias["Comedia"] = "comedia";
    Categorias["Accion"] = "accion";
    Categorias["CienciaFiccion"] = "cienciaficcion";
    Categorias["Fantasia"] = "fantasia";
})(Categorias || (Categorias = {}));
console.log(Categorias.Comedia);
console.log(Categorias.Fantasia);
const peliculas = [
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
        categoria: Categorias.CienciaFiccion
    },
    {
        titulo: 'Transporter 2',
        año: 2000,
        director: 'Desconocido',
        categoria: Categorias.Accion
    },
];
const peliculasCienciaFiccion = peliculas.filter((pelicula) => pelicula.categoria === Categorias.CienciaFiccion);
console.log(peliculasCienciaFiccion);
