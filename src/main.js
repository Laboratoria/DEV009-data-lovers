import {filteredStatus, filteredSpecies, filteredGender, filteredSearch} from './data.js'; //importar funciones de filtrado de data.js
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results);


//Escuchar los eventos del DOM - escuchar el evento de hacer click en la opcion 
/* seleccionar el id del select
escuchar el evento change
declarar constante con el valor del select
declarar una constante que usar la función para filtrar la data y la compara con la opción seleccionada
llamar función crear tarjetas y darle los datos filtrados 
*/
//Status
const selectStatus= document.getElementById("status")
selectStatus.addEventListener("change", () => {
    const optionStatus = selectStatus.value;
    const filterStatus = filteredStatus(data.results, optionStatus);
    crearTarjetas(filterStatus);
});

//Species
const selectSpecies= document.getElementById("species");
selectSpecies.addEventListener("change", () => {
    const optionSpecies = selectSpecies.value;
    const filterSpecies = filteredSpecies(data.results, optionSpecies);
    crearTarjetas(filterSpecies);
});

//Gender
const selectGender= document.getElementById("gender");
selectGender.addEventListener("change", () => {
    const optionGender = selectGender.value;
    const filterGender = filteredGender(data.results, optionGender);
    crearTarjetas(filterGender);
});

//Order
const selectOrder= document.getElementById("order");
selectOrder.addEventListener("change", () => {
    const optionOrder = selectOrder.value;
    let sorted;
    if (optionOrder === "AZ"){
        sorted = data.results.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        sorted = data.results.sort((a, b) => b.name.localeCompare(a.name));
    }
    crearTarjetas(sorted)
}); 

//Search
const opcionSearch= document.getElementById("search")
opcionSearch.addEventListener("keyup", () => {
    const searchInput = optionSearch.value;
    const searchOutput = filteredSearch(data.results, searchInput);
    crearTarjetas (searchOutput);
});


//crear una funcion que cree los li
//Crear los nodos 

const tarjetas = document.getElementById("divLista") // seleccionar el div padre 
crearTarjetas(data.results);
function crearTarjetas(arregloTarjetas){
    
    tarjetas.innerHTML = ""; //limpiar tarjetas previas 
    for (let i = 0; i < arregloTarjetas.length; i++){
        const tarjeta = arregloTarjetas[i];

        //creando los nodos    
        const creaLi = document.createElement("li"); 
        //crear cards
        const cardContent = document.createElement("div"); 
        cardContent.classList.add("card-content"); //agregar clase 

        //agregar nombre - crear elementos y establecer contenido
        const nameElement = document.createElement("h3");
        nameElement.textContent = tarjeta.name;
        //agregar status
        const statusElement = document.createElement("p");
        statusElement.textContent = tarjeta.status;
        //agregar species
        const statusSpecies = document.createElement("p");
        statusSpecies.textContent = tarjeta.species;
        //agregar type 
        const statusType = document.createElement("p");
        statusType.textContent = tarjeta.type;
        //agregar gender 
        const statusGender = document.createElement("p");
        statusGender.textContent = tarjeta.gender;
        //agregar origin.name 
        const statusOriginName = document.createElement("p");
        statusOriginName.textContent = tarjeta.origin.name;
        //agregar location.name 
        const statusLocationName = document.createElement("p");
        statusLocationName.textContent = tarjeta.location.name;
        //agregar imagen 
        const statusImagen = document.createElement("img");
        statusImagen.src = tarjeta.image;


        //agregar los elementos a la tarjeta 
        cardContent.appendChild(nameElement);
        cardContent.appendChild(statusElement);
        cardContent.appendChild(statusSpecies);
        cardContent.appendChild(statusType);
        cardContent.appendChild(statusGender);
        cardContent.appendChild(statusOriginName);
        cardContent.appendChild(statusLocationName);
        cardContent.appendChild(statusImagen);

        //agregar el contenido de la tarjeta a la lista
        creaLi.appendChild(cardContent);    
        tarjetas.appendChild(creaLi); //agregar el nodo Li al div padre (ul)
};
}
