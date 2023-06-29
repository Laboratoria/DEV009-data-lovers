
import data from './data/pokemon/pokemon.js';
import sortNameAsc from './data.js'

console.log(data);
const newDataSort = data.pokemon


//para obtener los elementos del menu 
const menu = document.getElementById('menu')
console.log(menu.options)
menu.addEventListener("click", ()=>{
    const id = menu.options[menu.selectedIndex].value;
    if(id === "AZ"){
        sortNameAsc(newDataSort)
        console.log(newDataSort, data)
    }

})




