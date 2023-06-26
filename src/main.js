//import { films } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from './data/ghibli/ghibli.js'
console.log(data);

//A que se refiere el parametro event? 
window.addEventListener('DOMContentLoaded', (event) => {
  const dataContainer = document.getElementById('dataContainer');
  const imgContainer = document.getElementById('imagenContainer');
  const films = data.films;

  // Recorre el arreglo de películas y muestra los títulos en el contenedor HTML
    films.forEach((film) => {

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
});
const orderSelect = document.getElementById('orderSelect');

// Agrega el evento change al elemento select
orderSelect.addEventListener('change', function() {
  // Obtén el valor seleccionado
  const selectedOption = orderSelect.value;

  // Realiza las acciones correspondientes según la opción seleccionada
  if (selectedOption === 'opcion1') {
    // Acción para "Ordenar de A - Z"
    // ...
  } else if (selectedOption === 'opcion2') {
    // Acción para "Ordenar de Z - A"
    // ...
  } else if (selectedOption === 'opcion3') {
    films.sort(compareByScoreDescending);

    // Limpiar el contenedor antes de agregar los elementos ordenados
    clearContainer();

    // Recorrer los objetos "films" ordenados y crear los elementos HTML
    for (let i = 0; i < films.length; i++) {
      const film = film[i];

      const filmScore = document.createElement('p');
      filmScore.textContent ='Score: '+ film.rt_score;
      containerDiv.appendChild(filmScore);
    }
  }
});




/*
window.addEventListener('DOMContentLoaded', (event) => {
  const dataContainer = document.getElementById('imagenContainer');
  const films = data.films;
  const imageSize = '200px'
  // Recorre el arreglo de películas y muestra los títulos en el contenedor HTML
  films.forEach((film) => {
    // Obtén el contenedor de la imagen

    // Crea un elemento <img>
    const imagen = document.createElement('img');

    // Establece la URL de la imagen en el atributo src
    imagen.src = film.poster;
        // Agrega la clase CSS a la imagen
    imagen.classList.add('imagen-reducida');

    // Agrega la imagen al contenedor
    imagenContainer.appendChild(imagen);
  });
}); */