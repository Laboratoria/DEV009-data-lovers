//import { filtername} from './data.js';

import data from './data/pokemon/pokemon.js';
import { sortNameDes, sortNameasc, sortNumYouger, sortNumLower } from './data.js';
const dataPokemon = data.pokemon;
const container = document.getElementById("targets");

//mostrar en el dom todos los pokemones
const display = (pokemones)=>{
    pokemones.forEach(element => {
        const target = document.createElement('article')
        target.classList.add('target1');
        target.innerHTML += `<img src='${element.img}' alt='imagen de ${element.name}'>
        <h2>${element.name}</h2>
        <h3>${element.num}</h3>
        <h3>${element.generation.num}</h3>
        <h3>${element.type}</h3>
        <h3>${element.size.height}</h3>
        <h3>${element.size.weight}</h3>
        <p>${element.about}</p>`
        container.appendChild(target)
    });
}
display(dataPokemon);

//añadir un add event listener al menu
const menu = document.getElementById("menu")

menu.addEventListener("click", () => {
    const element = menu.options[menu.selectedIndex].value
    if (element === "az") {
        sortNameasc(data.pokemon)
    }
    else if (element === "za") {
        sortNameDes(data.pokemon)

    }
    else if (element === "numberMayor") {
        sortNumYouger(data.pokemon)
    }
    else if (element === "numberMenor") {
        sortNumLower(data.pokemon)
    } console.log(data)
})

//filtro de busqueda por nombre
const filterSearch= ()=>{

}