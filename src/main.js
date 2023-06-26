import { filterTeamIta,filterTeamUsa,filterTeamRuss,filterTeamColo,filterTeamFran, sortData, filterGenM , filterGenF,filterGold,filterSilver,filterBronze} from './data.js';
import data from './data/athletes/athletes.js';
import athletes from './data/athletes/athletes.js';

//llamar a los datos de Athletes
const dataArr = (data.athletes)
//Barra de busqueda
const barra = document.getElementById('barra')
//Boton buscar
const clear = document.getElementById('clear')

//Lo que se busque en la barra me muestre el resultado
barra.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredData = dataArr.filter(atleta => atleta.name.toLowerCase().includes(searchTerm)||
    atleta.team.toLowerCase().includes(searchTerm) || 
    atleta.sport.toLowerCase().includes(searchTerm) ||
    atleta.medal.toLowerCase().includes(searchTerm));
  const createHTML = generateCards(filteredData);
  cardsContainer.innerHTML = createHTML;
})

// Limpiar input text
clear.addEventListener('click', () => {
  return barra.value = ""
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

//FILTRAR TEAM
//Filtrar por Team/Italy
function fteam1 (team) {
  const funcData = filterTeamIta(team);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('Italy').addEventListener('click', ()=>
cardsContainer.innerHTML = fteam1(dataArr))

//Filtrar por Team/United States
function fteam2 (team) {
  const funcData = filterTeamUsa(team);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('United States').addEventListener('click', ()=>
cardsContainer.innerHTML = fteam2(dataArr))

//Filtrar por Team/Russia
function fteam3 (team) {
  const funcData = filterTeamRuss(team);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('Russia').addEventListener('click', ()=>
cardsContainer.innerHTML = fteam3(dataArr))

//Filtrar por Team/France
function fteam4 (team) {
  const funcData = filterTeamFran(team);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('France').addEventListener('click', ()=>
cardsContainer.innerHTML = fteam4(dataArr))

//Filtrar por Team/Colombia
function fteam5 (team) {
  const funcData = filterTeamColo(team);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('Colombia').addEventListener('click', ()=>
cardsContainer.innerHTML = fteam5(dataArr))

//FILTRAR GENERO
//Filtrar por Genero M
function genM (genem) {
  const funcData = filterGenM(genem);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('m').addEventListener('click', ()=>
cardsContainer.innerHTML = genM(dataArr))

//Filtrar por Genero F
function genF (genef) {
  const funcData = filterGenF(genef);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('f').addEventListener('click', ()=>
cardsContainer.innerHTML = genF (dataArr))

//FILTRAR MEDALLA
//Filtrar por ORO
function medoro (medalo) {
  const funcData = filterGold(medalo);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('oro').addEventListener('click', ()=>
cardsContainer.innerHTML = medoro(dataArr))

//Filtrar por PLATA
function medplata (medalp) {
  const funcData = filterSilver(medalp);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('plata').addEventListener('click', ()=>
cardsContainer.innerHTML = medplata(dataArr))

//Filtrar por BRONZE
function medbronze (medalb) {
  const funcData = filterBronze(medalb);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('bronce').addEventListener('click', ()=>
cardsContainer.innerHTML = medbronze(dataArr))




