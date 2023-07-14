import { prom, countSpecies, countVehicles, alphabeticalOrderPeople, alphabeticalOrderFilms } from '../src/data.js';

//import { test, expect } from '';

test.beforeEach(async ({page}) => {
  await page.goto(' http://localhost:3000');
});


describe('Testing filtros películas', () => {
  it('debería mostrar las películas ordenadas alfabéticamente', () => {
    expect(typeof alphabeticalOrderFilms).toBe('alphabeticalOrderFilms');
  });
});


/*/describe('example', () => {
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
});*/
