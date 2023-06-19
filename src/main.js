import { example } from './data.js';
import data from './data/athletes/athletes.js';
import { sortData } from './data.js';

//llamar a los datos de Athletes
const datos = data.athletes
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
const cartillasHTML = datos.map((objeto) => {
    const propiedadesHTML = Object.entries(objeto).map(([clave, valor]) => {
      return `<p><strong>${clave}:</strong> ${valor}</p>`;
    }).join('');
    return `<div class="cartilla">${propiedadesHTML}</div>`;
  });
  const cartillasContainer = document.getElementById('cartillaContenedor');
    cartillasContainer.innerHTML = cartillasHTML.join('');

//Ordenar por
function sortby(){
  document.getElementById("athleteAtoZ").addEventListener("click", () => {
    sortData.sortbyAge1(data.athletes);
    // Aquí puedes realizar la lógica para mostrar los atletas ordenados
    console.log(data.athletes);
  });
}
sortby();













console.log(example, data);
