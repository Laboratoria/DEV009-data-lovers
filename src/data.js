/*el código en data.js proporciona las funciones de filtro necesarias para el main.js, permitiendo que se apliquen diferentes 
filtros a los campeones y se actualice la lista mostrada en la interfaz.*/

export const filtroLuchador = function (data) {
  // La función toma un parámetro llamado data.
  return data.filter((champion) => champion.tags.includes("Fighter"));
  /* se utiliza el método filter() en el arreglo data para filtrar los elementos que cumplen con la condicion la cual es q solo los campeones
  que tenga en su tags "Fighter" seras incluidos */
};

export const filtroTirador = function (data) {
  // La función toma un parámetro llamado data.
  return data.filter((champion) => champion.tags.includes("Marksman"));
  /* se utiliza el método filter() en el arreglo data para filtrar los elementos que cumplen con la condicion la cual es q solo los campeones
  que tenga en su tags "Marksman" seras incluidos */
};

export const filtroMago = function (data) {
  // La función toma un parámetro llamado data.
  return data.filter((champion) => champion.tags.includes("Mage"));
  /* se utiliza el método filter() en el arreglo data para filtrar los elementos que cumplen con la condicion la cual es q solo los campeones
  que tenga en su tags "Mage" seras incluidos */
};

export const filtroAsesino = function (data) {
  // La función toma un parámetro llamado data.
  return data.filter((champion) => champion.tags.includes("Assassin"));
  /* se utiliza el método filter() en el arreglo data para filtrar los elementos que cumplen con la condicion la cual es q solo los campeones
  que tenga en su tags "Assassin" seras incluidos */
};

export const filtroTanque = function (data) {
  // La función toma un parámetro llamado data.
  return data.filter((champion) => champion.tags.includes("Tank"));
  /* se utiliza el método filter() en el arreglo data para filtrar los elementos que cumplen con la condicion la cual es q solo los campeones
  que tenga en su tags "Tank" seras incluidos */
};

export const filtroApoyo = function (data) {
  // La función toma un parámetro llamado data.
  return data.filter((champion) => champion.tags.includes("Support"));
  /* se utiliza el método filter() en el arreglo data para filtrar los elementos que cumplen con la condicion la cual es q solo los campeones
  que tenga en su tags "Support" seras incluidos */
};

///////////////////////////ORDENAR LA DATA////////////////////////////////////////77
export const OrdenarAZ = function (data) {
  return (data = data.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  }));
};

export const OrdenarZA = function (data) {
  return (data = data.sort((a, b) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  }));
};

////////////////////////ESTADISTICAS////////////////////////////////////77

export function calcularRoles(champions) {
  //La función "obtenerEstadisticasRoles "toma como parámetro a champions
  const roles = {}; //se crea roles con un objt vacio,q se utiliza posteriormente en el codigo para guardar las estadísticas de los roles de los campeones
  for (const championKey in champions) {
    const champion = champions[championKey];
    const championRoles = champion.tags;
    for (const role of championRoles) {
      if (roles[role]) {
        roles[role]++;
      } else {
        roles[role] = 1;
      }
    }
  }
  return roles;
}
