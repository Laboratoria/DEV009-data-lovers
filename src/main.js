import { filterData,sortData} from './data.js';
import data from './data/pokemon/pokemon.js';
const pokemonList = data.pokemon;
const seccionShowAll = document.getElementById('showAll');
const menuOption = document.getElementById('mostrar');
menuOption.addEventListener('click',function(){
  const valorSelecc = this.options[menuOption.selectedIndex].value;
  while (seccionShowAll)
  switch(valorSelecc){
    case '1':
      pokemonList.forEach(function(pokemon){
        display(pokemon);
      });
    brake;
  }
});

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
/*const pokemonFirstG = filterData(pokemonList,'generation i',['generation','num']);
const pokemonSecdG = filterData(pokemonList,'generation ii',['generation','num']);
const pokemonNormal = filterData(pokemonList,"normal",['pokemon-rarity']);
const pokemonLegendary = filterData(pokemonList,"legendary",['pokemon-rarity']);
const pokemonMythic = filterData(pokemonList,"mythic",['pokemon-rarity']);
*/
const pokemonFuego = filterData(pokemonList,'fire','type');
const pokemonAgua = filterData(pokemonList,'water','type');
const pokemonVeneno = filterData(pokemonList,'poison','type');
const pokemonPlanta = filterData(pokemonList,'grass','type');
const pokemonNormal = filterData(pokemonList,'normal','type');
const pokemonElectrico = filterData(pokemonList,'electric','type');
const pokemonPsiquico = filterData(pokemonList,'psychic','type');
const pokemonRoca = filterData(pokemonList,'rock','type');
const pokemonHielo = filterData(pokemonList,'ice','type');
const pokemonDragon = filterData(pokemonList,'dragon','type');
const pokemonOscuro = filterData(pokemonList,'dark','type');
const pokemonFantasma = filterData(pokemonList,'gosht','type');
const pokemonVolador = filterData(pokemonList,'flight','type');
const pokemonHada = filterData(pokemonList,'fairy','type');
const pokemonAcero = filterData(pokemonList,'steel','type');
const pokemonSuelo = filterData(pokemonList,'ground','type');
const pokemonBicho = filterData(pokemonList,'bug','type');
const pokemonMythic = filterData(pokemonList,'mythic','pokemon-rarity');
const ordenarascendente = sortData(pokemonFuego,'pokemon-rarity','ascendente');
/*
ordenarascendente.forEach(function(pokemon){

  display(pokemon);
});
console.log('Se seleccionaron todos :',pokemonList);
*/
