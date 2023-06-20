import { filterTeam } from './data.js';
import data from './data/athletes/athletes.js';
import { sortData } from './data.js';
import athletes from './data/athletes/athletes.js';

//llamar a los datos de Athletes
const dataArr = Object.values(data.athletes)
//Barra de busqueda
const barra = document.getElementById('barra')
//Boton buscar
const buscar = document.getElementById('buscar')
//Lo que se busque en la barra me muestre el resultado
buscar.addEventListener('click', () =>{
    console.log(barra.value)
    return 
})
// Extrar los datos
function generateCards () {
const cardsHTML = dataArr.map((object) => {
    const propiedadesHTML = Object.entries(object).map(([clave, valor]) => {
        return `<p><strong>${clave}:</strong> ${valor}</p>`;
    }).join('');
    return `<div class="cartilla">${propiedadesHTML}</div>`;
});
  return cardsHTML.join('');
}

//Se agregan las cartillas con la información
const cardsContainer = document.getElementById('cartillaContenedor');
cardsContainer.innerHTML = generateCards(dataArr);

//Ordenar por
function sortby(){
  document.getElementById("oldestToYoungest").addEventListener("click", () => 
  {
    const sortResult = sortData.sortbyAge1(dataArr);
    const createHTML = generateCards(sortResult);
    cardsContainer.innerHTML = createHTML;
  });

  document.getElementById("youngestToOldest").addEventListener("click", () => 
  {
    const sortResult = sortData.sortbyAge2(dataArr);
    const createHTML = generateCards(sortResult);
    cardsContainer.innerHTML = createHTML;
  });

  document.getElementById("athleteAtoZ").addEventListener("click", () => 
  {
    const sortResult = sortData.sortbyNameAtoZ(dataArr);
    const createHTML = generateCards(sortResult);
    cardsContainer.innerHTML = createHTML;
  });

  document.getElementById("athleteZtoA").addEventListener("click", () => 
  {
    const sortResult = sortData.sortbyNameZtoA(dataArr);
    const createHTML = generateCards(sortResult);
    cardsContainer.innerHTML = createHTML;
  });

  document.getElementById("teamAtoZ").addEventListener("click", () => 
  {
    const sortResult = sortData.sortbyCountryAtoZ(dataArr);
    const createHTML = generateCards(sortResult);
    cardsContainer.innerHTML = createHTML;
  });

  document.getElementById("teamZtoA").addEventListener("click", () =>
  {
    const sortResult = sortData.sortbyCountryZtoA(dataArr);
    const createHTML = generateCards(sortResult);
    cardsContainer.innerHTML = createHTML;
  });

}
sortby();
//Filtrat por Team
function fteam () {
  const funcData = filterTeam(dataArr);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('Italy').addEventListener('click', ()=>
cardsContainer.innerHTML = fteam())











