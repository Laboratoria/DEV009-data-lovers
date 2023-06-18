import data from "./data/countries/countries.js";

const countriesDataAdmin = {
  countriesMain: document.querySelector(".countries-main"),
  generatesCountriesList() {
    const countries = data.countries;
    const commonCountriesNames = [];
    countries.forEach((country) => {
      commonCountriesNames.push(country.name.common);
    });
    const sortedCommonCountriesNames = commonCountriesNames.slice().sort();
    this.countriesMain.innerHTML = "";
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
        this.countriesMain.insertAdjacentHTML("beforeend", htmlSection);
      }

      // Countries list creation
      let containerList = document.querySelector(
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
  },

  generateSection(letter) {
    const htmlSection = `
        <section class="alphabet-section">
        <h3>${letter}</h3>
        <ul class="common-countries-name-ul-${letter}" id="common-countries-name-ul-${letter}"></ul>`;
    this.countriesMain.insertAdjacentHTML("beforeend", htmlSection);
  },

  generatesCountriesFindedList(countryList, letter) {
    let containerList = document.querySelector(
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
  },

  clearCountriesList() {
    this.countriesMain.innerHTML = "";
  },

  search(data, inputText) {
    const result = [];
    // Searching countries
    data.forEach((eachCountry) => {
      const countryName = eachCountry.name.common;
      const lengthText = inputText.length;
      if (countryName.slice(0, lengthText) === inputText) {
        result.push(eachCountry);
      }
    });
    return result;
  },
};

export default countriesDataAdmin;
