
import funcionesPokemon from '../src/data';

const pokemon = [
  { num: '001', name: 'bulbasaur', type: ['grass', 'poison'] },
  { num: '002', name: 'ivysaur', type: ['grass', 'poison'] },
  { num: '005', name: 'charmeleon', type: ['fire'] },
];

describe('funcionesPokemon', () => {
  describe('funcionesPokemon.searchPokemon', () => {
    it('deberia retornar bulb', () => {
      const result = funcionesPokemon.searchPokemon(pokemon, 'bulb')
      expect(result).toEqual([{ num: '001', name: 'bulbasaur', type: ['grass', 'poison'] }]);
    });
  });
})

describe('funcionesPokemon', () => {
  describe('funcionesPokemon.searchPokemon', () => {
    it('deberia retornar 005', () => {
      const result = funcionesPokemon.searchPokemon(pokemon, '005')
      expect(result).toEqual([{ num: '005', name: 'charmeleon', type: ['fire'] }]);
    })
  });
})








