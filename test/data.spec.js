import {filteredStatus, filteredSpecies, filteredGender, filteredOrder, filteredSearch, porcentajeCalculo} from '../src/data.js';
 


describe('test para filtrar status', () => {
  it('test para validar status alive de los personjes', () => {
    const statusAlive = 'Alive'
    const dataStatusAlive = [{
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
    },       {
      "id": 7,
      "name": "Abradolf Lincler",
      "status": "unknown",
    }]
    const resultadoEsperadoAlive = [{
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
    }]
    expect(filteredStatus (dataStatusAlive, statusAlive)).toEqual(resultadoEsperadoAlive)
  });
  it('test para validar el status dead de los personajes', () => {
    const statusDead = 'Dead'
    const dataStatusDead = [{
      "id": 10,
      "name": "Alan Rails",
      "status": "Dead",
      "species": "Human",
      "type": "Superhuman (Ghost trains summoner)",
      "gender": "Male",

    },
    {
      "id": 11,
      "name": "Albert Einstein",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
    },
    {
      "id": 12,
      "name": "Alexander",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
    },      {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
    }]
    const resultadoEsperadoDead = [{
      "id": 10,
      "name": "Alan Rails",
      "status": "Dead",
      "species": "Human",
      "type": "Superhuman (Ghost trains summoner)",
      "gender": "Male",

    },
    {
      "id": 11,
      "name": "Albert Einstein",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
    },
    {
      "id": 12,
      "name": "Alexander",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
    }]
    expect(filteredStatus(dataStatusDead, statusDead)).toEqual(resultadoEsperadoDead)
  });
  it ('test para validar status unknown de los personajes', () => {
    const statusUnknown = 'unknown'
    const dataStatusUnknown = [
      {
        "id": 13,
        "name": "Alien Googah",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "unknown",
      },
      {
        "id": 14,
        "name": "Alien Morty",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "Male",
      },
      {
        "id": 15,
        "name": "Alien Rick",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "Male",
      }, {
        "id": 10,
        "name": "Alan Rails",
        "status": "Dead",
        "species": "Human",
        "type": "Superhuman (Ghost trains summoner)",
        "gender": "Male",
  
      },
    ]
    const resultadoEsperadoUnkwown = [{
      "id": 13,
      "name": "Alien Googah",
      "status": "unknown",
      "species": "Alien",
      "type": "",
      "gender": "unknown",
    },
    {
      "id": 14,
      "name": "Alien Morty",
      "status": "unknown",
      "species": "Alien",
      "type": "",
      "gender": "Male",
    },
    {
      "id": 15,
      "name": "Alien Rick",
      "status": "unknown",
      "species": "Alien",
      "type": "",
      "gender": "Male",
    }] 
    expect(filteredStatus(dataStatusUnknown, statusUnknown)).toEqual(resultadoEsperadoUnkwown)
  });
});


