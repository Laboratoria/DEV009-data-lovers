import {filteredStatus, filteredSpecies, filteredGender, filteredOrder, filteredSearch, porcentajeCalculo} from '../src/data.js';
 
const arrayTestData = [
  {
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "gender": "Female",
  },
  {         
    "name": "Amish Cyborg",
    "status": "Dead",
    "species": "Alien",
    "gender": "Male",
  },
  {
    "name": "Bepisian",
    "status": "Alive",
    "species": "Alien",
    "gender": "unknown",
  }];


describe('test para filtrar status', () => {
  it('test para validar status alive de los personajes', () => {
    const statusAlive = 'Alive'
    //const dataStatusAlive = arrayTestData 
    const resultadoEsperadoAlive = [ 
      {
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
      },
      {
        "name": "Bepisian",
        "status": "Alive",
        "species": "Alien",
        "gender": "unknown",
      }];
    expect(filteredStatus (arrayTestData, statusAlive)).toEqual(resultadoEsperadoAlive)
  });
  it('test para validar el status dead de los personajes', () => {
    const statusDead = 'Dead'
    //const dataStatusDead = arrayTestData.status;
    const resultadoEsperadoDead = [    
      {
        "name": "Amish Cyborg",
        "status": "Dead",
        "species": "Alien",
        "gender": "Male",
      }]
    expect(filteredStatus(arrayTestData, statusDead)).toEqual(resultadoEsperadoDead)
  });
});


describe('tests de filter species', () => {
  //test Alien
  it('test para validar que species es Alien', () => {
    const speciesOpcionPruebaAlien = 'Alien';
    //const datasetPruebaAlien = [];
    const resultadoEsperadoAlien = [{         
      "name": "Amish Cyborg",
      "status": "Dead",
      "species": "Alien",
      "gender": "Male",
    },
    {
      "name": "Bepisian",
      "status": "Alive",
      "species": "Alien",
      "gender": "unknown",
    }];
    expect(filteredSpecies (arrayTestData, speciesOpcionPruebaAlien)).toEqual(resultadoEsperadoAlien);
  });
  it('test para validar que species es Human', () => {
    const speciesOpcionPruebaHuman = 'Human';
    //const datasetCronenberg = ;
    const resultadoEsperadoHuman = [  {
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
    }];
    expect(filteredSpecies(arrayTestData, speciesOpcionPruebaHuman)).toEqual(resultadoEsperadoHuman);
  });
  it('test para validar que se ha seleccionado All', () => {
    const speciesOpcionAll = 'All';
    //const datasetCronenberg = ;
    const resultadoEsperadoAll = [   {
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
    },
    {         
      "name": "Amish Cyborg",
      "status": "Dead",
      "species": "Alien",
      "gender": "Male",
    },
    {
      "name": "Bepisian",
      "status": "Alive",
      "species": "Alien",
      "gender": "unknown",
    }];
    expect(filteredSpecies(arrayTestData, speciesOpcionAll)).toEqual(resultadoEsperadoAll);
  });
});


describe('tests de filter gender', () => {
  it('debe devolver un error si la data es undefined', () => {
    const gender = 'Male';
    const input = undefined;
    expect(() =>filteredGender (input, gender)).toThrow('La data es incorrecta')
  });
  it('test para validar gender Male de los personajes', () => {
    const genderMale = 'Male'
    // const dataGenderMale =  'Male'
    const resultadoEsperadoMale = [{         
      "name": "Amish Cyborg",
      "status": "Dead",
      "species": "Alien",
      "gender": "Male",
    }];
    expect(filteredGender (arrayTestData, genderMale)).toEqual(resultadoEsperadoMale);
  });
  it('test para validar gender Female de los personajes', () => { 
    const genderFemale = 'Female'
    const resultadoEsperadoFemale = [{
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
    }];
    expect(filteredGender (arrayTestData, genderFemale)).toEqual(resultadoEsperadoFemale);
  }); 
  it('test para validar gender unkwown de los personajes', () => {
    const genderUnknown = 'unknown'
    const resultadoEsperadoUnknown = [{
      "name": "Bepisian",
      "status": "Alive",
      "species": "Alien",
      "gender": "unknown",
    }];
    expect(filteredGender (arrayTestData, genderUnknown)).toEqual(resultadoEsperadoUnknown);
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
      }
    ];
    expect(filteredOrder(orderAsc, order)).toEqual(orderEsperado);
  });
  it('test para filtrar en orden descendente', () => {
    const order = 'ZA'
    const orderDesc = [
      {
        "name": "Abradolf Lincler",
      },
      {
        "name": "Loggins",
      },
      {
        "name": "Secretary of the Interior",
      }];
    const orderEsperadoDesc = [
      {
        "name": "Secretary of the Interior",
      },
      {
        "name": "Loggins",
      },
      {
        "name": "Abradolf Lincler",
      },
 
    ]
    expect(filteredOrder(orderDesc, order)).toEqual(orderEsperadoDesc);
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
  
  
  
  
  
  




