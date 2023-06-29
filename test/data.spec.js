import {  anotherExample, sortBy } from '../src/data.js';


describe(sortBy, () => {
  it('is a function', () => {
    expect(typeof sortBy).toBe('function');
  });

  it('Debería retornar el arreglo ordenado de mayor a menor para `opcion1`', () => {
    const data = [
      {rt_score: 40},
      {rt_score: 100},
      {rt_score: 90},
    ];

    const expectedArrScore = [
      {rt_score: 100},
      {rt_score: 90},
      {rt_score: 40},
    ];

    expect(sortBy(data, 'opcion1')).toEqual(expectedArrScore);
  });

  it('Deberia de retornar el arreglo de A-Z para `opcion3`', () => {
    const data = [
      {title: 'C'},
      {title: 'A'},
      {title: 'B'},
    ];

    const expectedArrTitle = [
      {title: 'A'},
      {title: 'B'},
      {title: 'C'},
    ];

    expect(sortBy(data, 'opcion3')).toEqual(expectedArrTitle);
  });

  it('Deberia de retornar el arreglo de Z-A para `opcion2`', () => {
    const data = [
      {title: 'C'},
      {title: 'A'},
      {title: 'B'},
    ];

    const expectedArrTitle = [
      {title: 'C'},
      {title: 'B'},
      {title: 'A'},
    ];

    expect(sortBy(data, 'opcion2')).toEqual(expectedArrTitle);
  });
    
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toEqual('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
