import { sortNameasc, sortNumYouger, resultName /*sortNameDes, sortNumYouger, sortNumLower, promPokemonEveryType*/ } from '../src/data.js';

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

describe('sortNumYouger', () => {
  it('deberia retornar los nombres de los pokemones ordenados del 251 al 1', () => {
    expect(sortNumYouger(Pokemons, "numberMayor")).toEqual([
      { num: '024', name: 'arbok', type: ['poison'] },
      { num: '007', name: 'squirtle', type: ['water'] },
      { num: '002', name: 'ivysaur', type: ['grass', 'poison'] }

    ]);
  });
  it('deberia retornar los nombres de los pokemones ordenados del 1 al 251 ', () => {
    expect(sortNumYouger(Pokemons, "numberMenor")).toEqual([
      { num: '002', name: 'ivysaur', type: ['grass', 'poison'] },
      { num: '007', name: 'squirtle', type: ['water'] },
      { num: '024', name: 'arbok', type: ['poison'] }
    ]);
  });
});

describe('sortNameasc', () => {
  it('deberia retornar los nombres de los pokemones ordenados de A-Z ', () => {
    expect(sortNameasc(Pokemons, "az")).toEqual([
      { num: '024', name: 'arbok', type: ['poison'] },
      { num: '002', name: 'ivysaur', type: ['grass', 'poison'] },
      { num: '007', name: 'squirtle', type: ['water'] }
    ]);
  });

  it('deberia retornar los nombres de los pokemones ordenados de la Z-A`', () => {
    expect(sortNameasc(Pokemons, "za")).toEqual([
      { num: '007', name: 'squirtle', type: ['water'] },
      { num: '002', name: 'ivysaur', type: ['grass', 'poison'] },
      { num: '024', name: 'arbok', type: ['poison'] }
    ]);
  });
});

describe('resultName', () => {
  it('deberia retornar los nombres de los pokemones los nombres de los pokemones' , () => {
    const filtroIvy = resultName(Pokemons, "iv")
    expect(filtroIvy).toEqual([ { num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ] }]);
  });
});