//import { people } from './main.js';

//Estamos usando JavaScript modular. Export e Import son declaraciones.
//El uso de export/import permite compartir elementos (variables, funciones, clases) entre diferentes archivos en un proyecto de JS
//Solo se agrega la declaración export antes de la declaración de la variable

import data from './data/ghibli/ghibli.js';

function prom(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    const score = parseInt(array[i].score, 10);
    suma = suma + score;
  }
  return suma / array.length;
}

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

export {prom, countSpecies, countVehicles}

