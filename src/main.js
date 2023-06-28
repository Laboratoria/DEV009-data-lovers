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


