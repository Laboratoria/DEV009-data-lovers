import { contAmerica, contCaribe, busqueda,country } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/countries/countries.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data.countries[0].area);
//console.log(example, data);
const root =document.getElementById('root');
const allCountries = data.countries;
/**************Creacion de cartas****************/
const visualCountry =(data)=>{
   root.innerHTML="";
for (let i = 0; i< data.length; i++){
   let card = document.createElement ('div');
   card.className= 'card';
   card.id = data[i].name.common;
   card.innerHTML= ` 
      <img src=${data[i].flags.png}>
      <h2>${data[i].name.common}</h2>
      <section class="modal">
       <div class="modal_container">
        <ul class="modal_lista"></ul>
          <li name="Nombre_de_pais_ofical" id="informacion">Nombre de pais oficial:${data[i].name.official}</li>
          <li name="Capital" id="informacion">Capital:${data[i].capital}</li>
          <li name="Continente" id="informacion">Continente:</li>
          <li name="Subregion" id="informacion">Subregion:</li>
        <a href="a" class="modal_close"> Cerrar</a>
       </div> 
      </section> 
       `
       root.appendChild(card);
       /**************Seleccion de cartas****************/
       //const openModal=document.querySelector('.card')
       const modal = document.querySelector('.modal');
       const closeModal=document.querySelector('.modal_close')

       card.addEventListener('click', () => {
          modal.classList.add('.show');
          console.log("hola");

         /**cuando se llame la carta selecionada nos muestre .show */
         
      
         });
         
         /*closeModal.addEventListener('click', ()=>{
         modal.classList.remove('.show');  */
      
}
}
   visualCountry(allCountries)
/**************Busqueda por pais****************/
const input = document.getElementById('Buscar');
const bot = document.querySelector('#boton');

bot.addEventListener('click',function(){
   const valor= input.value.toLowerCase();
   const resultado = busqueda(allCountries,valor);
   visualCountry(resultado);
   console.log(resultado);
});

/*console.log(contAmerica(allCountries))*/
