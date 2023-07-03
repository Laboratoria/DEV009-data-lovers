import countries from "./data/countries/countries.js";
import {
  searchCountries,
  generateAlphabet,
  filterByContinents,
  filterBySubregion,
  filterByLanguages,
  addPopulationDensity,
  sortByPopulationDensity,
  sortByPopulation,
  sortByArea,
} from "./data.js";

const toggleButton=document.querySelector(".toggleButton");
const section = document.querySelector(".countries-main");
const countryInput = document.getElementById("country-input");
const allLetters = document.querySelector(".active");
const continentList = document.querySelectorAll(".continent-name-li");
const languageList = document.querySelectorAll(".language-li");
const subRegionsList = document.querySelectorAll('.subregion-li');
const sortList = document.querySelectorAll('.sort-li');
const sideBarAside=document.querySelector('.side-bar-aside');
const containerTable=document.querySelector('.container-table');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');


let asideOpen = false;

// Función para abrir el aside
const openAside = () => {
  sideBarAside.classList.toggle('show');
  mobileMenuContainer.classList.toggle('show');
  asideOpen = true;
};

// Función para cerrar el aside y mostrar la información seleccionada
const closeAsideAndShowInfo = () => {
  sideBarAside.classList.remove('show');
  mobileMenuContainer.classList.remove('show');
  asideOpen = false;
};

toggleButton.addEventListener('click', () => {
  if(asideOpen) {
    closeAsideAndShowInfo();
  } else {
    openAside();
  }
});

// Agregar el evento click a los elementos del aside
continentList.forEach((element) => {
  element.addEventListener('click', closeAsideAndShowInfo);
});

languageList.forEach((element) => {
  element.addEventListener('click', closeAsideAndShowInfo);
});

subRegionsList.forEach((element) => {
  element.addEventListener('click', closeAsideAndShowInfo);
});

sortList.forEach((element) => {
  element.addEventListener('click', closeAsideAndShowInfo);
});

// Esta función genera la section con los ul vacíos
const generateSection = (id, tittle, clearSection = "yes") => {
  if (clearSection === "yes") section.innerHTML = "";
  containerTable.style.display='none';
  
  const htmlSection = `
    <section class="section-${tittle}">
    <h3>${tittle}</h3>
    <ul class="common-countries-name-ul-${id} common-countries" id="common-countries-name-ul-${id}"></ul>
  `;
  
  section.insertAdjacentHTML("beforeend", htmlSection);
  section.style.backgroundColor='rgba(245, 245, 245, 0.7)'

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
        <div class="country-info-container hidden">
          <p>Capital: ${country.capital}</p>
          <p>Independent: ${country.independent}</p>
          <p>Time Zone: ${country.timezones.join(', ')}</p>
        </div>
      </li>
      `;
    containerList.insertAdjacentHTML("beforeend", html);

    // Obtener todos los elementos <li> recién insertados
    // const countryItems = containerList.querySelectorAll('.country-item-li');

    // Agregar evento de clic a cada elemento <li>
    // countryItems.forEach((countryItem) => {
    //   countryItem.addEventListener('click', function () {
    //     const infoContainer = this.querySelector('.country-info-container');
    //     if(infoContainer.classList.contains('hidden')) {
    //       infoContainer.classList.remove('hidden'); // Mostrar la información 
    //     } else {
    //       infoContainer.classList.add('hidden'); // Ocultar la información
    //     }
    //   });
    // });

    // Otra opción para arreglar el problema
    containerList.addEventListener('click', function (event) {
      const clickedElement = event.target;
      if (clickedElement.classList.contains('country-item-li')) {
        const infoContainer = clickedElement.querySelector('.country-info-container');
        infoContainer.classList.toggle('hidden'); // Mostrar u ocultar la información del país
      }
    });
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

allLetters.addEventListener('click',() => {
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

let sortOrderType;

const handleSubRegionClick = (actualSubRegion,actualTittle) => {
  const subRegionsCountriesList = filterBySubregion(countries.countries,actualTittle);
  // console.log(subRegionsCountriesList);
  generateSection(actualSubRegion,actualTittle);
  generateCountriesUl(subRegionsCountriesList,actualSubRegion);
}

let actualFilter;
let actualTittle;


window.addEventListener("load", () => {
  
  sortList.forEach((sortBy) => {
    sortBy.addEventListener('click',() => {
      actualFilter = sortBy.getAttribute('id');
      actualTittle = sortBy.getAttribute('tittle');
      handleFilterClick(actualFilter,actualTittle);
    })
  });
  
  const handleFilterClick = (actualFilter,actualTittle) => {
    containerTable.innerHTML = '';
    let countriesSortBy;
    sortOrderType = 1;  
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

  const generateTableForSortedData = (data, filterKind, filterTitle) => {
    section.innerHTML='';
  
    const htmlTittleTable=
  `<div class="table-tittle">
    <h3>Countries sorted by ${filterTitle}</h3>
    <span class="icon-arrow"><img class="sort-img" src="./images/sort.png" alt="icon-sort"/></span>
  </div>
  <div class="table-row">
    <div class="col-table col1 col-tittle">Country</div>
    <div class="col-table col2 col-tittle">${filterTitle}</div>
  </div>`;
  

    containerTable.insertAdjacentHTML("beforeend", htmlTittleTable);
    containerTable.style.display='block';

    // Se obtiene la referencia del icono de la flecha
    const iconArrow = document.querySelector(".icon-arrow");

    let countriesSortedBy
    
    
    // Se agrega el evento al icono de la flecha 
  
    iconArrow.addEventListener('click', () => {
      containerTable.innerHTML = '';
      sortOrderType = sortOrderType * -1
      switch (filterKind) {
      case "area": {
        countriesSortedBy = sortByArea(countries, sortOrderType);
        break;
      }
      case "population": {
        countriesSortedBy = sortByPopulation(countries, sortOrderType);
        break;
      }
      case "populationDensity": {
        countriesSortedBy = sortByPopulationDensity(countries, sortOrderType);
        break;
      }
      }
      generateTableForSortedData(countriesSortedBy,filterKind,actualTittle);
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
      containerTable.insertAdjacentHTML("beforeend", htmlRowTable);
    });
  };
})

///////////////////////////////////////////////////////////////////////

/////////////           Test para los filtros           ///////////////

// let countriesSortedByPopulationUp;

// buttonSortPopulationUp.addEventListener('click',() => {
//   const filterKind = 'population';
//   countriesSortedByPopulationUp = sortByPopulation(countries, 1);
//   generateTableForSortedData(countriesSortedByPopulationUp,filterKind);
// });

// countriesSortedByPopulationUp = sortByPopulation(countries, 1);
// console.log(countriesSortedByPopulationUp);

// let countriesSortedByAreaUp;

// buttonSortPopulationUp.addEventListener('click',() => {
//   const filterKind = 'area';
//   countriesSortedByAreaUp = sortByArea(countries, 1);
//   generateTableForSortedData(countriesSortedByAreaUp,filterKind);
// });



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

// const testPopDensityAmerica=averagePopulationDensityByContinent(countries.countries,"America");
// console.log(testPopDensityAmerica);

// const tttt=filterPopulationDensityByContinent(countries.countries,"America");
// console.log(tttt);
////////////////   aque terminan pruebas de filtros   //////////////////