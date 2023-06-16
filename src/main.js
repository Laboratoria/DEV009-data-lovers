import data from "./data/countries/countries.js";

const countries = data.countries;
const commonCountriesNames = [];

countries.forEach((country) => {
  commonCountriesNames.push(country.name.common);
});

const sortedCommonCountriesNames = commonCountriesNames.slice().sort();

const countriesMain = document.querySelector(".countries-main");

countriesMain.innerHTML = "";
for (let i = 65; i <= 90; i++) {
  const sectionLetter = String.fromCharCode(i);
  const sectionCountries = sortedCommonCountriesNames.filter((country) => country.startsWith(sectionLetter));

  // Section Creation
  if(sectionCountries.length > 0){
    const htmlSection = `
      <section class="alphabet-section">
      <h3>${sectionLetter}</h3>
      <ul class="common-countries-name-ul-${sectionLetter}"></ul>`;
    countriesMain.insertAdjacentHTML("beforeend", htmlSection);
  }

  // Countries list creation
  const containerList = document.querySelector(`.common-countries-name-ul-${sectionLetter}`)
  for (const country of sectionCountries) {
    if (country.startsWith(sectionLetter)) {
      const item = countries.find(({ name }) => name.common === country);
      const flagCountry = item.flags.png;
      const html = `
        <li>${country} <img
        class="flag-country"
        src="${flagCountry}"
        alt="flag country"
        width="20">
        </li>`;
      containerList.insertAdjacentHTML("beforeend", html);
    }
  }
}












