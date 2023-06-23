import {topAthletes} from './data.js';
import data from './data/athletes/athletes.js';

//llamar a los datos de Athletes
const dataArr = Object.values(data.athletes)

// Extrar los datos
function generateCards(cards) {
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
  //Top 10 atletas
  function top10Athletes() {
    const top10 = topAthletes(medalCount(dataArr))
    const createHTML = generateCards(top10)
    console.log("top10", top10);
    return createHTML;
  }
  const topContent = document.getElementById("topContainer");
  topContent.innerHTML = top10Athletes();
  console.log("fin", top10Athletes());

  //no pude agregar team sale undefined. poner diseño al boton de top 10