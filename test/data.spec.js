import { alphabeticalOrderFilms, alphabeticalOrderPeople, yearOrderMovies, directorOrderMovies, countSpecies, countVehicles, prom, moviesOrderPeople } from '../src/data.js';

const moviesDataGhibli = {
  "films": [
    {
      "title": "Porco Rosso",
      "director": "Hayao Miyazaki",
      "release_date": "1992",
      "rt_score": "not a number",
      "people": [
        {
          "name": "Porco Rosso",
          "age": "47",
          "specie": "Human"
        },
        {
          "name": "Donald Curtis",
          "age": "Adult",
          "specie": "Human"
        }
      ],
      "vehicles": [
        {
          "name": "Red Wing",
        },
        {
          "name": "Dabohaze",
        }
      ]
    },
    
    {
      "title": "My Neighbor Totoro",
      "director": "Hayao Miyazaki",
      "release_date": "1988",
      "rt_score": "93",
      "people": [
        {
          "name": "Satsuki Kusakabe",
          "age": "11",
          "specie": "Human"
        },
        {
          "name": "Mei Kusakabe",
          "age": "4",
          "specie": "Human"
        }
      ]
    },
    {

      "title": "Castle in the Sky",
      "director": "Hayao Miyazaki",
      "release_date": "1986",
      "rt_score": "95",
      "people": [
        {
          "name": "Pazu",
          "age": "13",
          "specie": "Human"
        },
        {
          "name": "Lusheeta Toel Ul Laputa",
          "age": "13",
          "specie": "Human"
        }
      ],
      "vehicles": [
        {
          "name": "Air Destroyer Goliath",
        }
      ]
    }
  ]
};

//__________________________________________________________________________________
describe('Testing filtrar películas por orden alfabético', () => {
  it('debería mostrar las películas ordenadas alfabéticamente', () => {
    expect(typeof alphabeticalOrderFilms).toBe('function');
  });
  
  it('returns `Castle in the Sky, My Neighbor Totoro, Porco Rosso`', () => {
    const films = moviesDataGhibli.films; 
    expect(alphabeticalOrderFilms(films)[0].title).toEqual("Castle in the Sky");
    expect(alphabeticalOrderFilms(films)[1].title).toEqual("My Neighbor Totoro");
    expect(alphabeticalOrderFilms(films)[2].title).toEqual("Porco Rosso");
  });
});
//__________________________________________________________________________________
describe('Contar número de especies', () => {
  it('debería ser una función', () => {
    expect(typeof countSpecies).toBe('function');
  });
  
  it('debería retornar el total de especies únicas en la data proporcionada', () => {
    const films = moviesDataGhibli.films;
    const totalSpecies = countSpecies(films);
    expect(totalSpecies).toBe(1);
  });
});
//__________________________________________________________________________________
describe('Contar número de vehículos', () => {
  it('debería ser una función', () => {
    expect(typeof countVehicles).toBe('function');
  });
  
  it('debería retornar el total de vehículos únicos en la data proporcionada', () => {
    const films = moviesDataGhibli.films;
    const totalVehicles = countVehicles(films);
    expect(totalVehicles).toBe(3);
  });
});
//__________________________________________________________________________________
describe('Promediar puntajes', () => {
  it('debería ser una función', () => {
    expect(typeof prom).toBe('function');
  });
  
  it('debería retornar el promedio de puntaje en rotten tomatoes para la data proporcionada', () => {
    const films = moviesDataGhibli.films;
    const promMovies = prom(films);
    expect(promMovies).toBe(94);
  });
});
//__________________________________________________________________________________
describe('Testing filtrar personajes por orden alfabético', () => {
  it('debería ser una función', () => {
    expect(typeof alphabeticalOrderPeople).toBe('function');
  });

  it('debería retornar el listado de personas ordenadas alfabéticamente', () => {
    const films = moviesDataGhibli.films;
    const expectedPeople = [
      'Donald Curtis',
      'Lusheeta Toel Ul Laputa',
      'Mei Kusakabe',
      'Pazu',
      'Porco Rosso',
      'Satsuki Kusakabe',
    ];
    const peopleList = alphabeticalOrderPeople(films).map(person => person.name);
    expect(peopleList).toEqual(expectedPeople);
  });
});
//__________________________________________________________________________________
describe('Testing filtrar películas por orden cronológico', () => {
  it('debería ser una función', () => {
    expect(typeof yearOrderMovies).toBe('function');
  });

  it('debería retornar los nombres de películas ordenadas por año de lanzamiento', () => {
    const films = moviesDataGhibli.films;
    const expectedFilms = [
      { "title": "Castle in the Sky", "release_date": "1986" },
      { "title": "My Neighbor Totoro", "release_date": "1988" },
      { "title": "Porco Rosso", "release_date": "1992" }
    ];
    const filmsList = yearOrderMovies(films);
    expect(filmsList).toEqual(expectedFilms);
  });
});
//__________________________________________________________________________________
describe('Testing filtrar películas por orden director', () => {
  it('debería ser una función', () => {
    expect(typeof directorOrderMovies).toBe('function');
  });

  it('debería retornar los nombres de películas ordenadas por cada director', () => {
    const films = moviesDataGhibli.films;
    const expectedFilmsDirectors = [
      { "title": "Castle in the Sky", "director": "Hayao Miyazaki" },
      { "title": "My Neighbor Totoro", "director": "Hayao Miyazaki" },
      { "title": "Porco Rosso", "director": "Hayao Miyazaki" },
    ];
    const filmsList = directorOrderMovies(films);
    expect(filmsList).toEqual(expectedFilmsDirectors);
  });
});
//__________________________________________________________________________________
describe('Testing filtrar personajes por películas', () => {
  it('debería ser una función', () => {
    expect(typeof moviesOrderPeople).toBe('function');
  });

  it('debería retornar los nombres de personajes ordenados por películas', () => {
    const films = moviesDataGhibli.films;
    expect(moviesOrderPeople(films)[0]).toEqual({ "name": "Pazu", "film": "Castle in the Sky" });
    expect(moviesOrderPeople(films)[1]).toEqual({ "name": "Lusheeta Toel Ul Laputa", "film": "Castle in the Sky" });
    expect(moviesOrderPeople(films)[2]).toEqual({ "name": "Satsuki Kusakabe", "film": "My Neighbor Totoro" });

  });
});






