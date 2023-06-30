import { contAmerica, contCaribe } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/countries/countries.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data.countries[0].area);
//console.log(example, data);
const root =document.getElementById('root');
const allCountries = data.countries;
//Creacion de cards
for (let i = 0; i< allCountries.length; i++){
   let card = document.createElement ('div');
   card.className= 'card';
   card.innerHTML= ` 
      <img src=${allCountries[i].flags.png}>
      <h2>${allCountries[i].name.common}</h2>
     `
   root.appendChild(card);
};


console.log(contAmerica(allCountries))

const textArea= document.getElementById("#Buscar");
const boton = document.querySelector("#boton");

const busqueda = () =>{
 //console.log(textArea.value);
const valor = textArea.value.toLowerCase();
for (let countrie of allCountries){
   let name = countrie.name.common.toLowerCase();
   if (name.indexOf() !== -1){
   console.log (name)
   }
 }
}

boton.addEventListener('click', busqueda)