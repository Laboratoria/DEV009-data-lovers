import { example, anotherExample } from '../src/data.js';


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
\

/*import {filterTeamIta} from '../src/data.js'
//falta describe/expect/tobe ==/crear data propia
it('Debe filtrar por Italia',()=>{
    expect(filterTeamIta()).tobe(team === 'Italy') //toEqual
}),*/