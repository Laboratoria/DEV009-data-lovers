
/*************Filtro por continente***************/
export const allContinents= (countries, continent, order) => {
  const filterContinents= countries.filter((item) => item.continents[0] === continent);
  if (order ==='a-z'){
    filterContinents.sort((a, b)=>a.name.common.localCompare(b.name.common));
  } else if (order ==='z-a'){
    filterContinents.sort((a, b)=>b.name.common.localCompare(a.name.common));
  }
  return filterContinents
};

/*************Busqueda por pais*****************/
export const busqueda = (countries,valor) => {
  return countries.filter((item) => item.name.common.toLowerCase().startsWith(valor));
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




