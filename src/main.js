import { sortBy } from './data.js';

import data from './data/ghibli/ghibli.js'
console.log(data);
 
const dataContainer = document.getElementById('dataContainer');
const films = data.films;

//Se declara la función createCardContainer
function createCardContainer(dataGhibli){

  //Borra le contenido del div dataConatiner 
  dataContainer.innerHTML= "";

  // Recorre el arreglo de películas y muestra los títulos en el contenedor HTML
  dataGhibli.forEach((film) => {

    const containerArticle = document.createElement('article');
    containerArticle.classList.add('data-peliculas-contenedor');
    dataContainer.appendChild(containerArticle);
      
    const filmImg = document.createElement('img');
    filmImg.src = film.poster;
    filmImg.classList.add('imagen-reducida');
    containerArticle.appendChild(filmImg);

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('data-peliculas-texto');
    containerArticle.appendChild(containerDiv);
    

    const filmTitle = document.createElement('p');
    filmTitle.textContent = film.title;
    filmTitle.classList.add('data-title')
    containerDiv.appendChild(filmTitle);

    const filmReleasedate = document.createElement('p');
    filmReleasedate.textContent = 'Año: '+ film.release_date;
    filmReleasedate.classList.add('data-year')
    containerDiv.appendChild(filmReleasedate);

    const filmDescription = document.createElement('p');
    filmDescription.textContent =film.description;
    filmDescription.classList.add('data-description')
    containerDiv.appendChild(filmDescription);

    const filmDirector = document.createElement('p');
    filmDirector.textContent = 'Director: '+ film.director;
    containerDiv.appendChild(filmDirector);

    const filmScore = document.createElement('p');
    filmScore.textContent ='Score: '+ film.rt_score;
    containerDiv.appendChild(filmScore);
  });
}

//Se manda ejecutar la funcion createCardContainer con los datos guardados dentro de la const films
createCardContainer(films);

// Obtén una referencia al elemento select
const orderSelect = document.getElementById('orderSelect');
// Agrega el evento change al elemento select
orderSelect.addEventListener('change', function() {
  // Obtén el valor seleccionado
  const selectedOption = orderSelect.value;
  if(selectedOption === "all"){
    createCardContainer(films);
  } else{
    // Realiza las acciones correspondientes según la opción seleccionada
    const dataSort = sortBy(films, selectedOption);
    createCardContainer(dataSort);

  }
  
});

