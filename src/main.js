import countries from "./data/countries/countries.js";
import { 
  generateCountriesList, 
  searchCountries, 
  generateAlphabet,
  filterByContinents, 
  filterBySubregion, 
  filterByLanguages, 
  sortByPopulation,
  sortByArea 
} from "./data.js";

const buttonLoadCountriesList = document.querySelector(".load-section-button");
const buttonClearCountriesList = document.querySelector(".clear-section-button");
const section = document.querySelector(".countries-main");
const countryInput = document.getElementById("country-input");
const alphabetContainer = document.querySelector('.alphabet-list');
const allCountries = document.querySelector('.alphabet-list li:first-child');
const allSections = document.querySelectorAll('.alphabet-section');
const continentList = document.querySelectorAll(".continent-name-li");

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
        <section id="section-${sectionLetter}" class="alphabet-section">
        <h3>${sectionLetter}</h3>
        <ul class="common-countries-name-ul-${sectionLetter}" id="common-countries"></ul>`;
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

generatesCountriesList(countries.countries);

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

buttonClearCountriesList.addEventListener("click", () => {
  clearCountriesList();
  countryInput.value = "";
});

buttonLoadCountriesList.addEventListener("click", () => {
  generatesCountriesList(countries.countries);
});

// Agrega el controlador de eventos al elemento "ALL"
allCountries.addEventListener('click', () => {
  // Muestra todas las secciones de países ocultas
  allSections.forEach(section => section.classList.remove('hidden'));
});

// Generar elementos del alfabeto y agregar controladores de eventos
generateAlphabet().forEach(letter => {
  const li = document.createElement('li');
  li.textContent = letter;
  li.classList.add('alphabet-item');
  alphabetContainer.appendChild(li);

  li.addEventListener('click', () => {
    const sectionId = `section-${letter}`;
    // console.log(sectionId)
    const section = document.getElementById(sectionId);
    // console.log(section)

    // Mostrar sección de países seleccionada
    section.classList.remove('hidden');
    
    // Ocultar las demás secciones de países
    allSections.forEach(section => {
      if (section.id !== sectionId) {
        section.classList.add('hidden');
      }
    });
  });
});

// const countriesSortedByPopulationDown = sortByPopulation(countries, -1);
// console.log("Sorted by population down");
// console.log(countriesSortedByPopulationDown);

// const countriesSortedByPopulationUp = sortByPopulation(countries, 1);
// console.log("Sorted by population up");
// console.log(countriesSortedByPopulationUp);

// const countruiessortedByAreaUp = sortByArea(countries, 1);
// console.log("Sorted by area up");
// console.log(countruiessortedByAreaUp);

// const countruiessortedByAreaDown = sortByArea(countries, -1);
// console.log("Sorted by area down");
// console.log(countruiessortedByAreaDown);

// console.log("Filter Asia countries:");
// console.log(filterByContinents(countries, "Asia"));

// console.log("Filter countries by subregion Eastern Asia");
// console.log(filterBySubregion(countries, "Eastern Asia"));

// console.log("Filter countries by subregion Western Europe");
// console.log(filterBySubregion(countries, "Western Europe"));

//Testing filtering by language
// console.log("Filter countries spanish language:");
// console.log(filterByLanguages(countries, "spa"));

// console.log("Filter countries Portuguese language");
// console.log(filterByLanguages(countries, "por"));

continentList.forEach((continent) => {
  continent.addEventListener("click", () => {
    const actualContinent = continent.getAttribute("id");
    console.log(actualContinent);
    handleContinentClick(actualContinent);
  });
});

const handleContinentClick = (actualContinent) => {
  const continentCountriesList = filterByContinents(countries, actualContinent);
  const continentCountriesCommonNames = generateCountriesList(
    continentCountriesList
  );
  console.log(continentCountriesCommonNames);
};































