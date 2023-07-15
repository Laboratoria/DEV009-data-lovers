import { busqueda, orderAZ,orderZA,GetCountriesByContinent } from '../src/data.js';
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
/*Test busqueda*/
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
});

/*Test ordenar A-Z*/
describe('orderAZ', () => {
  it('is a function', () => {
    expect(typeof busqueda).toBe('function');
  });

  it('Ordenar de la A-Z', () => {
    const resultTestOrderAZ = [{
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
    } ]
    expect(orderAZ(dataTestCountries)).toEqual(resultTestOrderAZ);
  });
});
/*Test ordenar Z-A*/
describe('orderZA', () => {
  it('is a function', () => {
    expect(typeof busqueda).toBe('function');
  });

  it('Ordenar de la Z-A', () => {
    const resultTestOrderZA = [{
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
    }, {
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
    }, {
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
    }]
    expect(orderZA(dataTestCountries)).toEqual(resultTestOrderZA);
  });
});

describe('Test para filtrar por allContinents', () => {
  it('is a function', () => {
    expect(typeof GetCountriesByContinent).toBe('function');
  });

  it('Filtrar por continente Americano', () => {
    const menuItem= "America"
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
    expect(GetCountriesByContinent(dataTestCountries,menuItem)).toEqual(resultTestSearch);
  });
  it('Filtrar por continente Europeo', () => {
    const menuItem2= "Europe"
    const resultTestSearch = [{
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
    }]
    expect(GetCountriesByContinent(dataTestCountries,menuItem2)).toEqual(resultTestSearch);
  });
  it('Filtrar por continente Asiatico', () => {
    const menuItem3= "Asia"
    const resultTestSearch =[{
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
    }]
    expect(GetCountriesByContinent(dataTestCountries,menuItem3)).toEqual(resultTestSearch);
  });
  it('Filtrar por continente Africano', () => {
    const menuItem4= "Africa"
    const resultTestSearch=[{
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
    }];
    expect(GetCountriesByContinent(dataTestCountries,menuItem4)).toEqual(resultTestSearch);
  });
  it('Filtrar por continente Antartico', () => {
    const menuItem5= "Antarctica"
    const resultTestSearch=[{
      "name": {
        "common": "Antarctica"
      },
      "area": 14000000,
      "population": 1000,
      "continents": [
        "Antarctica"
      ]
    }];
    expect(GetCountriesByContinent(dataTestCountries,menuItem5)).toEqual(resultTestSearch);
  });
  it('Filtrar por continente Oceanico', () => {
    const menuItem5= "Oceania"
    const resultTestSearch=[{
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
      ]
    }];
    expect(GetCountriesByContinent(dataTestCountries,menuItem5)).toEqual(resultTestSearch);
  });
});







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



  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
