//import { people } from './main.js';

//Estamos usando JavaScript modular. Export e Import son declaraciones.
//El uso de export/import permite compartir elementos (variables, funciones, clases) entre diferentes archivos en un proyecto de JS
//Solo se agrega la declaración export antes de la declaración de la variable

import data from './data/ghibli/ghibli.js';

//______________SCORE PROMEDIO EN ROTTEN TOMATOES ('rt_score')
function prom(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    const score = parseInt(array[i].score, 10);
    suma = suma + score;
  }
  return suma / array.length;
}

//______________TOTAL DE ESPECIES
function countSpecies() {
  const uniqueSpecies = new Set();
  data.films.forEach(film => {
    film.people.filter(people => people.specie).forEach(person => {
      const arraySpecies = Object.keys(person.specie);
      arraySpecies.forEach(specie => uniqueSpecies.add(specie));
    });
  });
  return uniqueSpecies.size;
};

//______________TOTAL DE VEHÍCULOS
function countVehicles() {
  const uniqueVehicles = new Set();
  data.films.forEach(film => {
    film.vehicles.forEach(vehicles => {
      const arrayVehicles = Object.keys(vehicles);
      arrayVehicles.forEach(vehicles => uniqueVehicles.add(vehicles));
    });
  });
  return uniqueVehicles.size;
};

//______PERSONAJES ORDENADOS ALFABÉTICAMENTE
function alphabeticalOrderPeople(people) {  

  data.films.forEach(film => {
    film.people.filter(people => people.name).forEach(({ name, img }) => {
      people.push({ name, film: film.title, img });
    });
  });
  people.sort((a, b) => a.name.localeCompare(b.name));
};

//______PELÍCULAS ORDENADAS ALFABÉTICAMENTE
function alphabeticalOrderFilms(films) {
  films.sort((a, b) => a.title.localeCompare(b.title));
}



export {prom, countSpecies, countVehicles, alphabeticalOrderPeople, alphabeticalOrderFilms }

