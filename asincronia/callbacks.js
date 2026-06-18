"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
// Callback
// const mostrarContenido = (err: any, data: any) => {
//   console.log(data.toString())
// }
// fs.readFile('files/1.txt', mostrarContenido)
// fs.readFile('files/2.txt', mostrarContenido)
// console.log('FIN')
// FIN, 1, 2
// o
// FIN, 2, 1
fs.readFile('files/1.txt', (err, data) => {
    console.log(data.toString());
    fs.readFile('files/2.txt', (err, data) => {
        console.log(data.toString());
        console.log('FIN');
    });
});
// 1, 2, FIN
