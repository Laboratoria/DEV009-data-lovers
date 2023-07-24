export const sortName = (arr, option) => {
  arr.sort((a, b) => {
    if (option === "az") {
      return a.name.localeCompare(b.name);
    }
    if (option === "za") {
      return b.name.localeCompare(a.name);
    }
  });
  return arr;
};
// local comapare hace la misma funcion que <>, solo que local comapre corre mejor con el testt.
export const sortNum = (arr, option) => {
  arr.sort((a, b) => {
    if (option === "numberMenor") {
      return a.num - b.num;
    }
    else if (option === "numberMayor") {
      return b.num - a.num;
    }
  });
  return arr;
}
//filtro por nombre
export function resultName(arr, filterName) {
  const results = arr.filter(element => {
    return (element.name).indexOf(filterName) !== -1
  });
  return results
}

/* -----> calculo agregado de tipos, average= promedio <------- */

// 1 ) Primero saber los diferentes tipos de pokemon 
// cada pokemon puede contener varios tipos ejemplo :  [aqua, fire, grass]

//1.1 ) unir todos los tipos de todos los pokemones 

export function concatType(data) {
  const result = []
  data.forEach(element => {
    element.type.forEach(type => {
      result.push(type)
    })
  });
  return result
}

// 1.2 ) quitar los tipos repetidos , con eso tendriamos solo los tipos unicos que existen en todos los pokemones 

export function deleteDuplicate(arrDuplicates) {
  return arrDuplicates.filter((valor, indice) => {
    return arrDuplicates.indexOf(valor) === indice;
  })

}

// 2)contar cuantos pokemones hay por cada tipo de pokemon y calcular su promedio 
export function promPokemonEveryType(data) {
  const pokemonTypesDuplicates = concatType(data)
  const onlyUniqueTypes = deleteDuplicate(pokemonTypesDuplicates)
  const result = {}
  onlyUniqueTypes.forEach(typePokemon => {
    let count = 0;

    data.forEach(pokemon => {
      if ((pokemon.type).includes(typePokemon)) {
        count = count + 1;
      }
    })
    result[typePokemon] = ((count * 100) / pokemonTypesDuplicates.length).toFixed(2)
    count = 0
  })

  return result
}


