import type peticionesHttpTypes = require("./peticiones-http.types")

// fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
//   .then(resp => resp.json())
//   .then(body => console.log(body))

const buscarCocktails = async (nombre: string = 'margarita'): Promise<peticionesHttpTypes.ResponseDrinks> => {
  const resp: Response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`)
  const body: peticionesHttpTypes.ResponseDrinks = await resp.json()
  
  console.log(body)
  return body
}

// buscarCocktails()
buscarCocktails('mojito')