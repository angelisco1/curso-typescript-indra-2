"use strict";
// ----------------------------
// ------ Tipos de datos ------
// ----------------------------
const nombre = 'Charly';
const apellido = 'Falco';
let edad = 33;
const estaTrabajando = true;
console.log(nombre + " " + apellido + " tiene " + edad + " años.");
// any -> es una mala práctica
let numero = 2;
numero = "cuatro";
numero = [5];
// null, undefined
let unTexto; // undefined
unTexto = 3;
unTexto = "abc";
// Union type
// let usuario: null | any = null
let usuario = null;
console.log('Haciendo petición para obtener los datos del usuario');
setTimeout(() => {
    console.log('Recibidos los datos del usuario');
    usuario = {
        nombre,
        apellido,
        edad,
        estaTrabajando,
    };
    console.log(usuario);
}, 1000);
const usuario2 = {
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
};
// Valores truthy y falsy
// Falsy: false, 0, '', undefined, null, NaN
// Truthy: true, >0, <0, !'', [], {}
// Operador ??
const edad2 = 0;
if (edad2) {
    console.log('Tiene valor');
}
else {
    console.log('No tiene valor');
}
const token = '';
const headers = {
    'Authorization': 'Bearer ' + token
};
const a = token || 'No hay token';
console.log(a);
const b = token ?? 'No hay token';
console.log(b);
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   token ?? headers
// })
// Optional chaining operator .?
if (usuario2 && usuario2.telefonos && usuario2.telefonos.fijo) {
    console.log('Fijo: ' + usuario2.telefonos.fijo.numero);
}
else {
    console.log('No tiene fijo');
}
console.log('Fijo: ' + (usuario2?.telefonos?.fijo?.numero ?? 'No tiene'));
// String interpolation -> Template literals
console.log(nombre + " " + apellido + " tiene " + edad + " años.");
console.log(`${nombre} ${apellido} tiene ${edad} años.`);
// Tuplas
const telefono = ['+34', 666777888];
const telefono2 = ['Charly', 666777888];
// const direccion: [tipo: string, nombre: string, numero: number] = ['C/', 'Norte', 23]
const direccion = ['C/', 'Norte', 23];
const direccion2 = ['C/', 'Oeste', 72, '3º G'];
const direccion3 = ['C/', 'Oeste', 72, 3];
// Array
// const numeros: number[] = [1, 2, 3]
const numeros = [1, 2, 3];
const numerosYLetras = [1, 2, 3, 'a', 'b', 'c'];
const numerosYLetras2 = [1, 2, 3, 'a', 'b', 'c'];
// Desestructuración
// const tipoDireccion1 = direccion[0]
// const nombreDireccion1 = direccion[1]
// const numDireccion1 = direccion[2]
const [tipoDireccion, nombreDireccion, numDireccion] = direccion;
const direccionObj = {
    tipo: 'C/',
    nombre: 'Norte',
    numero: 23
};
const { tipo, nombre: nombre2, numero: numero2 } = direccionObj;
// Rest params / Spread operator (...)
const jsonStatham = {
    nombre: 'JSON',
    apellido: 'Statham',
    estaTrabajando: true
};
// const yamlStatham: Partial<Usuario> = jsonStatham
// yamlStatham.nombre = 'YAML'
// const yamlStatham: Partial<Usuario> = {
//   ...jsonStatham,
// }
// yamlStatham.nombre = 'YAML'
const yamlStatham = {
    ...jsonStatham,
    nombre: 'YAML',
    estaTrabajando: false,
};
console.log(jsonStatham);
console.log(yamlStatham);
const nums = [1, 2, 3];
// const nums2 = nums
const nums2 = [...nums, 4];
nums2[1] = 0;
console.log(nums);
console.log(nums2);
const usuarios = [usuario, usuario2, jsonStatham, yamlStatham];
const [u1, u2, ...rest] = usuarios;
console.log(u1);
console.log(u2);
console.log(rest);
// equipos = ['España', 'Cabo Verde', 'Alemania', 'Japón', 'EEUU', 'Canada', ...]
// const [eq1, eq2, ...resto] = equipos
// Función con tipos
const suma = (n1, n2) => {
    return n1 + n2;
};
function resta(n1, n2) {
    return n1 - n2;
}
function mostrarMensaje(texto, conFecha) {
    if (conFecha) {
        console.log(`[${new Date().toLocaleDateString()}] ${texto}`);
        return;
    }
    console.log(texto);
}
console.log(suma(1, 2));
console.log(resta(1, 2));
mostrarMensaje('Hola mundo!!!');
mostrarMensaje('Hola mundo!!!', true);
// Función con rest params
const generarNumerosLoteria = (sorteo = 'primitiva') => {
    const numeros = [];
    let numNumeros = 5;
    switch (sorteo) {
        case 'primitiva': {
            numNumeros = 6;
        }
        case 'euromillon': {
            numNumeros = 5;
        }
        case 'bonoloto': {
            numNumeros = 6;
        }
    }
    for (let i = 0; i < numNumeros; i++) {
        numeros.push(Math.floor(Math.random() * 50) + 1);
    }
    return numeros;
};
const getTicketLoteria = (sorteo, ...nums) => {
    return `-- Sorteo: ${sorteo} --
    Fecha: ${new Date().toLocaleDateString()}
    ${nums.join(', ')}
  `;
};
const generarTicketLoteria = (sorteo) => {
    const numeros = generarNumerosLoteria(sorteo);
    const ticket = getTicketLoteria(sorteo, ...numeros);
    return ticket;
};
console.log(generarTicketLoteria('primitiva'));
console.log(getTicketLoteria('primitiva', 1, 2, 3, 4, 5, 6));
const usuariosQueNoTrabajan = usuarios.filter((usuario) => {
    return !usuario?.estaTrabajando;
});
console.log(usuariosQueNoTrabajan);
const usuariosQueTrabajan = usuarios.filter((usuario) => usuario?.estaTrabajando);
console.log(usuariosQueTrabajan);
// const cards: UsuariosCards = usuarios.map(usuario => {
//   return {
//     nombreCompleto: `${usuario?.nombre} ${usuario?.apellido}`,
//     edad: usuario?.edad,
//     estaTrabajando: usuario?.estaTrabajando,
//     telefono: usuario?.telefonos?.movil?.numero + ''
//   }
// })
const cards = usuarios
    .filter(usuario => usuario)
    .map(usuario => ({
    nombreCompleto: `${usuario?.nombre} ${usuario?.apellido}`,
    edad: usuario?.edad ?? -1,
    estaTrabajando: usuario?.estaTrabajando,
    telefono: (usuario?.telefonos?.movil?.numero ?? '') + ''
}));
console.log(cards);
cards[1].edad = 48;
cards[2].edad = 48;
cards[2].telefono = '654321098';
const mediaEdadUsuarios = cards.reduce((acc, usuarioCard) => {
    return acc + usuarioCard.edad;
}, 0) / cards.length;
console.log(mediaEdadUsuarios);
const usuarioBuscado = cards.find((usuarioCard) => usuarioCard.telefono === '654321098');
console.log(usuarioBuscado);
const todosEstanTrabajando = cards.every((usuario) => usuario.estaTrabajando);
console.log('Están trabajando todos?: ' + todosEstanTrabajando);
const hayAlguienSinTrabajo = cards.some((usuario) => !usuario.estaTrabajando);
console.log('Hay alguien sin trabajo?: ' + hayAlguienSinTrabajo);
// Diferencia entre == y ===
console.log(1 == 1); // true
console.log(1 === 1); // true
function doble(valor) {
    const tipo = typeof valor;
    if (tipo === 'string') {
        return valor.repeat(2);
    }
    else if (tipo === 'number') {
        return valor * 2;
    }
    else if (Array.isArray(valor)) {
        return [...valor, ...valor];
    }
    return valor;
}
console.log(doble(3));
console.log(doble('hola'));
console.log(doble([true, false]));
// Ejercicio: definir pelicula y hacer operaciones con las funciones de los arrays
