import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results);

//poner todas las tarjetas por default en el inicio 

//Escuchar los eventos del DOM
//escuchar el evento de hacer click en la opcion 

//Status
const opcionVivo= document.getElementById("alive")
opcionVivo.addEventListener("click",crearTarjetas)

const opcionMuerto= document.getElementById("dead")
opcionMuerto.addEventListener("click",crearTarjetas)

const opcionTipoDesconocido= document.getElementById("unknownStatus")
opcionTipoDesconocido.addEventListener("click",crearTarjetas)

//Species
const opcionHuman= document.getElementById("human")
opcionHuman.addEventListener("click",crearTarjetas)

const opcionAlien= document.getElementById("alien")
opcionAlien.addEventListener("click",crearTarjetas)

const opcionVampire= document.getElementById("vampire")
opcionVampire.addEventListener("click",crearTarjetas)

const opcionHumanoid= document.getElementById("humanoid")
opcionHumanoid.addEventListener("click",crearTarjetas)

const opcionDisease= document.getElementById("disease")
opcionDisease.addEventListener("click",crearTarjetas)

const opcionCronenberg= document.getElementById("cronenberg")
opcionCronenberg.addEventListener("click",crearTarjetas)

const opcionunknownSpecie= document.getElementById("unknownSpecie")
opcionunknownSpecie.addEventListener("click",crearTarjetas)

//Type
const opcionAmoebaPerson= document.getElementById("amoebaPerson")
opcionAmoebaPerson.addEventListener("click",crearTarjetas)

const opcionGame= document.getElementById("game")
opcionGame.addEventListener("click",crearTarjetas)

const opcionDemon= document.getElementById("demon")
opcionDemon.addEventListener("click",crearTarjetas)

const opcionConeNippledAlien= document.getElementById("coneNippledAlien")
opcionConeNippledAlien.addEventListener("click",crearTarjetas)

const opcionGiant= document.getElementById("giant")
opcionGiant.addEventListener("click",crearTarjetas)

const opcionZigerion= document.getElementById("Zigerion")
opcionZigerion.addEventListener("click",crearTarjetas)

const opcionRobotCrocodileHybrid= document.getElementById("robotCrocodileHybrid")
opcionRobotCrocodileHybrid.addEventListener("click",crearTarjetas)

const opcionunknownType= document.getElementById("unknownType")
opcionunknownType.addEventListener("click",crearTarjetas)

//Gender
const opcionMale= document.getElementById("male")
opcionMale.addEventListener("click",crearTarjetas)

const opcionFemale= document.getElementById("female")
opcionFemale.addEventListener("click",crearTarjetas)

const opcionUnknownGender= document.getElementById("unknownGender")
opcionUnknownGender.addEventListener("click",crearTarjetas)

//Order
const opcionAZ= document.getElementById("AZ")
opcionAZ.addEventListener("click",crearTarjetas)

const opcionZA= document.getElementById("ZA")
opcionZA.addEventListener("click",crearTarjetas)

//Search
const opcionSearch= document.getElementById("search")
opcionSearch.addEventListener("click",crearTarjetas)


// Crear un arreglo con elementos de la opción seleccionada


//Crear los nodos 
const tarjetas = document.getElementById("listaPadre") // seleccionar el elemento padre 

function crearTarjetas(arregloTarjetas){
    for (let i = 0; i < arregloTarjetas.length; i++){
        const creaLi = document.createElement("li"); //creando los nodos 
        tarjetas.appendChild(li); //agregar el nodo 
}
}

//Hacer un arreglo con los type 

const statusArray = [];

data.results.forEach(element => {
    statusArray.push(element.type.value);
});

console.log(statusArray); 