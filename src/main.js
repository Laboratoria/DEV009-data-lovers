//en este archivo se importar data y funciones desde diferentes archivos. También se hacen impresiones en la cónsola
//se importa un objeto que llamaremos data desde el archivo './data/ghibli/ghibli.js' - el objeto tiene una exportación default
import data from './data/ghibli/ghibli.js';

import { orderByAlphabetical } from './data.js';

//Método map() y flatMap() son funciones de los arreglos en JS que ITERAN sobre cada elemento del arreglo y crea un nuevo arreglo

//______PERSONAJES ORDENADOS ALFABÉTICAMENTE
const people = data.films.flatMap(film => film.people.map(person => ({
  name: person.name,
  image: person.img
})));
//people.sort((a, b) => a.name.localeCompare(b.name));
const peopleOrdered = orderByAlphabetical (people);
console.log("estoy ordenando personas",peopleOrdered);
console.log("estoy mostrando la data", data, data.films, people);

//HTML de la lista de personas
const peopleList = document.getElementById('people-list');
//peopleList.innerHTML = ''; // Limpiar el contenido de la lista de personas

//Recorrer el arreglo ordenado y crear elementos HTML para cada persona
people.forEach(person => {
  const personItem = document.createElement('div');
  const personImage = document.createElement('img');
  const personName = document.createElement('p');

  personImage.src = person.image;
  personName.textContent = person.name;

  personItem.appendChild(personImage);
  personItem.appendChild(personName);
  peopleList.appendChild(personItem);
});

//______CLICK PERSONAJES ORDENADOS ALFABÉTICAMENTE
const ordenAlfabeticoPeopleLink = document.getElementById('orden-alfabetico-people');

ordenAlfabeticoPeopleLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el enlace realice la acción predeterminada

  if (filmsList.style.display === 'grid') {
    filmsList.style.display = 'none';
  }

  if (peopleList.style.display === 'none') {
    peopleList.style.display = 'grid';
    filmsDateList.style.display = 'none'; // Oculta filmsDateList

  } else {
    peopleList.style.display = 'none';
  }
});

//______PELÍCULAS ORDENADAS ALFABÉTICAMENTE

const films = data.films.flatMap(film => ({
  title: film.title,
  poster: film.poster
}));

films.sort((a, b) => a.title.localeCompare(b.title));
console.log("estoy ordenando películas", films);

const filmsList = document.getElementById('films-list');
//filmsList.innerHTML = '';

films.forEach(film => {
  const titleItem = document.createElement('div');
  const titleImage = document.createElement('img');
  const titleName = document.createElement('p');

  titleImage.src = film.poster;
  titleName.textContent = film.title;

  titleItem.appendChild(titleImage);
  titleItem.appendChild(titleName);
  filmsList.appendChild(titleItem);
});

//______CLICK PELÍCULAS ORDENADAS ALFABÉTICAMENTE
const ordenAlfabeticoFilmsLink = document.getElementById('orden-alfabetico-films');

ordenAlfabeticoFilmsLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el enlace realice la acción predeterminada

  if (peopleList.style.display === 'grid') {
    peopleList.style.display = 'none';
  }

  if (filmsList.style.display === 'none') {
    filmsList.style.display = 'grid';
    filmsDateList.style.display = 'none'; // Oculta filmsDateList
  } else {
    filmsList.style.display = 'none';
  }
});


//______PELÍCULAS ORDENADAS POR AÑO ('release_date')

const filmsDate = data.films.flatMap(film => ({
  title: film.title,
  poster: film.poster,  
  release_date: film.release_date
}));

filmsDate.sort((a, b) => a.release_date.localeCompare(b.release_date));
console.log("estoy ordenando películas por año", filmsDate);

const filmsDateList = document.getElementById('films-list-year');
//filmsList.innerHTML = '';

filmsDate.forEach(film => {
  const dateItem = document.createElement('div');
  const dateImage = document.createElement('img');
  const dateName = document.createElement('p');
  const dateYear = document.createElement('p');

  dateImage.src = film.poster;
  dateName.textContent = film.title;
  dateYear.textContent = film.release_date;

  dateItem.appendChild(dateImage);
  dateItem.appendChild(dateName);
  dateItem.appendChild(dateYear);
  filmsDateList.appendChild(dateItem);
});

//______CLICK PELÍCULAS ORDENADAS POR AÑO ('release_date')
const ordenDateFilmsLink = document.getElementById('orden-date-films');

ordenDateFilmsLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el enlace realice la acción predeterminada

  if (filmsList.style.display === 'grid') {
    filmsList.style.display = 'none';
  }

  if (filmsDateList.style.display === 'none') {
    filmsDateList.style.display = 'grid';
  } else {
    filmsDateList.style.display = 'none';
  }
});