import { sortNameasc, sortNumYouger /*sortNameDes, sortNumYouger, sortNumLower, promPokemonEveryType*/ } from '../src/data.js';

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


describe('sortNumYouger', () => {
  it('deberia retornar los nombres de los pokemones ordenados del 251 al 1', () => {
    expect(sortNumYouger(Pokemons, "numberMayor")).toEqual( [
      { num: '024', name: 'arbok', type: [ 'poison' ] },
      { num: '007', name: 'squirtle', type: [ 'water' ] },
      { num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ] }
     
    ]);
  });
  it('deberia retornar los nombres de los pokemones ordenados del 1 al 251 ' , () => {
    expect(sortNumYouger(Pokemons, "numberMenor")).toEqual( [   
      { num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ] }, 
      { num: '007', name: 'squirtle', type: [ 'water' ] },                                                                                                                    
      { num: '024', name: 'arbok', type: [ 'poison' ] }
    ]);
  });
});



describe('sortNameasc', () => {
  it('deberia retornar los nombres de los pokemones ordenados de A-Z ' , () => {
    expect(sortNameasc(Pokemons, "az")).toEqual( [                                                                                                                            
      { num: '024', name: 'arbok', type: [ 'poison' ] },
      { num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ] },
      { num: '007', name: 'squirtle', type: [ 'water' ] }
    ]);
  });

  it('deberia retornar los nombres de los pokemones ordenados de la Z-A`', () => {
    expect(sortNameasc(Pokemons, "za")).toEqual( [
      { num: '007', name: 'squirtle', type: [ 'water' ] },
      { num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ] },
      { num: '024', name: 'arbok', type: [ 'poison' ] }
    ]);
  });
});

