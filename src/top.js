
import data from './data/athletes/athletes.js';

//llamar a los datos de Athletes
const dataArr = (data.athletes)
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

