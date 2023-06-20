// La función `generateCountriesList` lee una lista de países y devuelve un array ordenado con los nombres comunes de los países.
function generateCountriesList(countries) {
  const commonCountriesNames = [];
  countries.forEach((country) => {
    commonCountriesNames.push(country.name.common);
  });
  // Se realiza una copia del array `commonCountriesNames` usando el método `slice` y se ordena alfabéticamente con el método `sort`
  const sortedCommonCountriesNames = commonCountriesNames.slice().sort();
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

export {generateCountriesList, searchCountries}; 
