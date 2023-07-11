import { sortBy, filterByDirector, filterByYear, getCount, getPercentage} from './data.js';

import data from './data/ghibli/ghibli.js'
const normalizeString = (string) => {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const films = data.films.map((film) => ({
  ...film,
  director: normalizeString(film.director),
  // Normaliza otros valores si es necesario
}));
//console.log(films);

//Se manda llamar el div en donde se van a crear las tarjetas
const dataContainer = document.getElementById('dataContainer');
//Guarda la información del la base de datps
//const films = data.films;


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

const orderSelect = document.getElementById('orderSelect');
const filterSelect = document.getElementById('filterSelect');
const yearFilterSelect = document.getElementById('yearFilterSelect');
const addValue = document.getElementById('addValue');
const addPercentage = document.getElementById('addPercentage')



function handleSelection() {
  const selectedOption = orderSelect.value;
  const selectedOptionDirector = filterSelect.value;
  const selectedOptionYear = yearFilterSelect.value;

  let copyFilmsData = films.slice()

  if(selectedOptionDirector !== 'all'){
    copyFilmsData = filterByDirector(copyFilmsData, selectedOptionDirector);
  }

  if(selectedOptionYear !== 'all'){
    copyFilmsData = filterByYear(copyFilmsData, selectedOptionYear);
  }

  if(selectedOption !== 'all'){
    copyFilmsData = sortBy(copyFilmsData, selectedOption);
  }

  dataContainer.innerHTML = "";
  createCardContainer(copyFilmsData)

  const count = getCount(copyFilmsData, selectedOptionDirector, selectedOptionYear);
  addValue.innerHTML = "Results: " + count + ",";

  const resultPercentage = getPercentage (films.length, count);

  addPercentage.innerHTML = "Overall Percentage " + resultPercentage.toFixed(2) + "%";

}


orderSelect.addEventListener('change', handleSelection);
filterSelect.addEventListener('change', handleSelection);
yearFilterSelect.addEventListener('change', handleSelection);

//Responsive
const menuIcon = document.querySelector('.menu-icon');
const filters = document.querySelector('.filters');
let isFiltersVisible = false;

menuIcon.addEventListener('click', () => {
  if (isFiltersVisible) {
    filters.style.display = 'none';
    isFiltersVisible = false;
  } else {
    filters.style.display = 'block';
    isFiltersVisible = true;
  }
});






