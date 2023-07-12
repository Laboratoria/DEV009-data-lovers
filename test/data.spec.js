import { busqueda } from '../src/data.js';
const dataTestCountries = [{
  "name": {
    "common": "Colombia"
  },
  "capital": [
    "Bogotá"
  ],
  "subregion": "South America",
  "languages": {
    "spa": "Spanish"
  },
  "area": 1141748,
  "population": 50882884,
  "continents": [
    "America"
  ],
},  {
  "name": {
    "common": "Algeria"
  },
  "capital": [
    "Algiers"
  ],
  "subregion": "Northern Africa",
  "languages": {
    "ara": "Arabic"
  },
  "area": 2381741,
  "population": 44700000,
  "continents": [
    "Africa"
  ],
}, {
  "name": {
    "common": "Uzbekistan"
  },
  "capital": [
    "Tashkent"
  ],
  "subregion": "Central Asia",
  "languages": {
    "rus": "Russian",
    "uzb": "Uzbek"
  },
  "area": 447400,
  "population": 34232050,
  "fifa": "UZB",
  "continents": [
    "Asia"
  ],
}, {
  "name": {
    "common": "Germany",
  },
  "capital": [
    "Berlin"
  ],
  "subregion": "Western Europe",
  "languages": {
    "deu": "German"
  },
  "area": 357114,
  "population": 83240525,
  "continents": [
    "Europe"
  ],
},  {
  "name": {
    "common": "Antarctica"
  },
  "area": 14000000,
  "population": 1000,
  "continents": [
    "Antarctica"
  ],
}, {
  "name": {
    "common": "Micronesia"
  },
  "capital": [
    "Palikir"
  ],
  "subregion": "Micronesia",
  "languages": {
    "eng": "English"
  },
  "area": 702,
  "population": 115021,
  "continents": [
    "Oceania"
  ],
}]

describe('busqueda', () => {
  it('is a function', () => {
    expect(typeof busqueda).toBe('function');
  });

  it('Buscar el pais Colombia', () => {
    const inputSearch= "colombia"
    const resultTestSearch = [{
      "name": {
        "common": "Colombia"
      },
      "capital": [
        "Bogotá"
      ],
      "subregion": "South America",
      "languages": {
        "spa": "Spanish"
      },
      "area": 1141748,
      "population": 50882884,
      "continents": [
        "America"
      ],
    }]
    expect(busqueda(dataTestCountries,inputSearch)).toEqual(resultTestSearch);
  });

})


 





/*it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/

/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
