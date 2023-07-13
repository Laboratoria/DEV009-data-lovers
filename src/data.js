
/*************Filtro por continente***************/
export const allContinents= (countries, continent) => {
  return countries.filter((item) => item.continents[0] === continent);
};

/*************Busqueda por pais*****************/
export const busqueda = (countries,valor) => {
  return countries.filter((item) => item.name.common.toLowerCase().startsWith(valor));
};
/*************Seleccion por carta***************/
export const country = (countries, id) => {
  return countries.find(country => country.name.common === id);
};


/*************Ordenar de la A-Z***************/
export const orderAZ = (countries) => {
  return countries.sort((a, b) =>{
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
};
/*************Ordenar de la Z-A***************/
export const orderZA = (countries) => {
  return countries.sort((a, b) =>{
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();
    if (nameA < nameB) return 1;
    if (nameA > nameB) return -1;
    return 0;
  });
};




