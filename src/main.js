import {filteredStatus, filteredSpecies, filteredGender, filteredSearch, filteredOrder, porcentajeCalculo } from './data.js'; //importar funciones de filtrado de data.js
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

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
  const porcentajeStatus = porcentajeCalculo(filterStatus);
  if (optionStatus === "All"){
    crearTarjetaAll()
  } else {
    crearTarjetaPorcentaje(porcentajeStatus);
  }
});

//Species
const selectSpecies= document.getElementById("species");
selectSpecies.addEventListener("change", () => {
  const optionSpecies = selectSpecies.value;
  const filterSpecies = filteredSpecies(data.results, optionSpecies);
  crearTarjetas(filterSpecies);
  const porcentajeSpecies = porcentajeCalculo(filterSpecies);
  if (optionSpecies === "All"){
    crearTarjetaAll()
  } else{
    crearTarjetaPorcentaje(porcentajeSpecies);
  }
    
});

//Gender
const selectGender = document.getElementById("gender");
selectGender.addEventListener("change", () => {
    const optionGender = selectGender.value;
    const filterGender = filteredGender(data.results, optionGender);
    crearTarjetas(filterGender);
    const porcentajeGender = porcentajeCalculo(filterGender);
    if (optionGender === "All"){
        crearTarjetaAll()
    } else{
        crearTarjetaPorcentaje(porcentajeGender);
    }
    
});

//Order
const selectOrder= document.getElementById("order");
selectOrder.addEventListener("change", () => {
    const optionOrder = selectOrder.value;
    if (optionOrder === "All"){
        crearTarjetas(data.results);
    } else {
        const filterOrder = filteredOrder(data.results, optionOrder);
        crearTarjetas(filterOrder);
    }
    crearTarjetaEnBlanco();
  
}); 

//Search
const optionSearch= document.getElementById("search")
optionSearch.addEventListener("keyup", () => {
    const searchInput = optionSearch.value;
    const searchOutput = filteredSearch(data.results, searchInput);
    crearTarjetas (searchOutput);
    crearTarjetaEnBlanco();
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
        nameElement.textContent = "Name: " + tarjeta.name ;
        //agregar status
        const statusElement = document.createElement("p");
        statusElement.textContent = "Status: " + tarjeta.status;
        //agregar species
        const statusSpecies = document.createElement("p");
        statusSpecies.textContent = "Species: " + tarjeta.species;
        //agregar type 
        const statusType = document.createElement("p");
        statusType.textContent = "Type: " + tarjeta.type;
        //agregar gender 
        const statusGender = document.createElement("p");
        statusGender.textContent = "Gender: " + tarjeta.gender;
        //agregar origin.name 
        const statusOriginName = document.createElement("p");
        statusOriginName.textContent = "Origin: " + tarjeta.origin.name;
        //agregar location.name 
        const statusLocationName = document.createElement("p");
        statusLocationName.textContent = "Location: " + tarjeta.location.name;
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
function crearTarjetaPorcentaje(porcentaje){
     const selectPorcentaje = document.getElementById("pPorcentaje");
     selectPorcentaje.innerHTML = "Esta categoria contiene: " + porcentaje + "% de los personajes totales";
};

function crearTarjetaEnBlanco(){
     const selectPorcentajeEnBlanco = document.getElementById("pPorcentaje");
     selectPorcentajeEnBlanco.innerHTML = " ";
}

function crearTarjetaAll(){
    const selectPorcentajeAll = document.getElementById("pPorcentaje");
    selectPorcentajeAll.innerHTML = "Se muestran todos los datos";
}