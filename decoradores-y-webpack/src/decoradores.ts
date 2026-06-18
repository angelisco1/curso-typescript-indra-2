import { Token } from "./token"

export function medirPerformance(target: Object, key: string, descriptor: any) {
  console.log('key: ', key)
  console.log('Target: ', target)
  // getInformacion
  const oldDescriptor = descriptor.value
  console.log('Old Desc: ', oldDescriptor)

  // nuevo getInformacion
  descriptor.value = function (...args: Array<any>) {
    const tiempoInicial = performance.now()

    const informacion = oldDescriptor.apply(this, args)
    
    const tiempoFinal = performance.now()
    const tiempoTotal = tiempoFinal - tiempoInicial
    console.log(`la función ${key} tarda en ejecutarse ${tiempoTotal}ms`)
    
    return informacion
    // return `<marquee>Hola que tal?</marquee>`
  }

  return descriptor
  // return () => {return 'Hola que tal??'}
}


export function isAuthenticated(target: Object, key: string, descriptor: any) {
  const oldDescriptor = descriptor.value

  descriptor.value = function(...args: Array<any>) {

    const token = Token.getToken()
    console.log(token)
    if (!token) {
      throw new Error('No estás logueado')
    }
    
    const resultado = oldDescriptor.apply(this, args)
    return resultado

  }

  return descriptor
}