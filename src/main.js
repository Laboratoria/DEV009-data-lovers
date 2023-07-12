
import { contAmerica,contAsia,contAfrica,contEurope,contOceania,contAntarctica,busqueda,} from './data.js';
import countries from './data/countries/countries.js';

// import data from './data/lol/lol.js';
import data from './data/countries/countries.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
const root =document.getElementById('root');
const dataCountries = data.countries;
/**************Creacion de cartas****************/
const showCards =(data)=>{
  root.innerHTML="";
  for (let i = 0; i< data.length; i++){
    const card = document.createElement ('div');
    card.className= 'card';
    card.id = data[i].name.common;
    card.innerHTML= ` 
    <img src=${data[i].flags.png}>
    <h2>${data[i].name.common}</h2>
    `
    root.appendChild(card);
    /**********Seleccion de cartas para Modal********/
    card.addEventListener('click', (e) => {
      e.preventDefault();         
      showModal(data[i])        
    });  
  }
}
showCards(dataCountries)
/**************Busqueda por pais****************/
const input = document.getElementById('Buscar');
const searchButton = document.querySelector('#boton');

searchButton.addEventListener('click',function(){
  const valor= input.value.toLowerCase();
  const resultado = busqueda(dataCountries,valor);

  showCards(resultado);
});
/**********Creacion de ventana Modal****************/
const showModal = (dataCountry) => {

   let modal = document.createElement("div")
   modal.innerHTML = `
   <section class="modal">
   <div class="modal_container">
   <ul class="modal_lista"></ul>
   <a href="a" class="modal_close_button"> Cerrar</a>
   <h2>${dataCountry.name.common}</h2>
   <img src=${dataCountry.flags.png}>
   <li name="Nombre_de_pais_oficial" id="informacion">Nombre de pais oficial:${dataCountry.name.official}</li>
   <li name="Capital" id="informacion">Capital:${dataCountry.capital}</li>
   <li name="Continente" id="informacion">Continente:${dataCountry.continents}</li>
   <li name="Subregion" id="informacion">Subregion:${dataCountry.subregion}</li>
   <li name="Idioma" id="informacion">Idioma:${dataCountry.languages.value}</li>
   <li name="Poblacion_total"id="informacion">Población total:${dataCountry.population}</li>
   <li name="Area_total"id="informacion">Area total:${dataCountry.area}</li>   
   </div> 
   </section> 
   `
   root.appendChild(modal)
   console.log(dataCountry.name.common)

  const modal = document.createElement("div")
  modal.innerHTML = `
  <section class="modal">
  <div class="modal_container">
  <ul class="modal_lista"></ul>
  <a href="a" class="modal_close_button"> Cerrar</a>
  <img src=${dataCountry.flags.png}>
  <li name="Nombre_de_pais" id="informacion">${dataCountry.name.common}</li>
  <li name="Nombre_de_pais_oficial" id="informacion">Nombre de pais oficial:${dataCountry.name.official}</li>
  <li name="Capital" id="informacion">Capital:${dataCountry.capital}</li>
  <li name="Continente" id="informacion">Continente:${dataCountry.continents}</li>
  <li name="Subregion" id="informacion">Subregion:${dataCountry.subregion}</li>
  <li name="Idioma" id="informacion">Idioma:${dataCountry.languages}</li>
  <li name="Codigo_fifa" id="informacion">Código FIFA :${dataCountry.fifa}</li>
  <li name="Paises_limitantes">Paises limitantes:${dataCountry.borders}</li>
  <li name="Poblacion_total">Población total:${dataCountry.population}</li>
  <li name="Area_total">Area total:${dataCountry.area}</li>
  <li name="Top_level_domain">Top Level Domain:${dataCountry.tld}</li>
  <li name="Pais_independizado">Pais independizado:${dataCountry.independent}</li>
  </div> 
  </section> 
  `
  root.appendChild(modal)


  const closeModalButton = document.querySelector('.modal_close_button');
  closeModalButton.addEventListener('click', (e) => {
    e.preventDefault();         
    modal.remove();       
  });
}
/****Filtrado por continetes****/

const menuItems = document.querySelectorAll('.menu__item');
menuItems.forEach(function(item){
  item.addEventListener('click', function(event){
    if (item.classList.contains('.submenus')){
      event.stopPropagation();
    }
     
   if (item.textContent==="America"){
      showCards(contAmerica (dataCountries));
   }
    else if(item.textContent==="Asia"){
      showCards(contAsia (dataCountries));
   }
    else if(item.textContent==="Europa"){
      showCards(contEurope (dataCountries));
   }
   else if(item.textContent==="Africa"){
      showCards(contAfrica (dataCountries));
   }
    else if(item.textContent==="Oceania"){
      showCards(contOceania (dataCountries));
   }
    else if (item.textContent==="Antartica"){
      showCards(contAntarctica (dataCountries));
   }
      
    console.log('Haz click en', item.textContent);
  });
});
;
