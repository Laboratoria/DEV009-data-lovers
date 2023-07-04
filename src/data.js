// estas funciones son de ejemplo
/*************Filtro por continente***************/
export const contAmerica = (countries) => {
  return countries.filter((item) => item.continents[0] === 'America');
};
/*************Busqueda por pais*****************/
export const busqueda = (countries,valor) => {
  return countries.filter((item) => item.name.common.toLowerCase().startsWith(valor));
};
/*************Seleccion por carta***************/
export const country = (countries, id) => {
  return countries.find(country => country.name.common === id);
};
/*************Filtro por subregion***************/
export const contCaribe = (countries) => {
  return countries.filter((item) => item.continents[0] === 'caribe');
};
export const anotherExample = () => {
  return 'OMG';
};

