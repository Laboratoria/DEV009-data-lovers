import { sortBy,filterByDirector,filterByYear,getCount,getPercentage } from '../src/data.js';

const exampleData = [
  {
    "title": "Ponyo on the Cliff by the Sea",
    "director": "Hayao Miyazaki",
    "release_date": "2008",
    "rt_score": "92",
  },

  {
    "title": "Howl's Moving Castle",
    "director": "Hayao Miyazaki",
    "release_date": "2004",
    "rt_score": "87",
  },

  {
    "title": "The Cat Returns",
    "director": "Hiroyuki Morita",
    "release_date": "2002",
    "rt_score": "89",
  },

]

describe(sortBy, () => {
  it('is a function', () => {
    expect(typeof sortBy).toBe('function');
  });


  it('Debería retornar el arreglo ordenado de mayor a menor para `opcion1`', () => {

    expect(sortBy(exampleData, 'opcion1')[0].rt_score).toEqual("92");
    expect(sortBy(exampleData, 'opcion1')[1].rt_score).toEqual("89");
    expect(sortBy(exampleData, 'opcion1')[2].rt_score).toEqual("87");
  });

  it('Deberia de retornar el arreglo de A-Z para `opcion3`', () => {

    const expectedArrTitle = [
      {
        "title": "Howl's Moving Castle",
        "director": "Hayao Miyazaki",
        "release_date": "2004",
        "rt_score": "87",
      },

      {
        "title": "Ponyo on the Cliff by the Sea",
        "director": "Hayao Miyazaki",
        "release_date": "2008",
        "rt_score": "92",
      },

      {
        "title": "The Cat Returns",
        "director": "Hiroyuki Morita",
        "release_date": "2002",
        "rt_score": "89",
      },
    ];

    expect(sortBy(exampleData, 'opcion3')).toEqual(expectedArrTitle);
  });

  it('Deberia de retornar el arreglo de Z-A para `opcion2`', () => {

    const expectedArrTitle = [
      {
        "title": "The Cat Returns",
        "director": "Hiroyuki Morita",
        "release_date": "2002",
        "rt_score": "89",
      },

      {
        "title": "Ponyo on the Cliff by the Sea",
        "director": "Hayao Miyazaki",
        "release_date": "2008",
        "rt_score": "92",
      },

      {
        "title": "Howl's Moving Castle",
        "director": "Hayao Miyazaki",
        "release_date": "2004",
        "rt_score": "87",
      },
    ];

    expect(sortBy(exampleData, 'opcion2')).toEqual(expectedArrTitle);
  });
    
});

/*describe(sortBy, () => {
  it('is a function', () => {
    expect(typeof sortBy).toBe('function');
  });*/

describe('filterByDirector',() =>{
  it('Deberia filtrar los datos por director',() => {

    const filteredData = [
      {
        "title": "Ponyo on the Cliff by the Sea",
        "director": "Hayao Miyazaki",
        "release_date": "2008",
        "rt_score": "92",
      },

      {
        "title": "Howl's Moving Castle",
        "director": "Hayao Miyazaki",
        "release_date": "2004",
        "rt_score": "87",
      },
    ];

    expect (filterByDirector(exampleData,'Hayao Miyazaki')).toEqual(filteredData)
  })
});

describe('filterByYear', () => {
  it('deberia filtrar la data por anio', () => {

    const filteredData = [
      {
        "title": "The Cat Returns",
        "director": "Hiroyuki Morita",
        "release_date": "2002",
        "rt_score": "89",
      },

    ];
    expect(filterByYear(exampleData,'2002')).toEqual(filteredData)
  });
});

describe('getCount',() =>{
  it('deberia contar la cantidad de peliculas por director',() => {
    
    expect(getCount(exampleData,'Hayao Miyazaki', '2008')).toEqual(1);
  });

  it('deberia retornar 0 cuando no se tienen todos los parametros', ()=> {
    expect(getCount(exampleData)).toEqual(0);
  })
});

describe('getPercentage',()=>{
  it('deberia expresar en porcentaje la cantidad de peliculas por director',()=>{

    expect(getPercentage(exampleData, 2)).toEqual("66.67")
  });
});

/*describe('getPercentage',()=>{
  it('deberia expresar en porcentaje la cantidad de peliculas por director',()=>{
    const films =20; // data = 3
    const count=5; // 3
    const result=getPercentage(films,count);
    expect(result).toEqual(25)
  })
})*/