import { display } from './data.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const pokemonList = data.pokemon;
const pokemonFirstG = [];
const pokemonSecdG = [];

for(const i of pokemonList){
  if(i.generation.num ==='generation i'){
    Array.prototype.push.apply(pokemonFirstG,pokemonList[i]);
  }else{
    Array.prototype.push.apply(pokemonSecdG,pokemonList[i]);
  }

}

pokemonList.forEach(function(pokemon){

  display(pokemon);
})







console.log(pokemonList[0].type,pokemonList[0].generation.num);
