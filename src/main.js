import {filterTeam,filterGen,filterSport,filterMedal,sortData,estadistica} from './data.js';
import data from './data/athletes/athletes.js';

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

//FILTRAR TEAM
//Filtrar por Team/Italy
function fteam(team, pais) {
  const funcData = filterTeam(team, pais);
  const createHTML = generateCards(funcData);
  return createHTML;
}

//Ordenar por
document.getElementById("oldestToYoungest").addEventListener("click", () => 
{ cardsContainer.innerHTML = generateCards(sortData.sortbyAge1(dataArr))
});
document.getElementById("youngestToOldest").addEventListener("click", () => 
{ cardsContainer.innerHTML = generateCards(sortData.sortbyAge2(dataArr))
});
document.getElementById("athleteAtoZ").addEventListener("click", () => 
{ cardsContainer.innerHTML = generateCards(sortData.sortbyNameAtoZ(dataArr))
});
document.getElementById("athleteZtoA").addEventListener("click", () => 
{ cardsContainer.innerHTML = generateCards(sortData.sortbyNameZtoA(dataArr))
});
document.getElementById("teamAtoZ").addEventListener("click", () => 
{ cardsContainer.innerHTML = generateCards(sortData.sortbyCountryAtoZ(dataArr))
});
document.getElementById("teamZtoA").addEventListener("click", () =>
{  cardsContainer.innerHTML = generateCards(sortData.sortbyCountryZtoA(dataArr));
}),

//FILTRAR TEAM
//Filtrar por Team/Italy
/*function fteam(team, pais) {
  const funcData = filterTeam(team, pais);
  const createHTML = generateCards(funcData);
  return createHTML;
}*/
document.getElementById('Italy').addEventListener('click', () =>
  cardsContainer.innerHTML = fteam(dataArr, 'Italy')
);
document.getElementById('United States').addEventListener('click', () =>
  cardsContainer.innerHTML = fteam(dataArr, 'United States')
);
document.getElementById('Russia').addEventListener('click', () =>
  cardsContainer.innerHTML = fteam(dataArr, 'Russia')
);
document.getElementById('France').addEventListener('click', () =>
  cardsContainer.innerHTML = fteam(dataArr, 'France')
);
document.getElementById('Colombia').addEventListener('click', () =>
  cardsContainer.innerHTML = fteam(dataArr, 'Colombia')
);

