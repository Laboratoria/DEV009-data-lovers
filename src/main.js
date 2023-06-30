import { filterTeam, filterGen, filterSport, filterMedal, sortData, estadistica } from './data.js';
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
  const filteredData = dataArr.filter(atleta => atleta.name.toLowerCase().includes(searchTerm) ||
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
function generateCards(cards) {
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
document.getElementById("oldestToYoungest").addEventListener("click", () => {
  cardsContainer.innerHTML = generateCards(sortData.sortbyAge1(dataArr))
});
document.getElementById("youngestToOldest").addEventListener("click", () => {
  cardsContainer.innerHTML = generateCards(sortData.sortbyAge2(dataArr))
});
document.getElementById("athleteAtoZ").addEventListener("click", () => {
  cardsContainer.innerHTML = generateCards(sortData.sortbyNameAtoZ(dataArr))
});
document.getElementById("athleteZtoA").addEventListener("click", () => {
  cardsContainer.innerHTML = generateCards(sortData.sortbyNameZtoA(dataArr))
});
document.getElementById("teamAtoZ").addEventListener("click", () => {
  cardsContainer.innerHTML = generateCards(sortData.sortbyCountryAtoZ(dataArr))
});
document.getElementById("teamZtoA").addEventListener("click", () => {
  cardsContainer.innerHTML = generateCards(sortData.sortbyCountryZtoA(dataArr));
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
function filsports(datos, deporte) {
  const funcData = filterSport(datos, deporte);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('gymnastics').addEventListener('click', () =>
  cardsContainer.innerHTML = filsports(dataArr, 'Gymnastics')
);
document.getElementById('swimming').addEventListener('click', () =>
  cardsContainer.innerHTML = filsports(dataArr, 'Swimming')
);
document.getElementById('basketball').addEventListener('click', () =>
  cardsContainer.innerHTML = filsports(dataArr, 'Basketball')
);
document.getElementById('volleyball').addEventListener('click', () =>
  cardsContainer.innerHTML = filsports(dataArr, 'Volleyball')
);
document.getElementById('football').addEventListener('click', () =>
  cardsContainer.innerHTML = filsports(dataArr, 'Football')
);

//FILTRAR GENERO
function filgenero(datos, genero) {
  const funcData = filterGen(datos, genero);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('m').addEventListener('click', () =>
  cardsContainer.innerHTML = filgenero(dataArr, 'M')
);
document.getElementById('f').addEventListener('click', () =>
  cardsContainer.innerHTML = filgenero(dataArr, 'F')
);

//FILTRAR MEDALLA
function filtmedal(dato, medalla) {
  const funcData = filterMedal(dato, medalla);
  const createHTML = generateCards(funcData);
  return createHTML
}
document.getElementById('oro').addEventListener('click', () =>
  cardsContainer.innerHTML = filtmedal(dataArr, "Gold"))

document.getElementById('plata').addEventListener('click', () =>
  cardsContainer.innerHTML = filtmedal(dataArr, "Silver"))

document.getElementById('bronce').addEventListener('click', () =>
  cardsContainer.innerHTML = filtmedal(dataArr, "Bronze"))


//FUNCIONES TOP 10
// Extrar los datos
function newCards(datos) {
  const cardsTop = datos.map((atleta, index) => {
    const { name, team, gold, bronze, silver } = atleta;
    const imageUrl = obtenerUrlImagen(index); // Obtener la URL de la imagen según el índice de la cartilla
    return `<div class="cartilla" id="cartilla-${index}">
        <img src="${imageUrl}" alt="${name}" class="imagen-atleta">
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
    const atletaActual = datos[i];
    const name = atletaActual.name;
    const team = atletaActual.team;
    const medal = atletaActual.medal;

    const atletaExistente = duplicados.find((atleta) => atleta.name === name);

    if (atletaExistente) {
      atletaExistente.contador += 1;
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
        contador: 1,
      };
      duplicados.push(nuevoAtleta);
    }
  }
  return duplicados;
}

//Ordenar de medallas con contador
function topAthletes(datos) {
  datos.sort((a, b) => b.contador - a.contador)
  return datos.slice(0, 10)
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

document.getElementById("botontop").addEventListener("click", function () {
  showPage('paginaTop');
});
document.getElementById("casita").addEventListener("click", function () {
  showPage('paginaAthletes');
});
document.getElementById("Statistics").addEventListener("click", function () {
  showPage('paginaStatistics');
});
document.getElementById("Athletes").addEventListener("click", function () {
  showPage('paginaAthletes');
});
document.getElementById("casita2").addEventListener("click", function () {
  showPage('paginaAthletes');
});

//ESTADISTICA
function extraermedal(datos) {
  const medallas = {
    gold: 0,
    silver: 0,
    bronze: 0,
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
g.innerHTML = (gtot.goldPorcent) + "%"

const s = document.getElementById('silver%')
const stot = estadistica(extraermedal(dataArr))
s.innerHTML = (stot.silverPorcent) + "%"

const b = document.getElementById('bronze%')
const btot = estadistica(extraermedal(dataArr))
b.innerHTML = (btot.bronzePorcent) + "%"

//URLs con imagenes atletas del top 10
function obtenerUrlImagen(index) {
  const urlsImgs = [
    "https://mui.fitness/__export/1679075847873/sites/muifitness/img/2023/03/17/simone-biles-gettyimages-1332234925.jpg_264374142.jpg",
    "https://talibah4.github.io/Goggles/images/nathan-adrian-rio.png",
    "https://d2a3o6pzho379u.cloudfront.net/120449.jpg",
    "https://cdn.britannica.com/10/224310-050-C338430A/Usain-Bolt-gold-medal-4-x-100-meter-relay-Rio-de-Janeiro-Olympics-2016.jpg",
    "https://s.yimg.com/ny/api/res/1.2/uTD9wvqRDYMrI.mHx6Ya5Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkzMg--/https://media.zenfs.com/en/us_magazine_896/c9613d03275bf0289de9816b8d2472a1",
    "https://img.olympicchannel.com/images/image/private/t_1-1_300/f_auto/primary/ga3itwpv5ifebmda7wjz",
    "https://calbears.com/images/2017/9/5/Kathleen_Baker_20170901_130556_1518_CAL_Womens_Swimming_Diving_NP.jpg",
    "https://img.bekia.es/galeria/96000/96643_mireia-belmonte-garcia-mostrando-bronce-despues-compteicion-metros-juegos-olimpicos-rio.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/David_Belyavskiy_2021.jpg",
    "https://olympic.ca/wp-content/uploads/2019/06/MEAGHAN_BENFEITO.jpg?quality=100&resize=350,522",
  ];
  return urlsImgs[index];
}