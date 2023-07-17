/* eslint-disable no-case-declarations */
import { filterData,sortData,mean,change} from './data.js';
import data from './data/pokemon/pokemon.js';
const pokemonList = data.pokemon;
const seccionShowAll = document.getElementById('showAll');
const menuOption = document.getElementById('mostrar');
const menuOrdenar = document.getElementById('ordenar');
const menuGeneration = document.getElementById('generation');

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
        const selectedOption =menuOption.options[menuOption.selectedIndex].value;
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
        const selectedOption =menuOption.options[menuOption.selectedIndex].value;
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
        const selectedOption =menuOption.options[menuOption.selectedIndex].value;
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


const vecEps = [];
const vecDps = [];

const pokemonCopy = pokemonList.map(x => x);




pokemonList.map(function(pokemon){

  vecEps.push(pokemon['quick-move'].map(attack =>change(attack,"energy","move-duration-seg")));
  vecDps.push(pokemon['quick-move'].map(attack =>change(attack,"base-damage","move-duration-seg")));

}) 

const vecMeansEps = vecEps.map(function(energies){
  return parseFloat(mean(energies));
})
const vecMeansDps = vecDps .map(function(damage){
  return parseFloat(mean(damage));
})
let i=0;
for (const pokemon of pokemonCopy){
  pokemon.eps = vecMeansEps[i];
  pokemon.dps = vecMeansDps[i];
  i++;
}

const orderByEps2 = sortData(pokemonCopy.filter(i => i.generation.num === "generation ii"),'eps','descendente');
const orderByDps2 = sortData(pokemonCopy.filter(i => i.generation.num === "generation ii"),'dps','descendente');


console.log('top 10 eps segunda generacion',orderByEps2.splice(0,10),'top 10 dps segunda generacion',orderByDps2.splice(0,10));

const orderByEps1 = sortData(pokemonCopy.filter(i => i.generation.num === "generation i"),'eps','descendente');
const orderByDps1 = sortData(pokemonCopy.filter(i => i.generation.num === "generation i"),'dps','descendente');

console.log('top 10 eps generacion 1',orderByEps1.splice(0,10),'top 10 dps generacion 1',orderByDps1.splice(0,10));