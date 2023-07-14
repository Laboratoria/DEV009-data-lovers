/* eslint-disable no-case-declarations */
import { filterData,sortData,epsCal,promEps} from './data.js';
import data from './data/pokemon/pokemon.js';
const pokemonList = data.pokemon;
const seccionShowAll = document.getElementById('showAll');
const menuOption = document.getElementById('mostrar');
const menuOrdenar = document.getElementById('ordenar');
const menuGeneration = document.getElementById('generation');


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
const cleanShowAll = () =>{
  while (seccionShowAll.hasChildNodes()){
    seccionShowAll.removeChild(seccionShowAll.firstChild);
  }

};

menuGeneration.addEventListener('change', () => {
  const choice = menuGeneration.options[menuGeneration.selectedIndex].value;
  location.href = '#mostrarPokemon';
  cleanShowAll();
  if (choice === "todos"){
    pokemonList.forEach(function(pokemon){
      display(pokemon);
    });

    menuOption.addEventListener('change',
      function(){
        selectedOption =menuOption.options[menuOption.selectedIndex].value;
        location.href = '#mostrarPokemon';
    
        cleanShowAll();
    
        switch(selectedOption){
           
        case 'mythic':

          const mythic = filterData(pokemonList,'mythic','pokemon-rarity')
       
          mythic.forEach(function(pokemon){
            display(pokemon);
          });

          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            const ordenados = sortData(mythic,'name',ordenar);
            ordenados.forEach(function(pokemon){
              display(pokemon);
            });
      
        
          });
      
          break;
         
    
        case 'legendary':
          const legendary = filterData(pokemonList,'legendary','pokemon-rarity');
          legendary.forEach(function(pokemon){
            display(pokemon);
          });
          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            const ordenados = sortData(legendary,'name',ordenar);
            ordenados.forEach(function(pokemon){
              display(pokemon);
            });
      
        
          });
      
          break;

        case 'normal':  
          const normal = filterData(pokemonList,'normal','pokemon-rarity');
          normal.forEach(function(pokemon){
            display(pokemon);
          });
          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            const ordenados = sortData(normal,'name',ordenar);
            ordenados.forEach(function(pokemon){
              display(pokemon);
            });
      
        
          });
          break;
        
        }
    
      }
    );


  }else if(choice === "generation i"){

    const generationi = pokemonList.filter(i => i.generation.num === "generation i");
    generationi.forEach(function(pokemon){
      display(pokemon);
    });
    menuOption.addEventListener('change',
      function(){
        selectedOption =menuOption.options[menuOption.selectedIndex].value;
        location.href = '#mostrarPokemon';
    
        cleanShowAll();
    
        switch(selectedOption){
           
        case 'mythic':

          const mythic = filterData(generationi,'mythic','pokemon-rarity')
       
          mythic.forEach(function(pokemon){
            display(pokemon);
          });

          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            const ordenados = sortData(mythic,'name',ordenar);
            ordenados.forEach(function(pokemon){
              display(pokemon);
            });
      
        
          });
      
          break;
         
    
        case 'legendary':
          const legendary = filterData(generationi,'legendary','pokemon-rarity');
          legendary.forEach(function(pokemon){
            display(pokemon);
          });
          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            const ordenados = sortData(legendary,'name',ordenar);
            ordenados.forEach(function(pokemon){
              display(pokemon);
            });
      
        
          });
      
          break;

        case 'normal':  
          const normal = filterData(generationi,'normal','pokemon-rarity');
          normal.forEach(function(pokemon){
            display(pokemon);
          });
          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            const ordenados = sortData(normal,'name',ordenar);
            ordenados.forEach(function(pokemon){
              display(pokemon);
            });
      
        
          });
          break;
        
        }
    
      }
    );

  }else{
    const generationii = pokemonList.filter(i => i.generation.num === "generation ii");
    generationii.forEach(function(pokemon){
      display(pokemon);
    });
    menuOption.addEventListener('change',
      function(){
        selectedOption =menuOption.options[menuOption.selectedIndex].value;
        location.href = '#mostrarPokemon';
    
        cleanShowAll();
    
        switch(selectedOption){
           
        case 'mythic':

          const mythic = filterData(generationii,'mythic','pokemon-rarity')
       
          mythic.forEach(function(pokemon){
            display(pokemon);
          });

          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            const ordenados = sortData(mythic,'name',ordenar);
            ordenados.forEach(function(pokemon){
              display(pokemon);
            });
      
        
          });
      
          break;
         
    
        case 'legendary':
          const legendary = filterData(generationii,'legendary','pokemon-rarity');
          legendary.forEach(function(pokemon){
            display(pokemon);
          });
          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            const ordenados = sortData(legendary,'name',ordenar);
            ordenados.forEach(function(pokemon){
              display(pokemon);
            });
      
        
          });
      
          break;

        case 'normal':  
          const normal = filterData(generationii,'normal','pokemon-rarity');
          normal.forEach(function(pokemon){
            display(pokemon);
          });
          menuOrdenar.addEventListener('change', ()=>{
            const ordenar = menuOrdenar.options[menuOrdenar.selectedIndex].value;
            cleanShowAll();
            const ordenados = sortData(normal,'name',ordenar);
            ordenados.forEach(function(pokemon){
              display(pokemon);
            });
      
        
          });
          break;
        }
      }
    );
  }
}
);

console.log('promEps =',promEps(pokemonList[0]['quick-move']));


