import { sortNameasc /*sortNameDes, sortNumYouger, sortNumLower, promPokemonEveryType*/ } from '../src/data.js';

const Pokemons = [{
  "num": "002",
  "name": "ivysaur",
  "type": [
    "grass",
    "poison"
  ]
},
{
  "num": "007",
  "name": "squirtle",
  "type": [
    "water"
  ]
},
{
  "num": "024",
  "name": "arbok",
  "type": [
    "poison"
  ]
}
];


//describe('vamos hacer las pruebas de la funcion obtener orden A-Z.', () => {
//it('la funcion debe retornar un a', () => {
// expect(typeof example).toEqual('function');
//});

//it('returns `example`', () => {
//expect(example()).toBe('example');
//});
//});


describe('sortNameasc', () => {
  it('deberia retornar los nombres de los pokemones ordenados de A-Z ' , () => {
    expect(sortNameasc(Pokemons, "az")).toEqual([{"name": "arbok", "num": "024", "type": ["poison"]}, {"name": "ivysaur", "num": "002", "type": ["grass", "poison"]}, {"name": "squirtle", "num": "007", "type": ["water"]}]);
  });

 
