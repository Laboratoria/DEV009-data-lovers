//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.json' assert {type:'json'} ;

const ArrayDePokemons = data.pokemon;

const button = document.getElementById("comenzar");
button.addEventListener("click", function () {
  window.location.href= 'index2.html';
});

const viewPokemonList = document.getElementById("root");

for(const i of ArrayDePokemons){
  
  const cardDataPokemon = document.createElement('div');
  cardDataPokemon.setAttribute('class','VistaDeTarjetas');
  const na = document.createElement('p');
  const imgn = document.createElement('img');
  const num = document.createElement('p');
  const desc = document.createElement('p');
  imgn.src = i.img;
  num.textContent = i.num;
  desc.textContent = i.about;
  na.textContent = i.name;
  cardDataPokemon.appendChild(na);
  cardDataPokemon.appendChild(imgn);
  cardDataPokemon.appendChild(num);
  cardDataPokemon.appendChild(desc);
  viewPokemonList.appendChild(cardDataPokemon);
};
