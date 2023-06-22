import { filterTeam, sortData, filterGenM , filterGenF, topAthletes} from './data.js';
import data from './data/athletes/athletes.js';
import athletes from './data/athletes/athletes.js';

//llamar a los datos de Athletes
const dataArr = Object.values(data.athletes)
//Barra de busqueda
const barra = document.getElementById('barra')
//Boton buscar
const buscar = document.getElementById('buscar')
//Lo que se busque en la barra me muestre el resultado
buscar.addEventListener('click', () =>{/*
    const texto = document.getElementById('buscar').value
    const a =  generateCards(texto)
    cardsContainer.innerHTML = a;*/
})
// Extrar los datos
function generateCards (cards) {
const cardsHTML = cards.map((object) => {
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

//Filtrar por Team
function fteam (team) {
  const funcData = filterTeam(team);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('Italy').addEventListener('click', ()=>
cardsContainer.innerHTML = fteam(dataArr))

//Filtrar por Genero M
function fteamG (genem) {
  const funcData = filterGenM(genem);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('m').addEventListener('click', ()=>
cardsContainer.innerHTML = fteamG(dataArr))

//Filtrar por Genero F
function fteamGF (genef) {
  const funcData = filterGenF(genef);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('f').addEventListener('click', ()=>
cardsContainer.innerHTML = fteamGF(dataArr))








