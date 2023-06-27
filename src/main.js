import { contAmerica } from './data.js';
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
   const flag = document.createElement ('img');
   name.innerHTML =data.countries[i].name.common;
   flag.src =data.countries[i].flags.png;
   root.appendChild(flag);
   root.appendChild(name);
};

for (let i = 0; i< allCountries.length; i++){
const continente = document.createElement ('h3');
continente.innerHTML=data.countries[i].subregion;
root.appendChild(continente);
console.log(continente[2]);
}

console.log(contAmerica(allCountries))