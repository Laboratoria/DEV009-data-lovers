import { example, anotherExample,filterData} from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

describe('filterData',() => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('returns `filterData`', () => {
    const received = filterData([{'type':['fire','dark'],'rarity': 'normal',},{'type':['water','poison'],'rarity': 'mythic',},
      {'type': ['grass','firy','bug'],'rarity' : 'legendary'}],'mythic','rarity');
    const expected = Array(Object ({rarity: 'mythic', type: ['water', 'poison']}));
    expect(received).toEqual(expected);
  });

});