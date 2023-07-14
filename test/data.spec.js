
import funcionesPokemon from '../src/data';

const pokemon = [
  { num: '001', name: 'bulbasaur', type: ['grass', 'poison'] },
  { num: '002', name: 'ivysaur', type: ['grass', 'poison'] },
  { num: '005', name: 'charmeleon', type: ['fire'] },
];



// ------  Comprueba la funcion buscar pokemon por Name
describe('funcionesPokemon', () => {
  describe('funcionesPokemon.searchPokemon', () => {
    it('deberia retornar bulb', () => {
      const result = funcionesPokemon.searchPokemon(pokemon, 'bulb')
      expect(result).toEqual([{ num: '001', name: 'bulbasaur', type: ['grass', 'poison'] }]);
    });

    // ------  Comprueba la funcion buscar pokemon por Num
    it('deberia retornar 005', () => {
      const result = funcionesPokemon.searchPokemon(pokemon, '005')
      expect(result).toEqual([{ num: '005', name: 'charmeleon', type: ['fire'] }]);
    })
  });


  // ------  Comprueba la funcion seleccionar por type
  describe('funcionesPokemon.displayPokemonByType', () => {
    it('deberia retornar los pokemones de tipo grass', () => {
      const result = funcionesPokemon.displayPokemonByType(pokemon, 'grass')
      expect(result).toEqual([
        { num: '001', name: 'bulbasaur', type: ['grass', 'poison'] },
        { num: '002', name: 'ivysaur', type: ['grass', 'poison'] }]);
    })
  })


  // ------   Comprueba funcion para ordenar pokemon de A a Z 

  describe('funcionesPokemon', () => {
    describe('funcionesPokemon.orderPokemonAz', () => {
      it('deberia retornar los pokemon ordenados por nombre de la A a Z', () => {
        expect(funcionesPokemon.orderPokemonAz(pokemon)).toEqual([
          { num: '001', name: 'bulbasaur', type: ['grass', 'poison'] },
          { num: '005', name: 'charmeleon', type: ['fire'] },
          { num: '002', name: 'ivysaur', type: ['grass', 'poison'] }
        ]);
      });

      // ------   Comprueba funcion para ordenar pokemon de Z a A 
      it(' deberia retornar pokemones ordenados de la Z a la A',() => {
        expect(funcionesPokemon.orderPokemonZa(pokemon)).toEqual([
          { num: '002', name: 'ivysaur', type: ['grass', 'poison'] },
          { num: '005', name: 'charmeleon', type: ['fire'] },
          { num: '001', name: 'bulbasaur', type: ['grass', 'poison'] }
        ]);      
      });

    });
  });

  




})







