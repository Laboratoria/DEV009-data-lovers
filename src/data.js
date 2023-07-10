//manera ascedente
export const sortNameasc = (arr) => {
  arr.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return arr;
};
//manera descendente
export const sortNameDes = (arr) => {
  arr.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return arr;
};
//de mayor a menor
export const sortNumYouger = (arr) => {
  arr.sort((a, b) => {
    if (a.num > b.num) {
      return -1;
    }
    if (a.num < b.num) {
      return 1;
    }
    return 0;
  });
  return arr;
}
//de menor a mayor
export const sortNumLower = (arr) => {
  arr.sort((a, b) => {
    if (a.num < b.num) {
      return -1;
    }
    if (a.num > b.num) {
      return 1;
    }
    return 0;
  });

  return arr;
};

/* -----> calculo agregado de tipos, average= promedio <------- */

// 1 ) Primero saber los diferentes tipos de pokemon 
// cada pokemon puede contener varios tipos ejemplo :  [aqua, fire, grass]

//1.1 ) unir todos los tipos de todos los pokemones 

export function concatType (data){
  const result = []
  data.forEach(element => {
    result.push(...element.type)
  });
  return result 
}

// 1.2 ) quitar los tipos repetidos , con eso tendriamos solo los tipos unicos que existen en todos los pokemones 

export function deleteDuplicate (arrDuplicates){
  return new Set([...arrDuplicates])
}


// 2)contar cuantos pokemones hay por cada tipo de pokemon y calcular su promedio 
export function promPokemonEveryType (data){
  const pokemonTypesDuplicates = concatType(data)

  const onlyUniqueTypes = deleteDuplicate(pokemonTypesDuplicates)

  const result = {}

  onlyUniqueTypes.forEach(typePokemon =>{
    let count = 0;

    data.forEach(pokemon =>{
      if( (pokemon.type).includes(typePokemon) ){
        count = count + 1;
      }
    })
    result[typePokemon] =   ((count * 100) / pokemonTypesDuplicates.length ).toFixed(2)

    count = 0
  })
  
  return result 
}


