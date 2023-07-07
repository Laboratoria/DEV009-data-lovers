import { filterData } from './data.js';
import data from './data/pokemon/pokemon.js';

const seccionShowAll = document.getElementById('showAll');

const display = (pokemonData)=>{
  
  const cardPokemon = document.createElement('div');
  cardPokemon.classList.add(`pokemon-card`);
  cardPokemon.classList.add(`${pokemonData.type[0]}`);
  const namePokemon = document.createElement('p');
  namePokemon.textContent = pokemonData.name;
  const numPokemon = document.createElement('p');
  numPokemon.textContent = pokemonData.num;
  const imgPokemon = document.createElement('img');
  imgPokemon.setAttribute('src',pokemonData.img);
   
  cardPokemon.appendChild(namePokemon);
  cardPokemon.appendChild(imgPokemon);
  cardPokemon.appendChild(numPokemon);
  seccionShowAll.appendChild(cardPokemon);

};
/*
const filterData1 = (data,condition,filterBy) => {
  let result = [];
  if (filterBy.length ===1){
    result = result.concat(data.filter (index => index[filterBy[0]] === condition));

  }else{
    result = result.concat(data.filter (index => index[filterBy[0]][filterBy[1]] === condition));

  }
  return result;
};

*/

const pokemonList = data.pokemon;
/*const pokemonFirstG = filterData(pokemonList,'generation i',['generation','num']);
const pokemonSecdG = filterData(pokemonList,'generation ii',['generation','num']);
const pokemonNormal = filterData(pokemonList,"normal",['pokemon-rarity']);
const pokemonLegendary = filterData(pokemonList,"legendary",['pokemon-rarity']);
const pokemonMythic = filterData(pokemonList,"mythic",['pokemon-rarity']);
*/
const pokemonFuego = filterData(pokemonList,'fire','type');

pokemonFuego.forEach(function(pokemon){

  display(pokemon);
});
console.log('pokemon de fuego :',pokemonFuego);
