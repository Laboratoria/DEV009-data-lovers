//import { example, anotherExample } from '../src/data.js';

import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto(' http://localhost:3000');
});


describe('Testing filtros películas', () => {
  it('debería mostrar las películas por año', () => {
    expect(typeof 'nombreFunción').toBe('function');
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
