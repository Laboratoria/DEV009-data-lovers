//import { filtername} from './data.js';

import data from './data/pokemon/pokemon.js';
import { sortNameasc, sortNumYouger, promPokemonEveryType, restultName} from './data.js';
const dataPokemon = data.pokemon;
const container = document.getElementById("targets");

//console.log(promPokemonEveryType(dataPokemon))
//mostrar en el dom todos los pokemones

const display = (pokemones) => {
  container.innerHTML = ""
  pokemones.forEach(element => {
    const target = document.createElement('article')
    target.classList.add('cards');
    target.innerHTML += `<img src='${element.img}' alt='imagen de ${element.name}'>
        <h2>${element.name}</h2>
        <h4> Número: ${element.num}</h4>
        <h4>${element.generation.num}</h4>
        <h4> Tipo: ${element.type}</h4>
        <h4> Tamaño: ${element.size.height}</h4>
        <h4> Peso: ${element.size.weight}</h4>
        <p>${element.about}</p>`
    container.appendChild(target)
    
  });
}
display(dataPokemon);

//añadir un add event listener al menu
const menu = document.getElementById("menu");
//const targets = document.querySelector(".cards");

menu.addEventListener("change", () => {
  const element = menu.options[menu.selectedIndex].value
  if (element === "az" || element === "za") {
    display(sortNameasc(dataPokemon,element))
  }
  else if (element === "numberMayor" || element === "numberMenor") {
    display(sortNumYouger(dataPokemon,element))
  }

});

//filtro de buscar por nombre
document.getElementById('pokeNames').addEventListener('keyup', () => {
  const filterName = document.getElementById('pokeNames').value;
  const results =  restultName(dataPokemon, filterName )
  display(results)
});

//FILTRO PORCENTAJE POR TIPO 
document.getElementById('best').addEventListener('click',()=>{
  document.getElementById('best').value;
 
  const objtypes=  promPokemonEveryType(dataPokemon) // objeto
  container.innerHTML = ""
  for (const property in objtypes) {
    const p = `<p id="porcent" >${property}: ${objtypes[property]}</p>`
    container.innerHTML += p;
    
  }
});
