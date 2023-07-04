import { filter } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results);
console.log(data.results.type);


//Escuchar los eventos del DOM - escuchar el evento de hacer click en la opcion 

//Status
const selectStatus= document.getElementById("status")
selectStatus.addEventListener("change", () => {
    const optionStatus = selectStatus.value;
    const filteredStatus = data.results.filter(function(result){
        return result.status === optionStatus;
    });
    console.log(filteredStatus);
});

//Species
//definir la funcion filtrar 

//escuchar el evento del elemento selectSpecies
const selectSpecies= document.getElementById("species");
selectSpecies.addEventListener("change", () => {
    const optionSpecies = selectSpecies.value;
    const filteredSpecies = data.results.filter(function(result){
        return result.species === optionSpecies;
    });
    console.log(filteredSpecies);
});

//Gender
const selectGender= document.getElementById("gender");
selectGender.addEventListener("change", () => {
    const optionGender = selectGender.value;
    const filteredGender = data.results.filter(function(result){
        return result.gender === optionGender;
    });
    console.log(filteredGender);
});

//Order
/*const selectOrder= document.getElementById("order");
selectOrder.addEventListener("change", () => {
    const optionOrder = selectOrder.value;
    let sorted;
    if (optionOrder === "AZ"){
        sorted = data.results.sort((a, b) => a.order.localeCompare(b.order));
    } else {
        sorted = data.results.sort((a, b) => b.order.localeCompare(a.order));
    }
    console.log(sorted);
}); */

//Search
const opcionSearch= document.getElementById("search")
opcionSearch.addEventListener("click",crearTarjetas)


//crear una funcion que cree los li
//Crear los nodos 
const tarjetas = document.getElementById("listaPadre") // seleccionar el elemento padre 

function crearTarjetas(arregloTarjetas){
    for (let i = 0; i < arregloTarjetas.length; i++){
        const creaLi = document.createElement("li"); //creando los nodos 
        tarjetas.appendChild(creaLi); //agregar el nodo 
}
}



//Hacer un arreglo con los type 

/*const statusArray = [];

data.results.forEach(element => {
    if (!statusArray.includes(element.species)){
        statusArray.push(element.species);
    } 
});

console.log(statusArray); */