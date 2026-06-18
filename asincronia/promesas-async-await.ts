import fs = require('fs/promises')


const leerArchivos = async () => {
  const contenido1 = await fs.readFile('files/1.txt')
  console.log(contenido1.toString())
  
  
  const contenido2 = await fs.readFile('files/2.txt')
  console.log(contenido2.toString())
  
  console.log('FIN')
}

leerArchivos()