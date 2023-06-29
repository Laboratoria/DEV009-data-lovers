import countries from "./data/countries/countries.js";
import {
  // generateCountriesList,
  searchCountries,
  generateAlphabet,
  // filterByLetter,
  filterByContinents,
  filterBySubregion,
  filterByLanguages,
  // sortByPopulation,
  // sortByArea,
  addPopulationDensity,
  sortByPopulationDensity,
  sortByPopulation,
  sortByArea
} from "./data.js";

const buttonLoadCountriesList = document.querySelector(".load-section-button");
const buttonClearCountriesList = document.querySelector(".clear-section-button");
// const buttonSortPopulationUp = document.querySelector(".filter-by-population")
const section = document.querySelector(".countries-main");
const sectionTable = document.querySelector(".countries-table");
const countryInput = document.getElementById("country-input");
const allLetters = document.querySelector(".active");
const continentList = document.querySelectorAll(".continent-name-li");
const languageList = document.querySelectorAll(".language-li");
const subRegionsList = document.querySelectorAll('.subregion-li');
const sortList = document.querySelectorAll('.sort-li');
// const reverseOrder = document.querySelector('.reverse-order');



// Esta función genera la section con los ul vacíos
const generateSection = (id, tittle, clearSection = "yes") => {
  if (clearSection === "yes") section.innerHTML = "";
  
  const htmlSection = `
    <section class="section-${tittle}">
    <h3>${tittle}</h3>
    <ul class="common-countries-name-ul-${id} common-countries" id="common-countries-name-ul-${id}"></ul>
  `;
  
  section.insertAdjacentHTML("beforeend", htmlSection);
};

// Esta función genera los li con los nombres de los países y sus respectivas banderas
const generateCountriesUl = (data, tittle) => {
  const containerList = document.querySelector(`.common-countries-name-ul-${tittle}`);
  
  for (const country of data) {
    const countryName = country.name.common;
    const flagCountry = country.flags.png;
    const html = `
      <li class="country-item-li"><img
        class="flag-country"
        src="${flagCountry}"
        alt="flag country"
        width="30"/>
        <a href="#">${countryName}</a>
      </li>`;
    containerList.insertAdjacentHTML("beforeend", html);
  }
};

// Esta función genera la section de los countries con sus respectivas li que contienen los nombres comunes y la imagen de la bandera
const generatesCountriesList = () => {
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
};

// La función `clearCountriesList` borra todo el contenido presente en el elemento HTML identificado como section, dejándolo vacío.
const clearCountriesList = () => {
  section.innerHTML = "";
}

// Al llamarla se genera la lista de los paises.
generatesCountriesList();

// en la siguiente linea modificada la data, es decir tiene incluido la densidad poblacional
addPopulationDensity(countries.countries);

// caja de texto que controla el evento de entrada en el campo de búsqueda y genera dinámicamente secciones y listas de países basadas en el texto de búsqueda ingresado por el usuario.
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
    generatesCountriesList();
  }
});

buttonClearCountriesList.addEventListener("click", () => {
  clearCountriesList();
  countryInput.value = "";
});

buttonLoadCountriesList.addEventListener("click", () => {
  generatesCountriesList();
});

allLetters.addEventListener('click',()=>{
  generatesCountriesList();
})

// Generar elementos del alfabeto y agregar controladores de eventos
const alphabet = generateAlphabet();
const alphabetContainer = document.querySelector(".alphabet-list");


// Genera la barra de navegación por letras
alphabet.forEach((letter) => {
  const htmlAlphabetList = `<li class="alphabet-item letter" id="${letter}">${letter}</li>`;
  alphabetContainer.insertAdjacentHTML("beforeend", htmlAlphabetList);
});

const alphabetList = document.querySelectorAll(".letter");

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

subRegionsList.forEach((subregion) => {
  subregion.addEventListener('click',() => {
    // const actualId=subregion.getAttribute('id');
    const actualSubRegion = subregion.getAttribute('id');
    const actualTittle = subregion.getAttribute('tittle');
    handleSubRegionClick(actualSubRegion,actualTittle);
  })
})

const handleSubRegionClick = (actualSubRegion,actualTittle) => {
  const subRegionsCountriesList = filterBySubregion(countries.countries,actualTittle);
  // console.log(subRegionsCountriesList);
  generateSection(actualSubRegion,actualTittle);
  generateCountriesUl(subRegionsCountriesList,actualSubRegion);
}


