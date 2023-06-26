import { goldPercentage, silverPercentage, bronzePercentage, goldAthletes, silverAthletes, bronzeAthletes } from './data.js';
import data from './data/athletes/athletes.js';

//llamar a los datos de Athletes
const dataArr = Object.values(data.athletes)

//Extraer el conteo de medallas ganadas por jugador, indicando el tipo de medalla 
function medCount(){
    const athletes = dataArr.map((athlete) => {
      const { name, medal } = athlete; //Para que el resultado lo devuelva en forma de objeto
      const medalCount = {
        Gold: 0,
        Silver: 0,
        Bronze: 0
      };
      if (medal === "Gold") {
        medalCount.Gold = 1;
      } else if (medal === "Silver") {
        medalCount.Silver = 1;
      } else if (medal === "Bronze") {
        medalCount.Bronze = 1;
      }
      return { name, ...medalCount }; //los ... se usan para copiar todas las propiedades de medalCount (gold, silver, bronze)
    });
    return athletes;
  }console.log("meed", medCount());
// En esta constante se almacena el resultado de la función para poder trabajar con esto después
const medalsArr = medCount();

//Se agregan los % correspondientes por cada tipo de medalla
  document.getElementById("gold%").innerHTML = goldPercentage(medCount()) + " %";
  document.getElementById("silver%").innerHTML = silverPercentage(medCount()) + " %";
  document.getElementById("bronze%").innerHTML = bronzePercentage(medCount()) + " %";

//Estas constantes almacenan los nombres de los atletas por medalla y el espacio en el HTML donde se va a crear la lista con el contenido
const goldNames = goldAthletes(medalsArr);
const goldNamesList = document.getElementById("goldNames");
const silverNames = silverAthletes(medalsArr);
const silverNamesList = document.getElementById("silverNames");
const bronzeNames = bronzeAthletes(medalsArr);
const bronzeNamesList = document.getElementById("bronzeNames");

//La función crea las listas con los atletas por cada medalla
function athLists () {
  goldNames.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    goldNamesList.appendChild(listItem);
  });

  silverNames.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    silverNamesList.appendChild(listItem);
  });

  bronzeNames.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    bronzeNamesList.appendChild(listItem);
  });

};
athLists();

//Activa los botones "see more" para que muestre la lista completa de los atletas
const goldButton = document.getElementById("goldBtn");
const silverButton = document.getElementById("silverBtn");
const bronzeButton = document.getElementById("bronzeBtn");

function showGold() {
  goldNamesList.style.maxHeight = "none";
  goldButton.style.display = "none"; 
}
goldButton.addEventListener("click", showGold);

function showSilver() {
  silverNamesList.style.maxHeight = "none";
  silverButton.style.display = "none";
}
silverButton.addEventListener("click", showSilver);

function showBronze() {
  bronzeNamesList.style.maxHeight = "none";
  bronzeButton.style.display = "none";
}
bronzeButton.addEventListener("click", showBronze);