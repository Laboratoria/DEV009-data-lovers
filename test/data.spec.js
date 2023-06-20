// import { example, anotherExample } from '../src/data.js';
import { generateCountriesList, searchCountries } from '../src/data.js';

//crear una const que sera igual a un objeto

const countries = [
  {
    "name": {
      "common": "Guatemala",
      "official": "Republic of Guatemala"
    },
    "capital": [
      "Guatemala City"
    ],
    "languages": {
      "spa": "Spanish"
    },
    "borders": [
      "BLZ",
      "SLV",
      "HND",
      "MEX"
    ],
    "area": 108889,
    "population": 16858333,
    "gini": {
      "2014": 48.3
    },
    "continents": [
      "America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gt.png",
      "svg": "https://flagcdn.com/gt.svg",
      "alt": "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band."
    }
  },
  {
    "name": {
      "common": "Singapore",
      "official": "Republic of Singapore"
    },
    "capital": [
      "Singapore"
    ],
    "languages": {
      "zho": "Chinese",
      "eng": "English",
      "msa": "Malay",
      "tam": "Tamil"
    },
    "area": 710,
    "population": 5685807,
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sg.png",
      "svg": "https://flagcdn.com/sg.svg",
      "alt": "The flag of Singapore is composed of two equal horizontal bands of red and white. On the hoist side of the red band is a fly-side facing white crescent which partially encloses five small five-pointed white stars arranged in the shape of a pentagon."
    }
  },
  {
    "name": {
      "common": "Bosnia and Herzegovina",
      "official": "Bosnia and Herzegovina"
    },
    "capital": [
      "Sarajevo"
    ],
    "languages": {
      "bos": "Bosnian",
      "hrv": "Croatian",
      "srp": "Serbian"
    },
    "borders": [
      "HRV",
      "MNE",
      "SRB"
    ],
    "area": 51209,
    "population": 3280815,
    "gini": {
      "2011": 33
    },
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ba.png",
      "svg": "https://flagcdn.com/ba.svg",
      "alt": "The flag of Bosnia and Herzegovina has a blue field, at the center of which is a large yellow hoist-side facing right-angled triangle that is based on the top edge and spans the height of the field. Adjacent to the hypotenuse of this triangle are nine adjoining five-pointed white stars with the top and bottom stars cut in half by the edges of the field."
    }
  },
  {
    "name": {
      "common": "Maldives",
      "official": "Republic of the Maldives"
    },
    "capital": [
      "Malé"
    ],
    "languages": {
      "div": "Maldivian"
    },
    "area": 300,
    "population": 540542,
    "gini": {
      "2016": 31.3
    },
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mv.png",
      "svg": "https://flagcdn.com/mv.svg",
      "alt": "The flag of Maldives has a red field, at the center of which is a large green rectangle bearing a fly-side facing white crescent."
    }
  },
  {
    "name": {
      "common": "Latvia",
      "official": "Republic of Latvia"
    },
    "capital": [
      "Riga"
    ],
    "languages": {
      "lav": "Latvian"
    },
    "borders": [
      "BLR",
      "EST",
      "LTU",
      "RUS"
    ],
    "area": 64559,
    "population": 1901548,
    "gini": {
      "2018": 35.1
    },
    "continents": [
      "Europe"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lv.png",
      "svg": "https://flagcdn.com/lv.svg",
      "alt": "The flag of Latvia has a carmine-red field with a thin white horizontal band across the middle of the field."
    }
  }
];

describe('generateCountriesList result should be a function', () => {
  it('is a function', () => {
    expect(typeof generateCountriesList).toBe('function')
  });
});

describe('generateCountriesList', () => {
  it('Should return an array with countries names', () => {
    expect(generateCountriesList(countries)).toEqual(["Singapore","Bosnia and Herzegovina", "Guatemala", "Latvia", "Maldives"].sort())
  })
});

describe('searchCountries should return an object with a country information', () => {
  it('Should return an object', () => {
    expect(typeof (searchCountries(countries, 'Si'))).toBe('object')
  })
});




// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
