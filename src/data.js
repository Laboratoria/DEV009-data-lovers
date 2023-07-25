/* eslint-disable no-undef */
//Estamos usando JavaScript modular. Export e Import son declaraciones.
//El uso de export/import permite compartir elementos (variables, funciones, clases) entre diferentes archivos en un proyecto de JS


//______________SCORE PROMEDIO EN ROTTEN TOMATOES
function prom(array) {
  let suma = 0;
  let contador = 0;

  for (let i = 0; i < array.length; i++) {
    const score = parseFloat(array[i].rt_score);
    if (!isNaN(score)) {
      suma = suma + score;
      contador++;
    }
  }

  return contador === 0 ? 0 : suma / contador;
}

//______________TOTAL DE ESPECIES
function countSpecies(array) {
  const uniqueSpecies = new Set();
  array.forEach(film => {
    film.people.filter(people => people.specie).forEach(person => {
      const specie = person.specie;
      uniqueSpecies.add(specie);
    });
  });
  return uniqueSpecies.size;
}

//______________TOTAL DE VEHÍCULOS
/*function countVehicles(array) {
  const uniqueVehicles = new Set();
  array.forEach(film => {
    film.vehicles.forEach(vehicles => {
      const arrayVehicles = Object.keys(vehicles);
      arrayVehicles.forEach(vehicles => uniqueVehicles.add(vehicles));
    });
  });
  return uniqueVehicles.size;
}*/

function countVehicles(array) {
  const uniqueVehicles = new Set();
  array.forEach(film => {
    if (film.vehicles) {
      film.vehicles.forEach(vehicles => {
        const vehiclesName = vehicles.name;
        uniqueVehicles.add(vehiclesName);
      });
    }
  });
  return uniqueVehicles.size;
}

//______PERSONAJES ORDENADOS ALFABÉTICAMENTE
function alphabeticalOrderPeople(array) { 
  const result = []; 

  array.forEach(film => {
    film.people.filter(people => people.name).forEach(({ name, img }) => {
      result.push({ name, film: film.title, img });
    });
  });
  result.sort((a, b) => a.name.localeCompare(b.name));
  return result;
}

//______PELÍCULAS ORDENADAS ALFABÉTICAMENTE
function alphabeticalOrderFilms(array) {
  array.sort((a, b) => a.title.localeCompare(b.title));
  return array;
}

//______PELÍCULAS ORDENADAS POR AÑO

function yearOrderMovies(array) {
  
  array.filter(film => film.release_date);
  
  array.sort((a, b) => a.release_date.localeCompare(b.release_date));
 
  return array;
}

//______PELÍCULAS ORDENADAS POR DIRECTOR

function directorOrderMovies(array) {
  
  const filteredMovies = array.filter(film => film.director);
  
  filteredMovies.sort((a, b) => a.director.localeCompare(b.director));

}


//_____________________________________________________________________________________

//______PERSONAJES ORDENADOS POR PELÍCULA

function moviesOrderPeople(array) {

  const resultArray = [];
  array.forEach(film => {
    film.people.filter(people => people.name).forEach(({ name, img }) => resultArray.push({ name, film: film.title, img }));
  });
  
  resultArray.sort((a, b) => a.film.localeCompare(b.film));

  return resultArray;
}

//______PERSONAJES ORDENADOS POR GRUPO ETARIO




export {prom, alphabeticalOrderPeople, alphabeticalOrderFilms, yearOrderMovies, directorOrderMovies, countSpecies, countVehicles, moviesOrderPeople }

