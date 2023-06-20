import countries from "./data/countries/countries.js";
import { generateCountriesList, searchCountries } from "./data.js";

const buttonLoadCountriesList = document.querySelector(".load-section-button");
const buttonClearCountriesList = document.querySelector(".clear-section-button");
const section = document.querySelector(".countries-main");
const countryInput = document.getElementById("country-input");

function generatesCountriesList(countries) {
  const sortedCommonCountriesNames = generateCountriesList(countries);
  section.innerHTML = "";

  for (let i = 65; i <= 90; i++) {
    const sectionLetter = String.fromCharCode(i);
    const sectionCountries = sortedCommonCountriesNames.filter((country) =>
      country.startsWith(sectionLetter)
    );

    // Section Creation
    if (sectionCountries.length > 0) {
      const htmlSection = `
        <section class="alphabet-section">
        <h3>${sectionLetter}</h3>
        <ul class="common-countries-name-ul-${sectionLetter}" id="common-countries-name-ul-${sectionLetter}"></ul>`;
      section.insertAdjacentHTML("beforeend", htmlSection);
    }

    // Countries list creation
    const containerList = document.querySelector(
      `.common-countries-name-ul-${sectionLetter}`
    );
    for (const country of sectionCountries) {
      if (country.startsWith(sectionLetter)) {
        const item = countries.find(({ name }) => name.common === country);
        const flagCountry = item.flags.png;
        const html = `
          <li class="country-item-li"><a href="#">${country}</a><img
                  class="flag-country"
                  src="${flagCountry}"
                  alt="flag country"
                  width="30"
                />
            </li>`;
        containerList.insertAdjacentHTML("beforeend", html);
      }
    }
  }
}

function generateSection(letter) {
  const htmlSection = `
        <section class="alphabet-section">
        <h3>${letter}</h3>
        <ul class="common-countries-name-ul-${letter}" id="common-countries-name-ul-${letter}"></ul>`;
  section.insertAdjacentHTML("beforeend", htmlSection);
}

function generatesCountriesFindedList(countryList, letter) {
  const containerList = document.querySelector(
    `.common-countries-name-ul-${letter}`
  );
  containerList.innerHTML = "";
  for (const country of countryList) {
    const countryName = country.name.common;
    const flagCountry = country.flags.png;
    const html = `
        <li class="country-item-li"><a href="#">${countryName}</a><img
                class="flag-country"
                src="${flagCountry}"
                alt="flag country"
                width="30"
              />
          </li>`;
    containerList.insertAdjacentHTML("beforeend", html);
  }
}

function clearCountriesList() {
  section.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  generatesCountriesList(countries.countries);
});

buttonClearCountriesList.addEventListener("click", () => {
  clearCountriesList();
  countryInput.value = "";
});

buttonLoadCountriesList.addEventListener("click", () => {
  generatesCountriesList(countries.countries);
});


countryInput.addEventListener("input", () => {
  const countryInputText = countryInput.value;
  const countryToSearch = countryInputText.charAt(0).toUpperCase() + countryInputText.slice(1).toLowerCase();
  clearCountriesList();
  const countriesFinded = searchCountries(countries.countries, countryToSearch);

  if (countryInputText.length > 0 && countriesFinded.length === 0) {
    clearCountriesList();
    section.textContent = "Country not found";
  } else {
    generateSection(countryInputText.charAt(0).toUpperCase());
    generatesCountriesFindedList(
      countriesFinded,
      countryInputText.charAt(0).toUpperCase()
    );
  }
  if (countryInputText.length === 0) {
    generatesCountriesList(countries.countries);
  }
});




