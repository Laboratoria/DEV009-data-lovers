import { example } from './data.js';
import data from './data/athletes/athletes.js';

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
//Extraer solo nombres
//const nombres = datos.map((elemento) => `<li>${elemento}</li>`)
const cartillasHTML = datos.map((objeto) => {
    const propiedadesHTML = Object.entries(objeto).map(([clave, valor]) => {
      return `<p><strong>${clave}:</strong> ${valor}</p>`;
    }).join('');
    return `<div class="cartilla">${propiedadesHTML}</div>`;
  });

  const cartillasContainer = document.getElementById('cartillaContenedor');
    cartillasContainer.innerHTML = cartillasHTML.join('');





//const filtro= document.getElementById('filtro')
//const lasa = document.querySelectorAll('a')
//filtro.addEventListener('click', ()=>{
 //   lasa[0]=example.paisAtlethes(informacion)
//})













console.log(example, data);
