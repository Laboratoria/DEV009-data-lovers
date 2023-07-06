import { contAmerica, contCaribe, busqueda,country } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/countries/countries.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data.countries[0].area);
//console.log(example, data);
const root =document.getElementById('root');
const allCountries = data.countries;
/**************Creacion de cartas****************/
for (let i = 0; i< allCountries.length; i++){
   let card = document.createElement ('div');
   card.className= 'card';
   card.id = allCountries[i].name.common;
   card.innerHTML= ` 
      <img src=${allCountries[i].flags.png}>
      <h2>${allCountries[i].name.common}</h2>
     `
   root.appendChild(card);
   /**************Seleccion de cartas****************/
   card.addEventListener('click', function() {
      const id = card.id;
      console.log(country(allCountries,id));
   });
}
/**************Busqueda por pais****************/
const input = document.getElementById('Buscar');
const bot = document.querySelector('#boton');

bot.addEventListener('click',function(){
   const valor= input.value.toLowerCase();
   const resultado = busqueda(allCountries,valor);
   
   //console.log(resultado);
   /**************Creacion de cartas por filtro****************/
for (let i = 0; i< resultado.length; i++){
   let card = document.createElement ('div');
   card.className= 'card';
   card.id = resultado[i].name.common;
   card.innerHTML= ` 
      <img src=${resultado[i].flags.png}>
      <h2>${resultado[i].name.common}</h2>
     `
      root.appendChild(card);
   /**************Seleccion de cartas por filtro****************/
   card.addEventListener('click', function() {
      const id = card.id;
      console.log(country(allCountries,id));
   });
}
});







 
/*console.log(contAmerica(allCountries))*/

/*******Pop-up ******/
const openModal= document.querySelector('.card');
const modal=document.querySelector('.modal');
const closeModal=document.querySelector('.modal_close')

openModal.addEventListener('click', (e)=>{
   e.preventDefault();
  modal.classList.add('modal--show');
});
closeModal.addEventListener('click', (e)=>{
   e.preventDefault();
  modal.classList.remove('modal--show');
});