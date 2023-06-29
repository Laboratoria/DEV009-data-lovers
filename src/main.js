//import { filtername} from './data.js';

import data from './data/pokemon/pokemon.js';
import {sortNameDes, sortNameasc, sortNumYouger, sortNumLower} from './data.js';

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

    }
    else if (element === "numberMayor"){
        sortNumYouger(data.pokemon)
    }
    else if (element === "numberMenor"){
        sortNumLower(data.pokemon)
    }console.log(data)

})
//como hacer que el menu no haga click por defecto
//como mostrar en el dom
