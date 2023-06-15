import data from "./data/countries/countries.js";
// import data from './data/rickandmorty/rickandmorty.js';

const countries = data.countries;

const commonCountriesNames = [];

countries.forEach((country) => {
  commonCountriesNames.push(country.name.common);
});

const sortedCommonCountriesNames = commonCountriesNames.slice().sort();

console.log(sortedCommonCountriesNames);

const containerCountriesList = document.querySelector(
  ".common-countries-name-ul"
);

containerCountriesList.innerHTML = "";

sortedCommonCountriesNames.forEach((country) => {
  const html = `
  <li>${country}</li>`;
  containerCountriesList.insertAdjacentHTML("beforebegin", html);
});
