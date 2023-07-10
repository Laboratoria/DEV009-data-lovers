import { sortNameasc, sortNameDes, sortNumYouger, sortNumLower, promPokemonEveryType} from '../src/data.js';

const firstPokemon = {
  "num": "002",
  "name": "ivysaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
    "type":[ 
      "grass",
      "poison"
    ]
  };

  const secondPokemon = {
    "num": "007",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ]
  };

  const thridPokemon = {
    "num": "024",
    "name": "arbok",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "poison"
    ]
    }





describe('vamos hacer las pruebas de la funcion obtener orden A-Z', () => {
  it('la funcion debe retornar un a', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('sortNameasc', () => {
  it('deberia retornar a', () => {
    expect(typeof anotherExample).toEqual('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
