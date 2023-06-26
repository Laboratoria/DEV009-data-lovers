import { contAmerica } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/countries/countries.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

const root = document.getElementById('root');
const allCountries = data.countries;
//const contAmerica = allCountries.continents;

console.log(contAmerica(allCountries))





