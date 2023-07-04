// La función `searchCountries` lee una lista de países y un texto de búsqueda, y devuelve un array con los países que coinciden con el texto de búsqueda.
const searchCountries = (countries, inputText) => {
  const result = [];
  countries.forEach((eachCountry) => {
    const countryName = eachCountry.name.common;
    const lengthText = inputText.length;
    if (countryName.slice(0, lengthText) === inputText) {
      result.push(eachCountry);
    }
  });
  return result;
}

// La función `generateAlphabet` genera las letras del alfabeto.
const generateAlphabet = () => {
  const alphabet = [];

  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    alphabet.push(letter);
  }
  return alphabet;
}

// La función `filterByContinents` filtra un conjunto de datos (data) para encontrar los elementos que pertenecen a un continente específico (continent).
const filterByContinents = (data, continent) => {
  return data.filter(country => country.continents.includes(continent));
};

// La función `filterBySubregion` filtra un conjunto de datos (data) para encontrar los elementos que pertenecen a una subregion en específico (subRegion).
const filterBySubregion = (data, subRegion) => {
  return data.filter(country => country.subregion === subRegion)
};

// La función `filterByLanguages` filtra un conjunto de datos (data) para encontrar los países que tienen un idioma específico (language)
const filterByLanguages = (data, language) => {
  const countriesLanguage = [];
  data.map((country) => {
    if (Object.prototype.hasOwnProperty.call(country, "languages")) {
      const actualCountry = country.languages;
      if (Object.prototype.hasOwnProperty.call(actualCountry, language)) {
        countriesLanguage.push(country);
      }
    }
  });
  return countriesLanguage;
};

// La función `sortByPopulation` clasifica un conjunto de datos (data) que contiene países y su población, según el parámetro sortOrder.
const sortByPopulation = (data, sortOrder) => {
  //sortOrder could be 1 for ascending order  or -1 for descending order
  let result = [];
  switch (sortOrder) {
  case 1: {
    result = data.countries.slice().sort(
      (a, b) => a.population - b.population
    );
    break;
  }
  case -1: {
    result= data.countries.slice().sort(
      (a, b) => b.population - a.population
    );
    break;
  }
  default: {
    break;
  }
  }
  return result;
};

// La función sortByArea() clasifica un conjunto de datos (data) que contiene países y su área, según el parámetro sortOrder.
const sortByArea = (data, sortOrder) => {
  //sortOrder could be 1 for ascending order  or -1 for descending order
  let result = [];
  switch (sortOrder) {
  case 1: {
    result = data.countries.slice().sort((a, b) => a.area - b.area);
    break;
  }
  case -1: {
    result = data.countries.slice().sort((a, b) => b.area - a.area);
    break;
  }
  default: {
    break;
  }
  }
  return result;
};

// La función me calcula la densidad poblacion y la adiciona como parametro key al objeto countries
const addPopulationDensity = (data) => {
  data.map((country) => {
    country.populationDensity = Math.trunc(country.population/country.area);
  });
  return data;
}

const sortByPopulationDensity = (data, sortOrder) => {
  //sortOrder could be 1 for ascending order  or -1 for descending order
  let result = [];
  switch (sortOrder) {
  case 1: {
    result = data.countries.slice().sort((a, b) => a.populationDensity - b.populationDensity);
    break;
  }
  case -1: {
    result = data.countries.slice().sort((a, b) => b.populationDensity - a.populationDensity
    );
    break;
  }
  default: {
    break;
  }
  }
  return result;
};

const averagePopulationDensityByContinent = (data,continent) => {
  const countriesByContinent = filterByContinents(data,continent);
  return countriesByContinent.reduce((sum,country) => sum + country.populationDensity,0) / countriesByContinent.length; 
};

const filterPopulationDensityByContinent = (data,continent) => {
  const  popDensityArray = [];
  const countries = filterByContinents(data,continent);
  countries.forEach((country) => {
    popDensityArray.push(country.populationDensity)
  });
  return popDensityArray
};

export {
  searchCountries,
  generateAlphabet,
  filterByContinents,
  filterBySubregion,
  filterByLanguages,
  sortByPopulation,
  sortByArea,
  addPopulationDensity,
  sortByPopulationDensity,
  averagePopulationDensityByContinent,
  filterPopulationDensityByContinent
};
