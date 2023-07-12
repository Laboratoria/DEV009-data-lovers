// estas funciones son de ejemplo
/*************Filtro por continente***************/
export const contAmerica = (countries) => {
  return countries.filter((item) => item.continents[0] === 'America');
};
export const contAsia = (countries) => {
  return countries.filter((item) => item.continents[0] === 'Asia');
};
export const contEurope = (countries) => {
  return countries.filter((item) => item.continents[0] === 'Europe');
};
export const contAntarctica = (countries) => {
  return countries.filter((item) => item.continents[0] === 'Antarctica');
};
export const contAfrica = (countries) => {
  return countries.filter((item) => item.continents[0] === 'Africa');
};
export const contOceania = (countries) => {
  return countries.filter((item) => item.continents[0] === 'Oceania');
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
export const continents = (countries) => {
  return countries.filter((item) => item.continents[0] === menuItems);
};



