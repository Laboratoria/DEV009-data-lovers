import countries from "./data/countries/countries.js";
import {
  searchCountries,
  generateAlphabet,
  filterByContinents,
  filterByLanguages,
  // filterBySubregion,
  sortByPopulation,
  // sortByArea,
} from "./data.js";

const buttonLoadCountriesList = document.querySelector(".load-section-button");
const buttonClearCountriesList = document.querySelector(
  ".clear-section-button"
);
const buttonSortPopulationUp=document.querySelector(".filter-by-population")
const section = document.querySelector(".countries-main");
const sectionTable=document.querySelector(".countries-table");
const countryInput = document.getElementById("country-input");
const allLetters=document.querySelector(".active");
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
        <li class="country-item-li"><img
        class="flag-country"
        src="${flagCountry}"
        alt="flag country"
        width="30"
      /><a href="#">${countryName}</a>
          </li>`;
    containerList.insertAdjacentHTML("beforeend", html);
  }
};

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

allLetters.addEventListener('click',()=>{
  generatesCountriesList(countries.countries);
})

// Generar elementos del alfabeto y agregar controladores de eventos
const alphabet = generateAlphabet();
const alphabetContainer = document.querySelector(".alphabet-list");


// Genera la barra de navegación por letras
alphabet.forEach((letter) => {
  const htmlAlphabetList=`<li class="alphabet-item letter" id="${letter}">${letter}</li>`;
  alphabetContainer.insertAdjacentHTML("beforeend", htmlAlphabetList);
})
const alphabetList=document.querySelectorAll(".letter");

alphabetList.forEach((letter) => {
  letter.addEventListener("click", () => {
    const actualLetter = letter.getAttribute("id");
    const actualTittle = letter.getAttribute("id");
    handleLetterClick(actualLetter, actualTittle);
  });
});
  
const handleLetterClick = (actualLetter, actualTittle) => {
  const letterCountriesList = searchCountries(countries.countries, actualLetter);
  generateSection(actualLetter, actualTittle);
  generateCountriesUl(letterCountriesList, actualLetter);
};
  
//Version de Andrea
// const li = document.createElement("li");
// li.textContent = letter;
// li.classList.add("alphabet-item");
// li.idList.add("letter");
// alphabetContainer.appendChild(li);
//   li.addEventListener("click", () => {
//     const sectionId = `section-${letter}`;
//     // console.log(sectionId)
//     const section = document.getElementById(sectionId);
//     // console.log(section)

//     // Mostrar sección de países seleccionada
//     section.classList.remove("hidden");

//     // Ocultar las demás secciones de países
//     const allSections = document.querySelectorAll(".alphabet-section");
//     allSections.forEach((section) => {
//       if (section.id !== sectionId) {
//         section.classList.add("hidden");
//       }
//     });
//   });
// });

// // Obtiene la referencia al elemento "ALL"
// const allCountries = document.querySelector(".alphabet-list li:first-child");

// // Agrega el controlador de eventos al elemento "ALL"
// allCountries.addEventListener("click", () => {
//   // Muestra todas las secciones de países ocultas
//   const hiddenSections = document.querySelectorAll(".alphabet-section.hidden");
//   hiddenSections.forEach((section) => section.classList.remove("hidden"));
// });


///                     hasta aca de andrea           ///
//////////////////////////////////////////////////////////////////////////

languageList.forEach((language) => {
  language.addEventListener("click", () => {
    const actualLanguage = language.getAttribute("id");
    const actualTittle = language.getAttribute("tittle");
    handleLanguageClick(actualLanguage, actualTittle);
  });
});

const handleLanguageClick = (actualLanguage, actualTittle) => {
  const languageCountriesList = filterByLanguages(countries.countries, actualLanguage);
  generateSection(actualLanguage, actualTittle);
  generateCountriesUl(languageCountriesList, actualLanguage);
};

continentList.forEach((continent) => {
  continent.addEventListener("click", () => {
    const actualContinent = continent.getAttribute("id");
    const actualTittle = continent.getAttribute("tittle");
    handleContinentClick(actualContinent, actualTittle);
  });
});

const handleContinentClick = (actualContinent, actualTittle) => {
  const continentCountriesList = filterByContinents(countries.countries, actualContinent);
  generateSection(actualContinent, actualTittle);
  generateCountriesUl(continentCountriesList, actualContinent);
};

const generateTableForSortedData=(data,filterKind,sortOrder)=>{
  // filterKind =Area or Population
  // sortOrder= Ascending or descending
  section.innerHTML='';

  const container_Table = document.createElement("div");
 
  sectionTable.appendChild(container_Table);

  const htmlTittleTable=
  `<div class="table-tittle">
    <h3>Countries ${filterKind} sorted in ${sortOrder} order</h3>
  </div>
  <div class="table-row">
    <div class="col-table col1 col-tittle">Country     </div>
    <div class="col-table col2 col-tittle">${filterKind} </div>
    </div>`;
  container_Table.insertAdjacentHTML("beforeend", htmlTittleTable);
  data.forEach(country=>{
    const countryName=country.name.common;
    const flagCountry=country.flags.png;
    const filterVar=country.population;
    const htmlRowTable=`
    <div class="table-row">
      <div class="col-table col1 col-list">
        <ul class="inline-list">
          <li><img class="flag-country"
          src="${flagCountry}" 
          alt="flag country" 
          width="30"/>
          </li>
          <li><a href="#">${countryName}</a></li>
        </ul>
      </div>
      <div class="col-table col2 col2-content">${filterVar} </div>
    </div>`
    container_Table.insertAdjacentHTML("beforeend", htmlRowTable);
  });
};

buttonSortPopulationUp.addEventListener('click',()=>{
  const filterKind='population';
  const sortOrder='Ascending'
  const countriesSortedByPopulationUp = sortByPopulation(countries, 1);
  generateTableForSortedData(countriesSortedByPopulationUp,filterKind,sortOrder);
});

///////////////////////////////////////////////////////////////////////

/////////////           Test para los filtros           ///////////////

// const dataCountries=countries.countries;

// const filterCountriesByContinent=(data,continent)=>{
//   data.countries.filter(country=>country.continents.includes(continent));
// }
// const testFilter=countries.countries.filter(country=>{
//   country.continents==="America"})

// console.log(filterCountriesByContinent(countries,'America')); 


// const countriesOfAmerica=filterCountriesByContinent(countries.countries,"America");
// console.log(countriesOfAmerica);

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
// console.log(filterBySubregion(countries.countries, "Eastern Asia"));

// console.log("Filter countries by subregion Western Europe");
// console.log(filterBySubregion(countries, "Western Europe"));

//Testing filtering by language
// console.log("Filter countries spanish language:");
// console.log(filterByLanguages(countries, "spa"));

// console.log("Filter countries Portuguese language");
// console.log(filterByLanguages(countries, "por"));
////////////////   aque terminan pruebas de filtros   //////////////////