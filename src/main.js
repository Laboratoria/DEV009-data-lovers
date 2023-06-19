import data from "./data/countries/countries.js";
import countriesDataAdmin from "./data.js";

const buttonLoadCountriesList = document.querySelector(".load-section-button");
const buttonClearCountriesList = document.querySelector(".clear-section-button");
const section = document.querySelector(".countries-main");
const countryInput = document.getElementById("country-input");

let countryToSearch;
const countriesFindedCommonNames = [];

countriesDataAdmin.generatesCountriesList();

buttonClearCountriesList.addEventListener("click", () => {
  countriesDataAdmin.clearCountriesList();
  countryInput.value = "";
});

buttonLoadCountriesList.addEventListener("click", () => {
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

