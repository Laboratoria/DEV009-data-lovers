import { alphabeticalOrderFilms, alphabeticalOrderPeople, yearOrderMovies, countSpecies, countVehicles, prom } from '../src/data.js';

const moviesDataGhibli = {
  "films": [
    {
      "title": "Porco Rosso",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Porco_Rosso.jpg",
      "release_date": "1992",
      "rt_score": "94",
      "people": [
        {
          "name": "Porco Rosso",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/02/Porcellino%21.png",
          "age": "47",
          "specie": "Human"
        },
        {
          "name": "Donald Curtis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/61/Donald_Curtis.jpg",
          "age": "Adult",
          "specie": "Human"
        }
      ],
      "vehicles": [
        {
          "name": "Red Wing",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8f/Porco%27s_Plane.jpg"
        },
        {
          "name": "Dabohaze",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/99/Aiuto_Gang.jpg"
        }
      ]
    },
    
    {
      "title": "My Neighbor Totoro",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
      "release_date": "1988",
      "rt_score": "93",
      "people": [
        {
          "name": "Satsuki Kusakabe",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
          "age": "11",
          "specie": "Human"
        },
        {
          "name": "Mei Kusakabe",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/01/Mei_Kusakabe.jpg",
          "age": "4",
          "specie": "Human"
        }
      ]
    },
    {

      "title": "Castle in the Sky",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",
      "rt_score": "95",
      "people": [
        {
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "age": "13",
          "specie": "Human"
        },
        {
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "age": "13",
          "specie": "Human"
        }
      ],
      "vehicles": [
        {
          "name": "Air Destroyer Goliath",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png"
        }
      ]
    }
  ]
};


describe('Testing filtrar películas por orden alfabético', () => {
  const moviesDataDataGhibli = {
    "films": [
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
        "release_date": "1986",
        "rt_score": "95",
        "people": [
          {
            "name": "Pazu",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
            "age": "13",
            "specie": "Human"
          },
          {
            "name": "Lusheeta Toel Ul Laputa",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
            "age": "13",
            "specie": "Human"
          }
        ],
        "vehicles": [
          {
            "name": "Air Destroyer Goliath",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png"
          }
        ]
      },
      {
        "title": "My Neighbor Totoro",
        "director": "Hayao Miyazaki",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
        "release_date": "1988",
        "rt_score": "93",
        "people": [
          {
            "name": "Satsuki Kusakabe",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
            "age": "11",
            "specie": "Human"
          },
          {
            "name": "Mei Kusakabe",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/01/Mei_Kusakabe.jpg",
            "age": "4",
            "specie": "Human"
          }
        ]
      },
      {
        "title": "Porco Rosso",
        "director": "Hayao Miyazaki",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Porco_Rosso.jpg",
        "release_date": "1992",
        "rt_score": "94",
        "people": [
          {
            "name": "Porco Rosso",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/02/Porcellino%21.png",
            "age": "47",
            "specie": "Human"
          },
          {
            "name": "Donald Curtis",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/61/Donald_Curtis.jpg",
            "age": "Adult",
            "specie": "Human"
          }
        ],
        "vehicles": [
          {
            "name": "Red Wing",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8f/Porco%27s_Plane.jpg"
          },
          {
            "name": "Dabohaze",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/99/Aiuto_Gang.jpg"
          }
        ]
      }
    ]
  };
  it('debería mostrar las películas ordenadas alfabéticamente', () => {
    expect(typeof alphabeticalOrderFilms).toBe('function');
  });
  
  it('returns `Castle in the Sky, My Neighbor Totoro, Porco Rosso`', () => {
    const films = moviesDataGhibli.films; 
    expect(alphabeticalOrderFilms(films)).toEqual(moviesDataDataGhibli.films);
  });
});

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

describe('Testing filtrar películas por orden cronológico', () => {
  it('debería ser una función', () => {
    expect(typeof yearOrderMovies).toBe('function');
  });

  it('debería retornar los nombres de películas ordenadas por año de lanzamiento', () => {
    const films = moviesDataGhibli.films;
    const expectedFilms = ['1986', '1988', '1992'];
    const filmsList = yearOrderMovies(films).map(films => films.release_date);
    expect(filmsList).toEqual(expectedFilms);
  });
});










/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
