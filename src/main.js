import data from './data/pokemon/pokemon.js';
import {sortNameDes, sortNameasc} from './data.js';

console.log(data);

//añadir un add event listener al menu
const menu = document.getElementById("menu")

menu.addEventListener("click",()=>{
    const element = menu.options[menu.selectedIndex].value
    if (element === "az"){
        sortNameasc(data.pokemon)
    } 
    else if (element === "za"){
        sortNameDes(data.pokemon)

    }console.log(data)
})



//const pElement = document.createElement("p");
//document.body.appendChild(pElement);

