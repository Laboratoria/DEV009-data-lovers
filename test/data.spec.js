// import { example, anotherExample } from '../src/data.js';
import countriesDataAdmin from '../src/data.js';
//crear una const que sera igual a un objeto 
describe('generateSection', () => {
  it('is a function', () => {
    expect(typeof countriesDataAdmin).toBe('object')
  })
});


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
