//en este archivo se importar data y funciones desde diferentes archivos. También se hacen impresiones en la cónsola
//se importa un objeto que llamaremos data desde el archivo './data/ghibli/ghibli.js' - el objeto tiene una exportación default
import data from './data/ghibli/ghibli.js';

import { orderByAlphabetical, prom } from './data.js';

//Método map() y flatMap() son funciones de los arreglos en JS que ITERAN sobre cada elemento del arreglo y crea un nuevo arreglo

//______PERSONAJES ORDENADOS ALFABÉTICAMENTE
const people = data.films.flatMap(film => film.people.map(people => ({
  name: people.name,
  image: people.img,
  title: film.title
})));
//people.sort((a, b) => a.name.localeCompare(b.name));
const peopleOrdered = orderByAlphabetical (people);
console.log("estoy ordenando personas",peopleOrdered);
console.log("estoy mostrando la data", data, data.films, people);

//HTML de la lista de personas
const peopleList = document.getElementById('people-list');
//const contenedorList = document.getElementById('contenedor');
//peopleList.innerHTML = ''; // Limpiar el contenido de la lista de personas

//Recorrer el arreglo ordenado y crear elementos HTML para cada persona
people.forEach(people => {
  const peopleItem = document.createElement('div');
  const peopleImage = document.createElement('img');
  const peopleName = document.createElement('p');

  peopleImage.src = people.image;
  peopleName.textContent = people.name;

  peopleItem.appendChild(peopleImage);
  peopleItem.appendChild(peopleName);
  peopleList.appendChild(peopleItem);
});

//______CLICK PERSONAJES ORDENADOS ALFABÉTICAMENTE
const ordenAlfabeticoPeopleLink = document.getElementById('orden-alfabetico-people');

ordenAlfabeticoPeopleLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el enlace realice la acción predeterminada

  // if para el caso de que no se haya interactuado aún en la página y para el caso en el que haya interactuado érp peoplelist display=none
  if (peopleList.style.display === '' || peopleList.style.display === 'none') { 
    peopleList.style.display = 'grid'; // Muestra peopleList
    filmsDateList.style.display = 'none'; // Oculta filmsDateList
    filmsList.style.display = 'none'; // Oculta filmsList
    peopleFilmList.style.display = 'none';
    filmsListDirector.style.display = 'none';
    peopleListAge.style.display = 'none';
    filmsListSpecie.style.display = 'none';
  } 
});

//______PELÍCULAS ORDENADAS ALFABÉTICAMENTE

/*const films = data.films.flatMap(film => ({
  title: film.title,
  poster: film.poster
}));*/

const films = data.films.filter(film => film.title);

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

  if (filmsList.style.display === '' || filmsList.style.display === 'none') {
    filmsList.style.display = 'grid';
    filmsDateList.style.display = 'none'; // Oculta filmsDateList
    peopleList.style.display = 'none'; // Oculta peopleList
    peopleFilmList.style.display = 'none';
    filmsListDirector.style.display = 'none';
    peopleListAge.style.display = 'none';
    filmsListSpecie.style.display = 'none';
  }
});


//______PELÍCULAS ORDENADAS POR AÑO ('release_date')

/*const filmsDate = data.films.flatMap(film => ({
  title: film.title,
  poster: film.poster,  
  release_date: film.release_date
}));*/

const filmsDate = data.films.filter(film => film.release_date);

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

  if (filmsDateList.style.display === '' || filmsDateList.style.display === 'none') {
    filmsDateList.style.display = 'grid';
    filmsList.style.display = 'none'; // Oculta filmsList
    peopleList.style.display = 'none'; // Oculta peopleList
    peopleFilmList.style.display = 'none';
    filmsListDirector.style.display = 'none';
    peopleListAge.style.display = 'none';
    filmsListSpecie.style.display = 'none';
  }
});

//______PERSONAJES ORDENADOS POR PELÍCULA ('people' y 'film')