describe('tests de filter species', () => {
  //test Alien
  it('test para validar que species es Alien', () => {
    const speciesOpcionPruebaAlien = 'Alien';
    const datasetPruebaAlien = [{
      "id": 470,
      "name": "Alien Spa Employee",
      "status": "Alive",
      "species": "Alien",
    }, 
    {          
      "id": 49,
      "name": "Blamph",
      "status": "Alive",
      "species": "Alien",},
    {
      "id": 471,
      "name": "Little Voltron",
      "status": "Alive",
      "species": "Robot",
    }];
    const resultadoEsperadoAlien = [{
      "id": 470,
      "name": "Alien Spa Employee",
      "status": "Alive",
      "species": "Alien",
    }, 
    {          
      "id": 49,
      "name": "Blamph",
      "status": "Alive",
      "species": "Alien",
    }];
    expect(filteredSpecies (datasetPruebaAlien, speciesOpcionPruebaAlien)).toEqual(resultadoEsperadoAlien);
  });
  //test Animal
  it('test para validar que species es Animal', () => {
    const speciesOpcionPruebaAnimal = 'Animal';
    const datasetAnimal = [{
      "id": 46,
      "name": "Bill",
      "status": "unknown",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male"},  
    {
      "id": 82,
      "name": "Cronenberg Rick",
      "status": "unknown",
      "species": "Cronenberg",
      "type": "",
      "gender": "Male",
    }];
    const resultadoEsperadoAnimal = [{
      "id": 46,
      "name": "Bill",
      "status": "unknown",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male"
    }];
    expect(filteredSpecies(datasetAnimal, speciesOpcionPruebaAnimal)).toEqual(resultadoEsperadoAnimal);
  });
  // test Cronenberg
  it('test para validar que species es Cronenberg', () => {
    const speciesOpcionPruebaCronenberg = 'Cronenberg';
    const datasetCronenberg = [{
      "id": 82,
      "name": "Cronenberg Rick",
      "status": "unknown",
      "species": "Cronenberg"},
    {    
      "id": 83,
      "name": "Cronenberg Morty",
      "status": "unknown",
      "species": "Cronenberg",
    },
    { 
      "id": 46,
      "name": "Bill",
      "status": "unknown",
      "species": "Animal",
    }
    ];
    const resultadoEsperadoCronenberg = [{
      "id": 82,
      "name": "Cronenberg Rick",
      "status": "unknown",
      "species": "Cronenberg"},
    {    
      "id": 83,
      "name": "Cronenberg Morty",
      "status": "unknown",
      "species": "Cronenberg",
    }];
    expect(filteredSpecies(datasetCronenberg, speciesOpcionPruebaCronenberg)).toEqual(resultadoEsperadoCronenberg);
  });
});


describe('tests de filter gender', () => {
  it('test para validar gender Male de los personajes', () => {
    const genderMale = 'Male'
    const dataGenderMale = [{
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
  
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
 
    }];
    const resultadoEsperadoMale = [{
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
  
    }];
    expect(filteredGender (dataGenderMale, genderMale)).toEqual(resultadoEsperadoMale);
  });
  it('test para validar gender Female de los personajes', () => { 
    const genderFemale = 'Female'
    const dataGenderFemale = [{
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
    },
    {
      "id": 4,
      "name": "Beth Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
    },
    {
      "id": 5,
      "name": "Jerry Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
    }];
    const resultadoEsperadoFemale = [{
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
    },
    {
      "id": 4,
      "name": "Beth Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
    }];
    expect(filteredGender (dataGenderFemale, genderFemale)).toEqual(resultadoEsperadoFemale);
  }); 
  it('test para validar gender unkwown de los personajes', () => {
    const genderUnknown = 'unknown'
    const dataGenderUnknown = [{
      "id": 35,
      "name": "Bepisian",
      "status": "Alive",
      "species": "Alien",
      "type": "Bepisian",
      "gender": "unknown",
    },
    {
      "id": 36,
      "name": "Beta-Seven",
      "status": "Alive",
      "species": "Alien",
      "type": "Hivemind",
      "gender": "unknown",
    },
    {
      "id": 37,
      "name": "Beth Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
    }];
    const resultadoEsperadoUnknown = [{
      "id": 35,
      "name": "Bepisian",
      "status": "Alive",
      "species": "Alien",
      "type": "Bepisian",
      "gender": "unknown",
    },
    {
      "id": 36,
      "name": "Beta-Seven",
      "status": "Alive",
      "species": "Alien",
      "type": "Hivemind",
      "gender": "unknown",
    }];
    expect(filteredGender (dataGenderUnknown, genderUnknown)).toEqual(resultadoEsperadoUnknown);
  });
});
  
describe('test para filtrar por orden', () => {
  it('test para filtrar en orden ascendente', () => {
    const order = 'AZ'
    const orderAsc = [{
      "name": "Secretary of the Interior",
    }, 
    {
      "name": "Loggins",
    }, 
    {
      "name": "Abradolf Lincler",
    }];
    const orderEsperado = [
      {
        "name": "Abradolf Lincler",
      },
      {
        "name": "Loggins",
      },
      {
        "name": "Secretary of the Interior",
      }, 
    ]
    expect(filteredOrder(orderAsc, order)).toEqual(orderEsperado);
  });
});

describe('test para buscar en el proyecto', () => {
  it('test para buscar un personaje', () => {
    //const search = "ri";
    const searchData = [
      { "name": "Secretary of the Interior"}, 
      { "name": "Rick Sanchez" }, 
      { "name": "Abradolf Lincler"}
    ];
    const searchDataEsperado = filteredSearch(searchData, "ric");
    expect(searchDataEsperado).toEqual([{name: "Rick Sanchez"}]);
  });
});
  
describe('tests de porcentaje', () => {
  it('test para validar que array con 10 objetos con status "Alive" es 2.03%', () => {
    const porcentaje10objetosStatusAlive = [
      {"name": "Rick Sanchez",
        "status": "Alive"},
      {"name": "Morty Smith",
        "status": "Alive"},
      {"name": "Summer Smith",
        "status": "Alive"},
      {"name": "Beth Smith",
        "status": "Alive"},
      {"name": "Jerry Smith",
        "status": "Alive"},
      {"name": "Abadango Cluster Princess",
        "status": "Alive"},
      {"name": "Annie",
        "status": "Alive"},
      {"name": "Antenna Morty",
        "status": "Alive"},
      {"name": "Armagheadon",
        "status": "Alive"},
      {"name": "Arthricia",
        "status": "Alive"}
    ];
    const resultadoEsperadoPorcentaje = "2.03";
    expect(porcentajeCalculo  (porcentaje10objetosStatusAlive)).toBe(resultadoEsperadoPorcentaje);
  });
});  
  
  
  
  
  
  




