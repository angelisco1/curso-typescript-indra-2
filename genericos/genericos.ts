function getRandomItem<T>(items: Array<T>): T {
  const posicion = Math.floor(Math.random() * items.length)
  return items[posicion]
}

let numAleatorio = getRandomItem([1, 2, 3, 4, 5])
let textoAleatorio = getRandomItem(['a', 'b', 'c', 'd'])
console.log(numAleatorio, textoAleatorio)


interface Inventario<T> {
  addItem: (item: T) => void;
  getItems: () => Array<T>;
}

interface Ingrediente {
  id: string,
  nombre: string,
  stock: number,
}

class Almacen<T> implements Inventario<T> {
  private catalogo: Array<T> = []

  addItem(item: T): void {
    this.catalogo.push(item)
  }

  getItems(): Array<T> {
    return this.catalogo
  }
}


const almacenIngredientes = new Almacen<Ingrediente>()
almacenIngredientes.addItem({id: 'ing1', nombre: 'patata', stock: 1000})
almacenIngredientes.addItem({id: 'ing2', nombre: 'tomates', stock: 700})
console.log(almacenIngredientes.getItems())

interface Lampara {
  id: string,
  nombre: string
}

const almacenLamparas = new Almacen<Lampara>()
almacenLamparas.addItem({id: 'lam1', nombre: 'Lampara plegable de escritorio'})
almacenLamparas.addItem({id: 'lam2', nombre: 'Lampara con gancho para libros'})
console.log(almacenLamparas.getItems())


class MiCustomMap<K, V> {
  obj: any = {}

  get(key: K): V {
    return this.obj[key]
  }

  has(key: K): boolean {
    return Object.keys(this.obj).some(k => k === key)
  }

  set(key: K, value: V): void {
    this.obj[key] = value
  }
}