//FILTRAR DEPORTE
function filsports (datos, deporte) {
  const funcData = filterSport(datos, deporte);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('gymnastics').addEventListener('click', () =>
  cardsContainer.innerHTML = filsports(dataArr,'Gymnastics')
);
document.getElementById('swimming').addEventListener('click', () =>
  cardsContainer.innerHTML = filsports(dataArr,'Swimming')
);
document.getElementById('basketball').addEventListener('click', () =>
  cardsContainer.innerHTML = filsports(dataArr,'Basketball')
);
document.getElementById('volleyball').addEventListener('click', () =>
  cardsContainer.innerHTML = filsports(dataArr,'Volleyball')
);
document.getElementById('football').addEventListener('click', () =>
cardsContainer.innerHTML = filsports(dataArr,'Football')
);

//FILTRAR GENERO
function filgenero (datos,genero) {
  const funcData = filterGen(datos,genero);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('m').addEventListener('click', ()=>
cardsContainer.innerHTML = filgenero(dataArr,'M')
);
document.getElementById('f').addEventListener('click', ()=>
cardsContainer.innerHTML = filgenero(dataArr,'F')
);

//FILTRAR MEDALLA
function filtmedal (dato,medalla) {
  const funcData = filterMedal(dato,medalla);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('oro').addEventListener('click', ()=>
cardsContainer.innerHTML = filtmedal(dataArr,"Gold"))

document.getElementById('plata').addEventListener('click', ()=>
cardsContainer.innerHTML = filtmedal(dataArr,"Silver"))

document.getElementById('bronce').addEventListener('click', ()=>
cardsContainer.innerHTML = filtmedal(dataArr,"Bronze"))


//FUNCIONES TOP 10
// Extrar los datos
function newCards(datos) {
  const cardsTop = datos.map((atleta) => {
    const { name, team, gold, bronze, silver} = atleta;
    return `<div class="cartilla">
        <p><strong>name:</strong> ${name}</p>
        <p><strong>team:</strong> ${team}</p>
        <p><strong>gold:</strong> ${gold}</p>
        <p><strong>bronze:</strong> ${bronze}</p>
        <p><strong>silver:</strong> ${silver}</p>
    </div>`;
  })  
  
  return cardsTop.join('');
}

//Sumar medallas
function recorrer(datos) {
  const duplicados = [];
  for (let i = 0; i < datos.length; i++) {
    let atletaActual = datos[i];
    const name = atletaActual.name;
    const team = atletaActual.team;
    const medal = atletaActual.medal;

    let atletaExistente = duplicados.find((atleta) => atleta.name === name);
  
    if (atletaExistente) { atletaExistente.contador +=1;
      if (medal === 'Bronze') {
        atletaExistente.bronze += 1;
      } else if (medal === 'Silver') {
        atletaExistente.silver += 1;
      } else if (medal === 'Gold') {
        atletaExistente.gold += 1; 
      }
    } else {
      const nuevoAtleta = {
        name: name,
        team: team,
        gold: medal === 'Gold' ? 1 : 0,
        silver: medal === 'Silver' ? 1 : 0,
        bronze: medal === 'Bronze' ? 1 : 0,
        contador:1,
      };
      duplicados.push(nuevoAtleta);
    }
  }
  return duplicados;
}

//Ordenar de medallas con contador
function topAthletes (datos) {
  datos.sort((a,b) => b.contador - a.contador)
  return datos.slice(0,10)
}

//mostrar en la div de top10
const divTop = document.getElementById("topContainer")
const misCartas = newCards(topAthletes(recorrer(dataArr)))
divTop.innerHTML = misCartas


//MOSTRAR/OCULTAR PAGINAS
function showPage(pageId) {
const pages = document.getElementsByClassName('page');
   for (let i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
   }
const page = document.getElementById(pageId);
  page.classList.add('active');
}

document.getElementById("botontop").addEventListener("click", function() {
  showPage('paginaTop');
});
document.getElementById("casita").addEventListener("click", function() {
  showPage('paginaAthletes');
});
document.getElementById("Statistics").addEventListener("click", function() {
  showPage('paginaStatistics');
});
document.getElementById("Athletes").addEventListener("click", function() {
  showPage('paginaAthletes');
});
document.getElementById("casita2").addEventListener("click", function() {
  showPage('paginaAthletes');
});

//ESTADISTICA
function extraermedal(datos) {
  const medallas = {
  gold: 0,
  silver: 0,
  bronze:0,
  }
  datos.forEach((atleta) => {
    const medalla = atleta.medal;
    if (medalla === 'Gold') {
      medallas.gold++;
    } else if (medalla === 'Silver') {
      medallas.silver++;
    } else if (medalla === 'Bronze') {
      medallas.bronze++;
    }
   } 
  ); 
  return medallas;
}

//Ubicar en contenedor
const g = document.getElementById('gold%')
const gtot = estadistica(extraermedal(dataArr))
g.innerHTML = parseFloat((gtot.goldPorcent).toFixed(2)) + "%"

const s = document.getElementById('silver%')
const stot = estadistica(extraermedal(dataArr))
s.innerHTML = parseFloat((gtot.silverPorcent).toFixed(2)) + "%"

const b = document.getElementById('bronze%')
const btot = estadistica(extraermedal(dataArr))
b.innerHTML = parseFloat((gtot.bronzePorcent).toFixed(2)) + "%"