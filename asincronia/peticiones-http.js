"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
//   .then(resp => resp.json())
//   .then(body => console.log(body))
const buscarCocktails = async (nombre = 'margarita') => {
    const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`);
    const body = await resp.json();
    console.log(body);
    return body;
};
// buscarCocktails()
buscarCocktails('mojito');
