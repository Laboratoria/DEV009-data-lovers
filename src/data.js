// La función `generateCountriesList` lee una lista de países y devuelve un array ordenado con los nombres comunes de los países.
function generateCountriesList(countries) {
  const commonCountriesNames = [];
  countries.forEach((country) => {
    commonCountriesNames.push(country.name.common);
  });
  // Se realiza una copia del array `commonCountriesNames` usando el método `slice` y se ordena alfabéticamente con el método `sort`
  const sortedCommonCountriesNames = commonCountriesNames.slice().sort();
  // console.log(sortedCommonCountriesNames)
  return sortedCommonCountriesNames;
}

// La función `searchCountries` lee una lista de países y un texto de búsqueda, y devuelve un array con los países que coinciden con el texto de búsqueda.
function searchCountries(countries, inputText) {
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
// La expresión countryName.slice(0, lengthText) === inputText
// countryName: es una cadena de texto que representa el nombre del país.
// slice(0, lengthText): toma una subcadena de countryName desde el índice 0 hasta el índice lengthText. Esto significa que se extraen los primeros lengthText caracteres del nombre del país.
// inputText: es la cadena de texto de entrada, es decir, el texto de búsqueda.

// La función `generateAlphabet` genera las letras del alfabeto.
function generateAlphabet() {
  const alphabet = [];

  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    alphabet.push(letter);
  }

  return alphabet;
}

const filterByLetter = (data, letter) => {
  const result = [];
  data.map((country) => {
    const actualCountry = country.name.common;
    const startWithLetter = actualCountry.startsWith(letter);
    if (startWithLetter) result.push(country);
  });
  return result; // return an object with data
};

const filterByContinents = (data, continent) => {
  const result = [];
  if (Array.isArray(data.countries)){
    data.countries.map(country=>{
      const continentSearch=country.continents;
      if (continentSearch[0] === continent) result.push(country);

    });
  }
  // data.countries.map((country) => {
  //   const continentSearch = country.continents;
  //   if (continentSearch[0] === continent) result.push(country);
  // });
  // console.log(result);
  return result;
};

const filterBySubregion = (data, subregion) => {
  const result = [];
  data.countries.map((country) => {
    if (country.subregion === subregion) result.push(country);
  });
  return result;
};

const filterByLanguages = (data, language) => {
  const countriesLanguage = [];
  data.countries.map((country) => {
    if (Object.prototype.hasOwnProperty.call(country, "languages")) {
      const actualCountry = country.languages;
      if (Object.prototype.hasOwnProperty.call(actualCountry, language)) {
        countriesLanguage.push(country);
      }
    }
  });
  return countriesLanguage;
};

const sortByPopulation = (data, sortOrder) => {
  //sortOrder could be 1 for ascending order  or -1 for descending order
  const result = [];
  switch (sortOrder) {
  case 1: {
    const resultUp = data.countries.sort(
      (a, b) => a.population - b.population
    );
    resultUp.forEach((element) => {
      result.push(element);
    });
    break;
  }
  case -1: {
    const resultDown = data.countries.sort(
      (a, b) => b.population - a.population
    );
    resultDown.forEach((element) => {
      result.push(element);
    });
    break;
  }
  default: {
    break;
  }
  }

  return result;
};

const sortByArea = (data, sortOrder) => {
  //sortOrder could be 1 for ascending order  or -1 for descending order
  const result = [];
  switch (sortOrder) {
  case 1: {
    const resultUp = data.countries.sort((a, b) => a.area - b.area);
    resultUp.forEach((element) => {
      result.push(element);
    });
    break;
  }
  case -1: {
    const resultDown = data.countries.sort((a, b) => b.area - a.area);
    resultDown.forEach((element) => {
      result.push(element);
    });
    break;
  }
  default: {
    break;
  }
  }

  return result;
};

export {
  generateCountriesList,
  searchCountries,
  generateAlphabet,
  filterByLetter,
  filterByContinents,
  filterBySubregion,
  filterByLanguages,
  sortByPopulation,
  sortByArea,
};