const peopleFilm = data.films.flatMap(film =>
  film.people.map(people => ({
    name: people.name,
    image: people.img,
    film: film.title
  })));

/*const peopleFilm = [];
data.films.forEach(film => {
  film.people.filter(people => people.name).forEach(({ name }) => peopleFilm.push({ name, film: film.title }));
});*/

peopleFilm.sort((a, b) => a.film.localeCompare(b.film));
console.log("Estoy clasificando personajes por película", peopleFilm);

const peopleFilmList = document.getElementById('people-list-film');

// Recorrer el arreglo ordenado y crear elementos HTML para cada personaje
peopleFilm.forEach(people => {
  const peopleItem = document.createElement('div');
  const peopleImage = document.createElement('img');
  const peopleName = document.createElement('p');
  const peopleFilm = document.createElement('p');

  peopleImage.src = people.image;
  peopleName.textContent = people.name;
  peopleFilm.textContent = people.film;

  peopleItem.appendChild(peopleImage);
  peopleItem.appendChild(peopleName);
  peopleItem.appendChild(peopleFilm);
  peopleFilmList.appendChild(peopleItem);
});

//______CLICK PERSONAJES ORDENADOS POR PELÍCULA ('people' y 'film')
const ordenPeopleFilmsLink = document.getElementById('orden-people-films');

//const ordenPeopleFilmsName = document.getElementById('name-films');

ordenPeopleFilmsLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el enlace realice la acción predeterminada

  if (peopleFilmList.style.display === '' || peopleFilmList.style.display === 'none') {
    peopleFilmList.style.display = 'grid';
    filmsDateList.style.display = 'none';
    filmsList.style.display = 'none'; // Oculta filmsList
    peopleList.style.display = 'none'; // Oculta peopleList
    filmsListDirector.style.display = 'none';
    peopleListAge.style.display = 'none';
    filmsListSpecie.style.display = 'none';

  }
});

//______PELÍCULAS ORDENADAS POR DIRECTOR ('director')
/*const filmsDirector = data.films.flatMap(film => ({
  title: film.title,
  poster: film.poster,  
  director: film.director
}));*/

const filmsDirector = data.films.filter(film => film.director);

const filmsListDirector = document.getElementById('films-list-director')

filmsDirector.sort((a, b) => a.director.localeCompare(b.director));
console.log("estoy ordenando películas por director", filmsDirector);

filmsDirector.forEach(film => {
  const directorItem = document.createElement('div');
  const directorImage = document.createElement('img');
  const directorName = document.createElement('p');
  const directorDirector = document.createElement('p');

  directorImage.src = film.poster;
  directorName.textContent = film.title;
  directorDirector.textContent = film.director;

  directorItem.appendChild(directorImage);
  directorItem.appendChild(directorName);
  directorItem.appendChild(directorDirector);
  filmsListDirector.appendChild(directorItem);
  
});

//______CLICK PELÍCULAS ORDENADAS POR DIRECTOR ('director')

const ordenDirectorFilmsLink = document.getElementById('orden-director-films');

ordenDirectorFilmsLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el enlace realice la acción predeterminada

  if (filmsListDirector.style.display === '' || filmsListDirector.style.display === 'none') {
    filmsListDirector.style.display = 'grid';
    filmsDateList.style.display = 'none';
    filmsList.style.display = 'none'; // Oculta filmsList
    peopleList.style.display = 'none'; // Oculta peopleList
    peopleFilmList.style.display = 'none';
    peopleListAge.style.display = 'none';
    filmsListSpecie.style.display = 'none';

  }
});

//______PERSONAJES ORDENADOS POR GRUPO ETARIO ('age')
/*const agePeople = data.films.flatMap(film =>
  film.people.map(people => ({
  name: people.name,
  image: people.img,
  age: parseInt(people.age, 10)
})).filter(person => Number(person.age))
);*/

