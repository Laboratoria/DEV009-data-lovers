import { GetCountriesByContinent, busqueda, orderAZ, orderZA} from './data.js';
import data from './data/countries/countries.js';

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

  if (resultado.length === 0 || valor.length === 0){
    alert('Pais no encontrado')
  } else{
    showCards(resultado);
  }
});
/**********Creacion de ventana Modal****************/
const showModal = (dataCountry) => {
  const modal = document.createElement("div")
  modal.innerHTML = `
  <section class="modal">
  <div class="modal_container">
  <ul class="modal_lista"></ul>
  <a href="a" class="modal_close_button"> Cerrar</a>
  <img src=${dataCountry.flags.png}>
  <h2 name="Nombre_de_pais" id="informacion">${dataCountry.name.common}</h2>
  <li name="Nombre_de_pais_oficial" id="informacion">Nombre de pais oficial: ${dataCountry.name.official}</li>
  <li name="Capital" id="informacion">Capital: ${dataCountry.capital}</li>
  <li name="Continente" id="informacion">Continente: ${dataCountry.continents}</li>
  <li name="Subregion" id="informacion">Subregion: ${dataCountry.subregion}</li>
  <li name="Idioma" id="informacion">Idioma: ${dataCountry.languages.spa}</li>
  <li name="Paises_limitantes">Paises limitantes: ${dataCountry.borders}</li>
  <li name="Poblacion_total">Población total: ${dataCountry.population}</li>
  <li name="Area_total">Area total: ${dataCountry.area}</li>
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

/****Filtrado por continentes****/
let countriesContinent = [];
const selectContinent = document.getElementById('continent-select');

selectContinent.addEventListener('change', function() {
  const selectedContinent = selectContinent.value;
  countriesContinent = GetCountriesByContinent(dataCountries, selectedContinent);
  showCards(countriesContinent); 
  const selectOrder = document.getElementById('order-select');
  selectOrder.selectedIndex = 0;
});


const selectOrder = document.getElementById('order-select');

selectOrder.addEventListener('change', function() {
  const selectedOrder = selectOrder.value;
  if(selectedOrder === 'a-z'){
    showCards(orderAZ(countriesContinent)); 
  }
  else{
    showCards(orderZA(countriesContinent));
  }
});

  
/***Funcionalidad al boton Inicio */
const inicio =document.getElementById('Inicio');
inicio.addEventListener("click",function(){
  showCards(dataCountries);
});

/**Calculo agregado */
/*function computerStart (data)*/
/*const contAmerica = GetCountriesByContinent (dataCountries,"America");
const contEurope = GetCountriesByContinent (dataCountries,"Europe");
const contAsia = GetCountriesByContinent (dataCountries,"Asia");
const contOceania = GetCountriesByContinent (dataCountries,"Oceania");
const contAfrica = GetCountriesByContinent (dataCountries,"Africa");
const contAntarctica = GetCountriesByContinent (dataCountries,"Antarctica");

const TotalAreasContinent = dataCountries.reduce((total,country)=> total +(country.area ||0), 0);
/*const TotalAreaAmerica = contAmerica .reduce((total,country)=> total +(country.area ||0), 0);
const TotalAreaEurope = contEurope .reduce((total,country)=> total +(country.area ||0), 0);
const TotalAreaAsia= contAsia .reduce((total,country)=> total +(country.area ||0), 0);
const TotalAreaOceania = contOceania .reduce((total,country)=> total +(country.area ||0), 0);
const TotalAreaAfrica = contAfrica .reduce((total,country)=> total +(country.area ||0), 0);
const TotalAreaAntarctica = contAntarctica .reduce((total,country)=> total +(country.area ||0), 0);

console.log(TotalAreasContinent);

/*const sumaTotalAreas = computerStart(dataCountries);
console.log(dataCountries.area);*/