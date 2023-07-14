//Estamos usando JavaScript modular. Export e Import son declaraciones.
//El uso de export/import permite compartir elementos (variables, funciones, clases) entre diferentes archivos en un proyecto de JS


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
function countSpecies(array) {
  const uniqueSpecies = new Set();
  array.forEach(film => {
    film.people.filter(people => people.specie).forEach(person => {
      const arraySpecies = Object.keys(person.specie);
      arraySpecies.forEach(specie => uniqueSpecies.add(specie));
    });
  });
  return uniqueSpecies.size;
};

//______________TOTAL DE VEHÍCULOS
function countVehicles(array) {
  const uniqueVehicles = new Set();
  array.forEach(film => {
    film.vehicles.forEach(vehicles => {
      const arrayVehicles = Object.keys(vehicles);
      arrayVehicles.forEach(vehicles => uniqueVehicles.add(vehicles));
    });
  });
  return uniqueVehicles.size;
};

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
};

//______PELÍCULAS ORDENADAS ALFABÉTICAMENTE
function alphabeticalOrderFilms(array) {
  array.sort((a, b) => a.title.localeCompare(b.title));
}



export {prom, countSpecies, countVehicles, alphabeticalOrderPeople, alphabeticalOrderFilms }

