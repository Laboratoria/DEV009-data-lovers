import { filteredSpecies, porcentajeCalculo  } from '../src/data.js';

describe('tests de filter species', () => {
  //test Alien 
  it('test para validar que species es "Alien"', () => {
    const speciesOpcionPruebaAlien = "Alien";
    const datasetPruebaAlien = [{
      "id": 470,
      "name": "Alien Spa Employee",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Male"
  }, {
    "id": 471,
    "name": "Little Voltron",
    "status": "Alive",
    "species": "Robot",
    "type": "",
    "gender": "Genderless",
}];
    const resultadoEsperado = [{
      "id": 470,
      "name": "Alien Spa Employee",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Male"
  }];
    expect(filteredSpecies (datasetPruebaAlien, speciesOpcionPruebaAlien)).toEqual(resultadoEsperado);
  });

  //test Animal

  it('test para validar que species es "Animal"', () => {
    const speciesOpcionPruebaAnimal = "Animal";
    const datasetAnimal = [
      {"id": 46,
      "name": "Bill",
      "status": "unknown",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male"},
      {"id": 82,
      "name": "Cronenberg Rick",
      "status": "unknown",
      "species": "Cronenberg",
      "type": "",
      "gender": "Male"}

    ];

    const resultadoEsperadoAnimal = [
      {"id": 46,
      "name": "Bill",
      "status": "unknown",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male"}
    ];
    expect(datasetAnimal, speciesOpcionPruebaAnimal).toEqual(resultadoEsperadoAnimal);
  });

  // test Cronenberg 
  it('test para validar que species es "Cronenberg"', () => {
    const speciesOpcionPruebaCronenberg = "Cronenberg";
    const datasetCronenberg = [
      {"id": 82,
      "name": "Cronenberg Rick",
      "status": "unknown",
      "species": "Cronenberg",
      "type": "",
      "gender": "Male"}, 
      {"id": 46,
      "name": "Bill",
      "status": "unknown",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male"
      }
      
    ];

    const resultadoEsperadoCronenberg = [
      {"id": 82,
      "name": "Cronenberg Rick",
      "status": "unknown",
      "species": "Cronenberg",
      "type": "",
      "gender": "Male"}
    ];
    expect(datasetCronenberg, speciesOpcionPruebaCronenberg).toEqual(resultadoEsperadoCronenberg);
  }); 

  // test human 
  it('test para validar que species es "Human"', () => {
    const speciesOpcionPruebaHuman = "Human";
    const datasetHuman = [
    {"id": 465,
    "name": "SEAL Team Rick",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male"},
    {"id": 46,
    "name": "Bill",
    "status": "unknown",
    "species": "Animal",
    "type": "Dog",
    "gender": "Male"}
    ];
    const resultadoEsperadoHuman = [
    {"id": 465,
    "name": "SEAL Team Rick",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male"}
  ];
    expect(datasetHuman, speciesOpcionPruebaHuman).toEqual(resultadoEsperadoHuman);
  }); 

  // test humanoid 
  it('test para validar que species es "Humanoid"', () => {
    const speciesOpcionPruebaHumanoid = "Humanoid";
    const datasetHumanoid = [  
    {"id": 432,
    "name": "Chair-waiter",
    "status": "Alive",
    "species": "Humanoid",
    "type": "Chair",
    "gender": "Male"},
    {"id": 46,
    "name": "Bill",
    "status": "unknown",
    "species": "Animal",
    "type": "Dog",
    "gender": "Male"}
    ];

    const resultadoEsperadoHumanoid = [  
      {"id": 432,
      "name": "Chair-waiter",
      "status": "Alive",
      "species": "Humanoid",
      "type": "Chair",
      "gender": "Male"}
      ];

    expect(datasetHumanoid, speciesOpcionPruebaHumanoid).toEqual(resultadoEsperadoHumanoid);
  }); 

  // test mytholog 
  it('test para validar que species es "Mytholog"', () => {
    const speciesOpcionPruebaMytholog = "Mytholog";
    const datasetMytholog = [
      {"id": 148,
      "name": "Goddess Beth",
      "status": "unknown",
      "species": "Mytholog",
      "type": "",
      "gender": "Female"},
      {"id": 46,
      "name": "Bill",
      "status": "unknown",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male"}
    ];

    const resultadoEsperadoMytholog = [
      {"id": 148,
      "name": "Goddess Beth",
      "status": "unknown",
      "species": "Mytholog",
      "type": "",
      "gender": "Female"}
    ];
    expect(datasetMytholog, speciesOpcionPruebaMytholog).toEqual(resultadoEsperadoMytholog);
  }); 

  // test parasite 
  it('test para validar que species es "Parasite"', () => {
    const speciesOpcionPruebaParasite = "Parasite";
    const datasetParasite = [
      {"id": 109,
      "name": "Duck With Muscles",
      "status": "Dead",
      "species": "Parasite",
      "type": "Alien",
      "gender": "Male"},
      {"id": 148,
      "name": "Goddess Beth",
      "status": "unknown",
      "species": "Mytholog",
      "type": "",
      "gender": "Female"}
    ];

    const resultadoEsperadoParasite = [
      {"id": 109,
      "name": "Duck With Muscles",
      "status": "Dead",
      "species": "Parasite",
      "type": "Alien",
      "gender": "Male"}
    ];
    expect(datasetParasite, speciesOpcionPruebaParasite).toEqual(resultadoEsperadoParasite);
  }); 

  // test Poopybutthole 
  it('test para validar que species es "Poopybutthole"', () => {
    const speciesOpcionPruebaPoopybutthole = "Poopybutthole";
    const datasetPoopybutthole = [
      {"id": 30,
      "name": "Baby Poopybutthole",
      "status": "Alive",
      "species": "Poopybutthole",
      "type": "",
      "gender": "Male"},
      {"id": 148,
      "name": "Goddess Beth",
      "status": "unknown",
      "species": "Mytholog",
      "type": "",
      "gender": "Female"}
    ];

    const resultadoEsperadoPoopybutthole = [
      {"id": 30,
      "name": "Baby Poopybutthole",
      "status": "Alive",
      "species": "Poopybutthole",
      "type": "",
      "gender": "Male"}
    ];
    expect(datasetPoopybutthole, speciesOpcionPruebaPoopybutthole).toBe(resultadoEsperadoPoopybutthole);
  }); 

  // test robot 
  it('test para validar que species es "Robot"', () => {
    const speciesOpcionPruebaRobot = "Robot";
    const datasetRobot = [
      {"id": 71,
      "name": "Conroy",
      "status": "Dead",
      "species": "Robot",
      "type": "",
      "gender": "unknown"},
      {"id": 148,
      "name": "Goddess Beth",
      "status": "unknown",
      "species": "Mytholog",
      "type": "",
      "gender": "Female"}
    ];

    const resultadoEsperadoRobot = [
      {"id": 71,
      "name": "Conroy",
      "status": "Dead",
      "species": "Robot",
      "type": "",
      "gender": "unknown"}
    ];
    expect(datasetRobot, speciesOpcionPruebaRobot).toBe(resultadoEsperadoRobot);
  }); 

  // test Vampire
  it('test para validar que species es "Vampire"', () => {
    const speciesOpcionPruebaVampire = "Vampire";
    const datasetVampire = [
    {"id": 453,
    "name": "Vampire Master's Assistant",
    "status": "Alive",
    "species": "Vampire",
    "type": "",
    "gender": "Male"},
    {"id": 148,
    "name": "Goddess Beth",
    "status": "unknown",
    "species": "Mytholog",
    "type": "",
    "gender": "Female"}
    ];
    const resultadoEsperadoVampire = [
      {"id": 453,
      "name": "Vampire Master's Assistant",
      "status": "Alive",
      "species": "Vampire",
      "type": "",
      "gender": "Male"} 
      ];
    expect(example()).toBe('example');
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
    const resultadoEsperadoPorcentaje = 2.03
   
    expect(porcentajeCalculo  (porcentaje10objetosStatusAlive)).toBe(resultadoEsperadoPorcentaje);
  });
});