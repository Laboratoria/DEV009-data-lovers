import countries from "./data/countries/countries.js";
import {
  // generateCountriesList,
  searchCountries,
  generateAlphabet,
  // filterByLetter,
  filterByContinents,
  // filterBySubregion,
  filterByLanguages,
  // sortByPopulation,
  // sortByArea,
} from "./data.js";

const buttonLoadCountriesList = document.querySelector(".load-section-button");
const buttonClearCountriesList = document.querySelector(
  ".clear-section-button"
);
const section = document.querySelector(".countries-main");
const countryInput = document.getElementById("country-input");
const continentList = document.querySelectorAll(".continent-name-li");
const languageList = document.querySelectorAll(".language-li");

function generatesCountriesList() {
  section.innerHTML = "";

  for (let i = 65; i <= 90; i++) {
    const sectionLetter = String.fromCharCode(i);
    const sectionCountries = searchCountries(
      countries.countries,
      sectionLetter
    );

    // Section Creation
    if (sectionCountries.length > 0) {
      const sectionId = sectionLetter;
      const sectionTittle = sectionLetter;
      generateSection(sectionId, sectionTittle, "not");
    }

    // Countries list creation
    generateCountriesUl(sectionCountries, sectionLetter);
  }
}

function generateSection(id, tittle, clearSection = "yes") {
  if (clearSection === "yes") section.innerHTML = "";
  const htmlSection = `
        <section class="section- ${tittle} ">
        <h3>${tittle}</h3>
        <ul class="common-countries-name-ul-${id} common-countries" id="common-countries-name-ul-${id}"></ul>`;
  section.insertAdjacentHTML("beforeend", htmlSection);
}

const generateCountriesUl = (data, tittle) => {
  const containerList = document.querySelector(
    `.common-countries-name-ul-${tittle}`
  );
  for (const country of data) {
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
};

// function generatesCountriesFindedList(countryList, letter) {
//   const containerList = document.querySelector(
//     `.common-countries-name-ul-${letter}`
//   );
//   containerList.innerHTML = "";
//   for (const country of countryList) {
//     const countryName = country.name.common;
//     const flagCountry = country.flags.png;
//     const html = `
//         <li class="country-item-li"><a href="#">${countryName}</a><img
//                 class="flag-country"
//                 src="${flagCountry}"
//                 alt="flag country"
//                 width="30"
//               />
//           </li>`;
//     containerList.insertAdjacentHTML("beforeend", html);
//   }
// }

function clearCountriesList() {
  section.innerHTML = "";
}

generatesCountriesList(countries.countries);

countryInput.addEventListener("input", () => {
  const countryInputText = countryInput.value;
  const countryToSearch =
    countryInputText.charAt(0).toUpperCase() +
    countryInputText.slice(1).toLowerCase();
  clearCountriesList();
  const countriesFinded = searchCountries(countries.countries, countryToSearch);

  if (countryInputText.length > 0 && countriesFinded.length === 0) {
    clearCountriesList();
    section.textContent = "Country not found";
  } else {
    const tittleLetter = countryInputText.charAt(0).toUpperCase();
    const idLetter = countryInputText.charAt(0).toUpperCase();
    generateSection(idLetter, tittleLetter);
    generateCountriesUl(countriesFinded, tittleLetter);
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

// Generar elementos del alfabeto y agregar controladores de eventos
const alphabet = generateAlphabet();
const alphabetContainer = document.querySelector(".alphabet-list");

alphabet.forEach((letter) => {
  const li = document.createElement("li");
  li.textContent = letter;
  li.classList.add("alphabet-item");
  alphabetContainer.appendChild(li);

  li.addEventListener("click", () => {
    const sectionId = `section-${letter}`;
    // console.log(sectionId)
    const section = document.getElementById(sectionId);
    // console.log(section)

    // Mostrar sección de países seleccionada
    section.classList.remove("hidden");

    // Ocultar las demás secciones de países
    const allSections = document.querySelectorAll(".alphabet-section");
    allSections.forEach((section) => {
      if (section.id !== sectionId) {
        section.classList.add("hidden");
      }
    });
  });
});

// Obtiene la referencia al elemento "ALL"
const allCountries = document.querySelector(".alphabet-list li:first-child");

// Agrega el controlador de eventos al elemento "ALL"
allCountries.addEventListener("click", () => {
  // Muestra todas las secciones de países ocultas
  const hiddenSections = document.querySelectorAll(".alphabet-section.hidden");
  hiddenSections.forEach((section) => section.classList.remove("hidden"));
});

///////////////////////////////////////////////////////////////////////

// const countriesByG = filterByLetter(countries.countries, "G");
// console.log(countriesByG);

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
// console.log(filterByContinents(countries, "America"));

// console.log("Filter countries by subregion Eastern Asia");
// console.log(filterBySubregion(countries, "Eastern Asia"));

// console.log("Filter countries by subregion Western Europe");
// console.log(filterBySubregion(countries, "Western Europe"));

//Testing filtering by language
// console.log("Filter countries spanish language:");
// console.log(filterByLanguages(countries, "spa"));

// console.log("Filter countries Portuguese language");
// console.log(filterByLanguages(countries, "por"));

languageList.forEach((language) => {
  // console.log(languageList);
  language.addEventListener("click", () => {
    const actualLanguage = language.getAttribute("id");
    const actualTittle = language.getAttribute("tittle");
    handleLanguageClick(actualLanguage, actualTittle);
  });
});

const handleLanguageClick = (actualLanguage, actualTittle) => {
  const languageCountriesList = filterByLanguages(countries.countries, actualLanguage);
  // const continentCountriesCommonNames = generateCountriesList(
  //   continentCountriesList
  // console.log(languageCountriesList);

  generateSection(actualLanguage, actualTittle);
  generateCountriesUl(languageCountriesList, actualLanguage);
};

continentList.forEach((continent) => {
  continent.addEventListener("click", () => {
    const actualContinent = continent.getAttribute("id");
    const actualTittle = continent.getAttribute("tittle");
    // console.log(actualTittle);
    handleContinentClick(actualContinent, actualTittle);
  });
});

const handleContinentClick = (actualContinent, actualTittle) => {
  const continentCountriesList = filterByContinents(countries, actualContinent);
  generateSection(actualContinent, actualTittle);
  generateCountriesUl(continentCountriesList, actualContinent);
};
