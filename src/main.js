import data from "./data/countries/countries.js";
// import data from './data/rickandmorty/rickandmorty.js';

const countries = data.countries;

const commonCountriesNames = [];

countries.forEach((country) => {
  commonCountriesNames.push(country.name.common);
});

const result = countries.find(({ name }) => name.common === "Singapore");
console.log(result);
const flagCountry = result.flags.png;
console.log(flagCountry);

const sortedCommonCountriesNames = commonCountriesNames.slice().sort();

console.log(sortedCommonCountriesNames);

const countriesMain = document.querySelector(".countries-main");

const containerCountriesList = document.querySelector(
  ".common-countries-name-ul-A"
);

countriesMain.innerHTML = "";
for (let i = 65; i <= 90; i++) {
  const htmlSection = `<section class="alphabet-section">
  <h3>${String.fromCharCode(i)}</h3>
  <ul class="common-countries-name-ul-${String.fromCharCode(i)}">
    
  </ul>`;
  countriesMain.insertAdjacentHTML("beforebegin", htmlSection);
}

containerCountriesList.innerHTML = "";

for (let i = 65; i <= 90; i++) {
  for (const country of sortedCommonCountriesNames) {
    if (country.startsWith(String.fromCharCode(i))) {
      const item = countries.find(({ name }) => name.common === country);
      const flagCountry = item.flags.png;
      let stringC = `.common-countries-name-ul-${String.fromCharCode(i)}`;
      const stringTest = "Hola";
      console.log(stringTest);
      console.log(stringC);
      console.log("Hola");
      let containerList = document.querySelector(`${stringC}`);
      const html = `
      <li>${country} <img
        class="flag-country"
        src="${flagCountry}"
        alt="flag country"
        width="15"
      /></li>`;
      containerList.insertAdjacentHTML("beforebegin", html);
    }
  }
}
