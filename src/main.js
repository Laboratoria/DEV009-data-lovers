import data  from './data/countries/countries.js';
// import data from './data/rickandmorty/rickandmorty.js';

const countries = data.countries;

const commonCountriesNames = [];

countries.forEach((country) => {
  commonCountriesNames.push(country.name.common)
});

const sortedCommonCountriesNames = commonCountriesNames.slice().sort();

console.log(sortedCommonCountriesNames);
