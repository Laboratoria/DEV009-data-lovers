/* eslint-disable no-case-declarations */
import { filterData,sortData} from './data.js';
import data from './data/pokemon/pokemon.js';
const pokemonList = data.pokemon;
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
const pokemonSecdG = filterData(pokemonList,'generation ii',['generation','num']);
*/
const pokemonFuego = filterData(pokemonList,'fire','type');
const pokemonMythic = filterData(pokemonList,'mythic','pokemon-rarity');
const ordenarascendente = sortData(pokemonFuego,'pokemon-rarity','ascendente');

ordenarascendente.forEach(function(pokemon){

  display(pokemon);
});
console.log('pokemon mythic :',pokemonMythic);

