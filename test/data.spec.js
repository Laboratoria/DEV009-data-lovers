
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
    it('deberia retornar 005', () => {
      const result = funcionesPokemon.searchPokemon(pokemon, '005')
      expect(result).toEqual([{ num: '005', name: 'charmeleon', type: ['fire'] }]);
    })
  });





  describe('funcionesPokemon.displayPokemonByType', () => {
    it('deberia retornar los pokemones de tipo grass', () => {
      const result = funcionesPokemon.displayPokemonByType(pokemon, 'grass')
      expect(result).toEqual([
        { num: '001', name: 'bulbasaur', type: ['grass', 'poison'] },
        { num: '002', name: 'ivysaur', type: ['grass', 'poison'] }]);
    })
  })


  // ------------         Comprueba que los pokemon esten ordenados de A a Z 

  describe('funcionesPokemon.orderPokemonByName', () => {
    it('deberia retornar los pokemon ordenados por nombre de la A a Z', () => {
      const actual = [
        { num: '001', name: 'bulbasaur', type: ['grass', 'poison'] },
        { num: '002', name: 'ivysaur', type: ['grass', 'poison'] },
        { num: '005', name: 'charmeleon', type: ['fire'] }];
      const expected = [
        { num: '001', name: 'bulbasaur', type: ['grass', 'poison'] },
        { num: '005', name: 'charmeleon', type: ['fire'] },
        { num: '002', name: 'ivysaur', type: ['grass', 'poison'] }
      ];
      actual.sort(funcionesPokemon.orderPokemonByName);
      expect(actual).toEqual(expected)
    });

  })



  describe('funcionesPokemon.orderPokemonByName', () => {
    it('deberia retornar la data actual ya que estan ordenados A Z', () => {
      const actual = [
        { num: '001', name: 'bulbasaur', type: ['grass', 'poison'] },
        { num: '005', name: 'charmeleon', type: ['fire'] },
        { num: '002', name: 'ivysaur', type: ['grass', 'poison'] }];
      const expected = [
        { num: '001', name: 'bulbasaur', type: ['grass', 'poison'] },
        { num: '005', name: 'charmeleon', type: ['fire'] },
        { num: '002', name: 'ivysaur', type: ['grass', 'poison'] }
      ];
      actual.sort(funcionesPokemon.orderPokemonByName);
      expect(actual).toEqual(expected)
    });
  })

})







