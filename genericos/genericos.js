"use strict";
function getRandomItem(items) {
    const posicion = Math.floor(Math.random() * items.length);
    return items[posicion];
}
let numAleatorio = getRandomItem([1, 2, 3, 4, 5]);
let textoAleatorio = getRandomItem(['a', 'b', 'c', 'd']);
console.log(numAleatorio, textoAleatorio);
class Almacen {
    catalogo = [];
    addItem(item) {
        this.catalogo.push(item);
    }
    getItems() {
        return this.catalogo;
    }
}
const almacenIngredientes = new Almacen();
almacenIngredientes.addItem({ id: 'ing1', nombre: 'patata', stock: 1000 });
almacenIngredientes.addItem({ id: 'ing2', nombre: 'tomates', stock: 700 });
console.log(almacenIngredientes.getItems());
const almacenLamparas = new Almacen();
almacenLamparas.addItem({ id: 'lam1', nombre: 'Lampara plegable de escritorio' });
almacenLamparas.addItem({ id: 'lam2', nombre: 'Lampara con gancho para libros' });
console.log(almacenLamparas.getItems());