const agePeople = [];
data.films.forEach(film => {
  film.people.filter(people => Number(people.age)).forEach(people => agePeople.push(people));
});

const peopleListAge = document.getElementById('people-list-age')

agePeople.sort((a, b) => {
  if (a.age && b.age) {
    const ageA = parseInt(a.age);
    const ageB = parseInt(b.age);

    return ageA - ageB;
  }
  return 0;
});
  
console.log("estoy ordenando personajes por edad", agePeople);

agePeople.forEach(people => {
  const peopleItem = document.createElement('div');
  const peopleImage = document.createElement('img');
  const peopleName = document.createElement('p');
  const peopleAge = document.createElement('p');

  peopleImage.src = people.img;
  peopleName.textContent = people.name;
  peopleAge.textContent = people.age;

  peopleItem.appendChild(peopleImage);
  peopleItem.appendChild(peopleName);
  peopleItem.appendChild(peopleAge);
  peopleListAge.appendChild(peopleItem);
});

//______CLICK PERSONAJES ORDENADOS POR GRUPO ETARIO ('age')

const ordenPeopleAgeLink = document.getElementById('orden-people-age');

ordenPeopleAgeLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el enlace realice la acción predeterminada

  if (peopleListAge.style.display === '' || peopleListAge.style.display === 'none') {
    peopleListAge.style.display = 'grid';
    filmsDateList.style.display = 'none';
    filmsList.style.display = 'none'; // Oculta filmsList
    peopleList.style.display = 'none'; // Oculta peopleList
    filmsListDirector.style.display = 'none';
    peopleFilmList.style.display = 'none';
    filmsListSpecie.style.display = 'none';

  }
});

//______PERSONAJES POR ESPECIE

const peopleSpecie = data.films.flatMap(film =>
    film.people.map(people => ({
    name: people.name,
    image: people.img,
    specie: people.specie
  }))
);

const filmsListSpecie = document.getElementById("people-specie")

peopleSpecie.sort((a, b) => a.specie.localeCompare(b.specie));
console.log("Estoy ordenando por especie", peopleSpecie);

peopleSpecie.forEach(specie => {
  const specieItem = document.createElement('div');
  const specieImage = document.createElement('img');
  const specieName = document.createElement('p');
  const specieSpecie = document.createElement('p');

  specieImage.src = specie.image;
  specieName.textContent = specie.name;
  specieSpecie.textContent = specie.specie;

  specieItem.appendChild(specieImage);
  specieItem.appendChild(specieName);
  specieItem.appendChild(specieSpecie);
  filmsListSpecie.appendChild(specieItem);
});

//______CLICK PERSONAJES POR ESPECIE ('specie')

const ordenSpecieFilmsLink = document.getElementById('people-specie-prom');

ordenSpecieFilmsLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el enlace realice la acción predeterminada

  if (filmsListSpecie.style.display === '' || filmsListSpecie.style.display === 'none') {
    filmsListSpecie.style.display = 'grid';
    filmsDateList.style.display = 'none';
    filmsList.style.display = 'none'; // Oculta filmsList
    peopleList.style.display = 'none'; // Oculta peopleList
    filmsListDirector.style.display = 'none'; // Oculta peliculas por director
    peopleListAge.style.display = 'none';
    peopleFilmList.style.display = 'none';

  }
});


// SCORE PROMEDIO EN ROTTEN TOMATOES ('rt_score')

const rtScore = data.films.flatMap(films => ({
  score: films.rt_score
}));

prom(rtScore);

console.log("Estoy mostrando el promedio en rotten tomatoes", prom(rtScore));



//______VEHÍCULOS
/*const vehiclesS = data.films.flatMap(film =>
  film.vehicles.map(vehicles => ({
    name: vehicles.name,
    film: data.films,
    vehicles: films.vehicles,
    image: vehicles.img,
    description: vehicles.description
  })));*/