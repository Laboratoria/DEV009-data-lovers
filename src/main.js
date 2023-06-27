//import { films } from './data.js';

import data from './data/ghibli/ghibli.js'
console.log(data);
 
  const dataContainer = document.getElementById('dataContainer');
  const films = data.films;

  function createCardCointainer(dataGhibli){
    //Borra le contenido del div dataConatiner 
    dataContainer.removeChild(dataContainer.firstChild);
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
};

createCardCointainer(films);

// Obtén una referencia al elemento select
const orderSelect = document.getElementById('orderSelect');

// Agrega el evento change al elemento select
orderSelect.addEventListener('change', function() {
  // Obtén el valor seleccionado
  const selectedOption = orderSelect.value;
  if(selectedOption === "all"){
    createCardCointainer(films);
  } else{
      // Realiza las acciones correspondientes según la opción seleccionada
    const dataSort = sortBy(films, selectedOption);
    createCardCointainer(dataSort);

  }
  
 })


  /*else if (selectedOption === 'opcion2') {
    // Acción para "Ordenar de Z - A"
    // ...
  } else if (selectedOption === 'opcion3') {

    // Acción para "Mas rankeado"
      // Ordenar los elementos por puntuación
      data.films.sort(compareByScore);

      // Limpiar el contenedor antes de agregar los elementos ordenados
      clearContainer();


      // Función de comparación para ordenar por puntuación (rt_score)
      function compareByScore(a, b) {
        // Orden ascendente (de menor a mayor)
        //return a.rt_score - b.rt_score;

        // Orden descendente (de mayor a menor)
        return b.rt_score - a.rt_score;
      }

      // Función para limpiar el contenedor
      function clearContainer() {
        while (dataContainer.firstChild) {
          dataContainer.removeChild(dataContainer.firstChild);
        }
      }
 /*   }
  });*/
