import { sortBy,filterByDirector,filterByYear } from '../src/data.js';

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

describe('filterByDirector',() =>{
  it('Deberia filtrar los datos por director',() => {
    const data = [
      {director: 'Hayao Miyazaki'},
      {director: 'Isao Takahata'},
      {director: 'Yoshifumi Kondo'},
      {director: 'Hiroyuki Morita'},
      {director: 'Goro Miyazaki'},
      {director: 'Hiromasa Yonebayashi'},
    ];

    const filteredData = [
      {director: 'Hayao Miyazaki'}
    ];
    expect (filterByDirector(data,'Hayao Miyazaki')).toEqual(filteredData)
  })
});

describe('filterByYear', () => {
  it('deberia filtrar la data por anio', () => {
    const data = [
      { release_date: '1988' },
      { release_date: '1992' },
      { release_date: '2004' },
    ];

    const filteredData = filterByYear(data, '1992');
    expect(filteredData).toEqual([{ release_date: '1992' }]);
  });
});