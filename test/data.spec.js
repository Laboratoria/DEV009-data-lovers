import {filterData,sortData} from '../src/data.js';

describe('filterData',() => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('filtra correctamente si la propiedad en un objeto', () => {
    const received = filterData([{type:['fire','dark'],rarity: 'normal',},{type:['water','poison'],rarity: 'mythic',},
      {type: ['grass','firy','bug'],rarity : 'legendary',}],'water','type');
    const expected = Array(Object ({rarity: 'mythic', type: ['water', 'poison']}));
    expect(received).toEqual(expected);
  });
  it('filtra correctamente si la propiedad es un string',() => {
    const received = filterData([{name : 'Ares', color: 'black', age : '3 years',},
      {name : 'Kira', color :'brown', age :'3 years',},
      {name : 'Minnie', color :'brown', age :'5 years',}],'3 years','age');
    const expected = Array(Object({name : 'Ares', color: 'black', age : '3 years'}),
      Object({name : 'Kira', color :'brown', age :'3 years'}));
    expect(received).toEqual(expected);
  });
});

describe('sortData',() => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  it('ordena correctamente de forma ascendente strings al seleccionar una propiedad', () => {
    const received = sortData([{type:['fire','dark'],rarity: 'normal',},{type:['water','poison'],rarity: 'mythic',},
      {type: ['grass','firy','bug'],rarity : 'legendary',}],'rarity','ascendente');
    const expected = Array(Object ({type: ['grass','firy','bug'],rarity : 'legendary'}),
      Object({type:['water','poison'],rarity: 'mythic'}),Object({type:['fire','dark'],rarity: 'normal'}),);
    expect(received).toEqual(expected);
  });
  it('ordena correctamente de forma descendente strings al seleccionar una propiedad',() => {
    const received = sortData([{name : 'Ares', color: 'black', age : 3,},
      {name : 'Kira', color :'brown', age :2,},
      {name : 'Minnie', color :'brown', age :1,}],'name','descendente');
    const expected = Array(Object({name : 'Minnie', color :'brown', age :1,}),
      Object({name : 'Kira', color :'brown', age :2}),
      Object({name : 'Ares', color: 'black', age : 3}));
    expect(received).toEqual(expected);
  });
  it('ordena correctamente de forma ascendente numeros al seleccionar una propiedad',() => {
    const received = sortData([{name : 'Ares', color: 'black', age : 3,},
      {name : 'Kira', color :'brown', age :2,},
      {name : 'Minnie', color :'brown', age :1,}],'age','ascendente');
    const expected = Array(Object({name : 'Minnie', color :'brown', age :1,}),
      Object({name : 'Kira', color :'brown', age :2}),
      Object({name : 'Ares', color: 'black', age : 3}));
    expect(received).toEqual(expected);
  });
  it('ordena correctamente de forma descendente numeros al seleccionar una propiedad',() => {
    const received = sortData([{name : 'Ares', color: 'black', age : 3,},
      {name : 'Kira', color :'brown', age :2,},
      {name : 'Minnie', color :'brown', age :1,}],'age','descendente');
    const expected = Array(Object({name : 'Ares', color: 'black', age : 3}),
      Object({name : 'Kira', color :'brown', age :2}),
      Object({name : 'Minnie', color :'brown', age :1,}));
    expect(received).toEqual(expected);
  });
});
