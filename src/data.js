//manera ascedente
export const sortNameasc = (arr,option) => {
  arr.sort((a, b) => {
    if (a.name < b.name || option === "za") {
      return -1;
    } 
    if (a.name > b.name || option === "az") {
      return 1;
    }
    return 0;
  });
  console.log(arr)
  return arr;
};
//de mayor a menor
export const sortNumYouger = (arr,option) => {
  arr.sort((a, b) => {
    if (a.num > b.num || option === "numberMenor" ) {
      return -1;
    }
    if (a.num < b.num || option === "numberMayor") {
      return 1;
    }
    return 0;
  });
  console.log(arr)
  return arr;
}

//filtro por nombre
export function resultName (arr, filterName){
  const results = arr.filter(element => {
    return (element.name).indexOf(filterName) !== -1
  });
  return results
}


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