window.addEventListener("load", () => {
  
  sortList.forEach((sortBy) => {
    sortBy.addEventListener('click',() => {
      const actualFilter = sortBy.getAttribute('id');
      const actualTittle = sortBy.getAttribute('tittle');
      handleFilterClick(actualFilter,actualTittle);
    })
  });
  
  const handleFilterClick = (actualFilter,actualTittle) => {
    let countriesSortBy;
    
    switch (actualFilter) {
    case "population": {
      countriesSortBy = sortByPopulation(countries, 1)
      break;
    }
    case "area": {
      countriesSortBy = sortByArea(countries, 1)
      break;
    }
    case "populationDensity": {
      countriesSortBy = sortByPopulationDensity(countries, 1)
      break;
    }
    }
  
    generateTableForSortedData(countriesSortBy,actualFilter,actualTittle);
  }
  
  let iconArrow;

  const generateTableForSortedData = (data, filterKind, filterTitle) => {
    section.innerHTML='';

    const container_Table = document.createElement("div");
 
    sectionTable.appendChild(container_Table);
  
  
    const htmlTittleTable=
  `<div class="table-tittle">
    <h3>Countries sorted by ${filterTitle}</h3>
    <span class="icon-arrow"><img class="sort-img" src="./images/sort.png" alt="icon-sort"/></span>
  </div>
  <div class="table-row">
    <div class="col-table col1 col-tittle">Country</div>
    <div class="col-table col2 col-tittle">${filterTitle}</div>
  </div>`;
  

    container_Table.insertAdjacentHTML("beforeend", htmlTittleTable);

    // Se obtiene la referencia del icono de la flecha
    iconArrow = document.querySelector(".icon-arrow");

    let countriesSortedByPopulationDensityUp;
    let countriesSortedByPopulationDown;
    let countriesSortedByAreaDown;
    let sortOrderType = -1;
    
    // Se agrega el evento al icono de la flecha 
    iconArrow.addEventListener('click', () => {
      const filterKind = 'populationDensity';
      // const actualTitle = 'Population Density';
      sortOrderType = sortOrderType * -1
      countriesSortedByPopulationDensityUp = sortByPopulationDensity(countries, sortOrderType * -1);
      generateTableForSortedData(countriesSortedByPopulationDensityUp,filterKind);
    })

    iconArrow.addEventListener('click', () => {
      const filterKind = 'population';
      // const actualTitle = 'Population';
      sortOrderType = sortOrderType * -1
      countriesSortedByPopulationDown = sortByPopulation(countries, sortOrderType * -1);
      generateTableForSortedData(countriesSortedByPopulationDown,filterKind);
    });
  
    iconArrow.addEventListener('click', () => {
      const filterKind = 'area';
      // const actualTitle = 'Area';
      sortOrderType = sortOrderType * -1
      countriesSortedByAreaDown = sortByArea(countries, sortOrderType * -1);
      generateTableForSortedData(countriesSortedByAreaDown,filterKind);
    });
  
    data.forEach((country) => {
    
      const filterVarArea = country.area;
      const filterVarPopulation = country.population;
      const filterVarPopulationDensity = country.populationDensity;
      const countryName = country.name.common;
      const flagCountry = country.flags.png;
    
      let filterVar;
    
      switch (filterKind) {
      case "area": {
        filterVar = filterVarArea
        break;
      }
      case "population": {
        filterVar = filterVarPopulation
        break;
      }
      case "populationDensity": {
        filterVar = filterVarPopulationDensity
        break;
      }
      }

      const htmlRowTable =`
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
})







// let countriesSortedByPopulationUp;

// buttonSortPopulationUp.addEventListener('click',() => {
//   const filterKind = 'population';
//   countriesSortedByPopulationUp = sortByPopulation(countries, 1);
//   generateTableForSortedData(countriesSortedByPopulationUp,filterKind);
// });

// let countriesSortedByAreaUp;

// buttonSortPopulationUp.addEventListener('click',() => {
//   const filterKind = 'area';
//   countriesSortedByAreaUp = sortByArea(countries, 1);
//   generateTableForSortedData(countriesSortedByAreaUp,filterKind);
// });









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

// console.log("Filter by population density up");
// console.log(sortByPopulation(countries, 1));

// console.log("Filter by population density down");
// console.log(sortByPopulation(countries, -1));
////////////////   aque terminan pruebas de filtros   //////////////////