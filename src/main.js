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

      const filmImg = document.createElement('img');
      filmImg.src = film.poster;
      filmImg.classList.add('imagen-reducida');
      dataContainer.appendChild(filmImg);

      const filmTitle = document.createElement('p');
      filmTitle.style.fontWeight = 'bold';
      filmTitle.textContent = film.title;
      dataContainer.appendChild(filmTitle);

      const filmReleasedate = document.createElement('p');
      filmReleasedate.style.fontWeight = 'bold';
      filmReleasedate.textContent = 'Año: '+ film.release_date;
      dataContainer.appendChild(filmReleasedate);

      const filmDescription = document.createElement('p');
      filmDescription.textContent =film.description;
      dataContainer.appendChild(filmDescription);

      const filmDirector = document.createElement('p');
      filmDirector.textContent = 'Director: '+ film.director;
      dataContainer.appendChild(filmDirector);

      const filmPoster = document.createElement('p');
      filmPoster.textContent ='Score: '+ film.rt_score;
      dataContainer.appendChild(filmPoster);
  });
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