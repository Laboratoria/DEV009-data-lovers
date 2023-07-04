import { display } from './data.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const pokemonList = data.pokemon;


pokemonList.forEach(function(pokemon){
    display(pokemon);
})







console.log(pokemonList[0].type,pokemonList[0].name);
