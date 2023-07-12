/* eslint-disable no-case-declarations */
import { filterData,sortData} from './data.js';
import data from './data/pokemon/pokemon.js';
const pokemonList = data.pokemon;
const seccionShowAll = document.getElementById('showAll');
const menuOption = document.getElementById('mostrar');
const menuOrdenar = document.getElementById('ordenar');


let selectedOption;

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

menuOption.addEventListener('change',
  function(){
    selectedOption = this.options[menuOption.selectedIndex].value;
    location.href = '#mostrarPokemon';
    
    while (seccionShowAll.hasChildNodes()){
      seccionShowAll.removeChild(seccionShowAll.firstChild);
    }
    
    switch(selectedOption){
 
    case 'todos':
      pokemonList.forEach(function(pokemon){
        display(pokemon);
      });
      break;
          
    case 'mythic':
       
      filterData(pokemonList,'mythic','pokemon-rarity').forEach(function(pokemon){
        display(pokemon);
      });
      
      break;
         
    
    case 'legendary':
      const legendary = filterData(pokemonList,'legendary','pokemon-rarity')
            legendary.forEach(function(pokemon){
        display(pokemon);
      });
      menuOrdenar.addEventListener('change', ()=>{
        const ordenar = this.options[menuOrdenar.selectedIndex].value;
        if (ordenar ==='name-ascendente'){
          sortData(legendary,'name','ascendente').forEach(function(pokemon){
            display(pokemon);
          });
      
        } else {
          sortData(legendary,'name','descendente').forEach(function(pokemon){
            display(pokemon);
          });
        }})
      

      
      break;

    case 'normal':  
      const normal = filterData(pokemonList,'normal','pokemon-rarity');
      normal.forEach(function(pokemon){
        display(pokemon);
      });
      break;
        
    }
    
  }
);
const orderDraf = (datos)=>{
  menuOrdenar.addEventListener('change', ()=>{
  const ordenar = this.options[menuOrdenar.selectedIndex].value;
  if (ordenar ==='name-ascendente'){
    return sortData(datos,'name','ascendente');

  } else {
    return sortData(datos,'name','descendente');
  }
});
};
console.log('pokemon mythic :',seccionShowAll);

