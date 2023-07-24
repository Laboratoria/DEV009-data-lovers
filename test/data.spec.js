import { sortName, sortNum, resultName, deleteDuplicate, concatType, promPokemonEveryType} from '../src/data.js';

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

const pokemonsTypeRepeat = ['grass', 'poison', 'fire', 'fire', 'poison','rock', 'grass'];
const resultDeletePokemonsTypeDuplicate= ['grass', 'poison', 'fire', 'rock'];
const resultConcatType = [ 'water','grass', 'poison', 'poison']
const resultPromPokemonEveryType = {grass:'25.00', poison:'50.00',water:'25.00'}

describe('sortNum', () => {
  it('deberia retornar los nombres de los pokemones ordenados del 251 al 1', () => {
    expect(sortNum(Pokemons, "numberMayor")).toEqual([
      { num: '024', name: 'arbok', type: ['poison'] },
      { num: '007', name: 'squirtle', type: ['water'] },
      { num: '002', name: 'ivysaur', type: ['grass', 'poison'] }

    ]);
  });
  it('deberia retornar los nombres de los pokemones ordenados del 1 al 251 ', () => {
    expect(sortNum(Pokemons, "numberMenor")).toEqual([
      { num: '002', name: 'ivysaur', type: ['grass', 'poison'] },
      { num: '007', name: 'squirtle', type: ['water'] },
      { num: '024', name: 'arbok', type: ['poison'] }
    ]);
  });
});

describe('sortName', () => {
  it('deberia retornar los nombres de los pokemones ordenados de A-Z ', () => {
    expect(sortName(Pokemons, "az")).toEqual([
      { num: '024', name: 'arbok', type: ['poison'] },
      { num: '002', name: 'ivysaur', type: ['grass', 'poison'] },
      { num: '007', name: 'squirtle', type: ['water'] }
    ]);
  });

  it('deberia retornar los nombres de los pokemones ordenados de la Z-A`', () => {
    expect(sortName(Pokemons, "za")).toEqual([
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


describe('concatType', () => {
  it('deberia retornar en un array todos los tipos de pokemones por cada objeto de pokemon pokemon' , () => {
    const calculator = concatType(Pokemons)
    expect(calculator).toEqual(resultConcatType);
  });
});

describe('deleteDuplicate', () => {
  it('deberia retornar el calculo los todos los tipos de pokemones sin repetirse' , () => {
    const calculator = deleteDuplicate(pokemonsTypeRepeat)
    expect(calculator).toEqual(resultDeletePokemonsTypeDuplicate);
  });
});

describe('promPokemonEveryType', () => {
  it('deberia retornar el calculo agregado de los tipos de los pokemones' , () => {
    const calculator = promPokemonEveryType(Pokemons)
    expect(calculator).toEqual(resultPromPokemonEveryType);
  });
}); 
