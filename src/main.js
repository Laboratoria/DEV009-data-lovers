import { contAmerica, contCaribe } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/countries/countries.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data.countries[0].area);
//console.log(example, data);
const root =document.getElementById('root');
const allCountries = data.countries;
//root.innerHTML=`<h1>${data.countries[0].name.common}</h1>`;
//const capital=document.createElement('h2');
//capital.innerText=data.countries[0].capital;
//const continente=document.createElement('h2');
//continente.innerText=data.countries[0].subregion;

//root.appendChild(capital);
//root.appendChild(continente);
for (let i = 0; i< allCountries.length; i++){
   const name = document.createElement ('h2');
   const capital = document.createElement('h2');
   const continente = document.createElement ('h3');
   const imgFlags = document.createElement('img');
   name.innerHTML=data.countries[i].name.common;
   capital.innerHTML =data.countries[i].capital;
   continente.innerHTML=data.countries[i].subregion;
   imgFlags.src = data.countries[i].flags.png;
   root.appendChild(name);
   root.appendChild(capital);
   root.appendChild(continente);
   root.appendChild(imgFlags);
    
};


console.log(contAmerica(allCountries))
