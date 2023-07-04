import {  sortByPopulation
} from "../src/data.js";

const countries = { "countries" : [
  {
    "name": {
      "common": "Guatemala",
      "official": "Republic of Guatemala"
    },
    "population": 16858333,
    
  },
  {
    "name": {
      "common": "Singapore",
      "official": "Republic of Singapore"
    },
    "population": 5685807,
  },
  {
    "name": {
      "common": "Bosnia and Herzegovina",
      "official": "Bosnia and Herzegovina"
    },
    "population": 3280815,
  },
  {
    "name": {
      "common": "Maldives",
      "official": "Republic of the Maldives"
    },
    "population": 540542,
  },
  {
    "name": {
      "common": "Latvia",
      "official": "Republic of Latvia"
    },
    "population": 1901548,
  },
  {
    "name": {
      "common": "Puerto Rico",
      "official": "Commonwealth of Puerto Rico"
    },
    "population": 3194034,
  },
]}


const countriesSortByPopulation = [
  {
    "name": {
      "common": "Guatemala",
      "official": "Republic of Guatemala"
    },
    "population": 16858333,

  },
  {
    "name": {
      "common": "Singapore",
      "official": "Republic of Singapore"
    },
    "population": 5685807,
  },
  {
    "name": {
      "common": "Bosnia and Herzegovina",
      "official": "Bosnia and Herzegovina"
    },
    "population": 3280815,
  },
  {
    "name": {
      "common": "Puerto Rico",
      "official": "Commonwealth of Puerto Rico"
    },
    "population": 3194034,
  },
  {
    "name": {
      "common": "Latvia",
      "official": "Republic of Latvia"
    },
    "population": 1901548,
  },
  {
    "name": {
      "common": "Maldives",
      "official": "Republic of the Maldives"
    },
    "population": 540542,
  },
];

// Test sortByPopulation
test('sortByPopulation should return countries sorted in ascending order',() => {
  const result = sortByPopulation(countries,-1);
  expect(result).toEqual(countriesSortByPopulation);
  expect(result).not.toHaveLength(7);
  expect(result).toHaveLength(6);
});