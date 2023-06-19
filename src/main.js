import data from "./data/countries/countries.js";

import countriesDataAdmin from "./data.js";

const buttonLoadCountriesList = document.querySelector(".load-section-button");
const buttonClearCountriesList = document.querySelector(
  ".clear-section-button"
);
const section = document.querySelector(".countries-main");
const countryInput = document.getElementById("country-input");

let countryToSearch;
let countriesFinded;
let countriesFindedCommonNames = [];

countriesDataAdmin.generatesCountriesList();
buttonClearCountriesList.addEventListener("click", function () {
  countriesDataAdmin.clearCountriesList();
});

buttonLoadCountriesList.addEventListener("click", function () {
  countriesDataAdmin.generatesCountriesList();
});

countryInput.addEventListener("input", () => {
  const countryInputText = countryInput.value;
  countryToSearch =
    countryInputText.charAt(0).toUpperCase() +
    countryInputText.slice(1).toLowerCase();
  countriesDataAdmin.clearCountriesList();
  const countriesFinded = countriesDataAdmin.search(
    data.countries,
    countryToSearch
  );
  countriesFinded.forEach((countriesFinded) => {
    countriesFindedCommonNames.push(countriesFinded.name.common);
  });
  console.log(countriesFindedCommonNames);
  if (countryInputText.length > 0 && countriesFinded.length === 0) {
    countriesDataAdmin.clearCountriesList();
    section.textContent = "Country not found";
  } else {
    countriesDataAdmin.generateSection(
      countryInputText.charAt(0).toUpperCase()
    );
    countriesDataAdmin.generatesCountriesFindedList(
      countriesFinded,
      countryInputText.charAt(0).toUpperCase()
    );
  }
  if (countryInputText.length === 0) {
    countriesDataAdmin.generatesCountriesList();
  }
});
console.log(countryToSearch);
console.log(countriesFinded);
