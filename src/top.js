
import data from './data/athletes/athletes.js';

//llamar a los datos de Athletes
const dataArr = (data.athletes)
// Extrar los datos
/*function generateCards(cards) {
    const cardsHTML = cards.map((athlete) => {
      const { name, medals, team } = athlete;
      const medalsHTML = Object.entries(medals).map(([medal, count]) => {
        return `<p><strong>${medal}:</strong> ${count}</p>`;
      }).join('');
  
      // Verificar si el equipo existe antes de incluirlo en el HTML
      const teamHTML = team ? `<p><strong>Team:</strong> ${team}</p>` : '';
  
      return `<div class="cartilla">
        <p><strong>Name:</strong> ${name}</p>
        ${medalsHTML}
        ${teamHTML}
      </div>`;
    });
  
    return cardsHTML.join('');
  }

//Conteo de medallas por atleta
function medalCount() {
  const counter = {};

  dataArr.forEach((athlete) => {
    const nameAth = athlete.name;
    const team = athlete.team;
    const medal = athlete.medal;

    // Verificar si el atleta ya existe en el contador
    if (counter.hasOwnProperty(nameAth)) {
      // Verificar si el atleta ya tiene la medalla registrada
      if (counter[nameAth].hasOwnProperty(medal)) {
        counter[nameAth][medal] += 1; // Sumar 1 a la cuenta de medallas
      } else {
        counter[nameAth][medal] = 1; // Inicializar la cuenta de medallas en 1
      }
    } else {
      // Si el atleta no existe en el contador, crear una entrada nueva
      counter[nameAth] = {
        Gold: 0,
        Silver: 0,
        Bronze: 0,
        team,
      };
      counter[nameAth][medal] = 1; // Inicializar la cuenta de medallas en 1
    }
  });

  return counter;
}
console.log(medalCount())
//Top 10 atletas
  function top10Athletes() {
    const top10 = topAthletes(medalCount(dataArr))
    const createHTML = generateCards(top10)
    console.log("top10", top10);
    return createHTML;
  }
  const topContent = document.getElementById("topContainer");
  topContent.innerHTML = top10Athletes();
  console.log("fin", top10Athletes());*/

  //no pude agregar team sale undefined. poner diseño al boton de top 10

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
  export function recorrer(datos) {
    const duplicados = [];
  
    for (let i = 0; i < datos.length; i++) {
      const atletaActual = datos[i];
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

