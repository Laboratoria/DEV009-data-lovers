/*el código en data.js proporciona las funciones de filtro necesarias para el main.js, permitiendo que se apliquen
diferentes filtros a los campeones y se actualice la lista mostrada en la interfaz.*/
export const filtroLuchador = function (data) {
  // La función toma un parámetro llamado data.
  return data.filter((champion) => champion.tags.includes("Fighter"));
  /* se utiliza el método filter() en el arreglo data para filtrar los elementos que cumplen con la condicion la
  cual es q solo los campeones que tenga en su tags "Fighter" seras incluidos */
};
export const filtroTirador = function (data) {
  // La función toma un parámetro llamado data.
  return data.filter((champion) => champion.tags.includes("Marksman"));
  /* se utiliza el método filter() en el arreglo data para filtrar los elementos que cumplen con la condicion la
  cual es q solo los campeones que tenga en su tags "Marksman" seras incluidos */
};
export const filtroMago = function (data) {
  // La función toma un parámetro llamado data.
  return data.filter((champion) => champion.tags.includes("Mage"));
  /* se utiliza el método filter() en el arreglo data para filtrar los elementos que cumplen con la condicion la
  cual es q solo los campeones que tenga en su tags "Mage" seras incluidos */
};
export const filtroAsesino = function (data) {
  // La función toma un parámetro llamado data.
  return data.filter((champion) => champion.tags.includes("Assassin"));
  /* se utiliza el método filter() en el arreglo data para filtrar los elementos que cumplen con la condicion la
  es q solo los campeones que tenga en su tags "Assassin" seras incluidos */
};
export const filtroTanque = function (data) {
  // La función toma un parámetro llamado data.
  return data.filter((champion) => champion.tags.includes("Tank"));
  /* se utiliza el método filter() en el arreglo data para filtrar los elementos que cumplen con la condicion la
  cual es q solo los campeones que tenga en su tags "Tank" seras incluidos */
};
export const filtroApoyo = function (data) {
  // La función toma un parámetro llamado data.
  return data.filter((champion) => champion.tags.includes("Support"));
  /* se utiliza el método filter() en el arreglo data para filtrar los elementos que cumplen con la condicion la
  cual es q solo los campeones que tenga en su tags "Support" seras incluidos */
};
///////////////////////////ORDENAR LA DATA////////////////////////////////////////77
export const OrdenarAZ = function (data) {
  //La función recibe un parámetro llamado data, que es la matriz de elementos.
  return (data = data.sort((a, b) => {
    //Dentro de la función OrdenarAZ, se utiliza el método sort en la matriz data para ordenarla.
    //y el resultado de data.sort()se asigna nuevamente a data y se devuelve.
    if (a.name > b.name)
      return 1; /* Esta línea verifica si el nombre de a es mayor (viene después) que el nombre de b en el orden alfabético.
    Si es así, se devuelve 1. Esto indica que a debe colocarse después de b en la matriz ordenada. */
    if (a.name < b.name)
      return -1; /*Esta línea verifica si el nombre de aes menor (viene antes) que el nombre de ben el orden alfabético.
    Si es así, se devuelve -1. Esto indica que adebe colocarse antes de ben la matriz ordenada. */
    return 0; //: Si ninguna de las condiciones anteriores se cumple, significa que los nombres de ay bson iguales. En este caso, se devuelve 0
  }));
};
export const OrdenarZA = function (data) {
  //La función recibe un parámetro llamado data, que es la matriz de elementos.
  return (data = data.sort((a, b) => {
    //Dentro de la función OrdenarZA, se utiliza el método sort en la matriz data para ordenarla.
    //y el resultado de data.sort()se asigna nuevamente a data y se devuelve.
    if (a.name > b.name)
      return -1; /*Esta línea verifica si el nombre de aes menor (viene antes) que el nombre de ben el orden alfabético.
    Si es así, se devuelve -1. Esto indica que adebe colocarse antes de ben la matriz ordenada. */
    if (a.name < b.name)
      return 1; /* Esta línea verifica si el nombre de a es mayor (viene después) que el nombre de b en el orden alfabético.
    Si es así, se devuelve 1. Esto indica que a debe colocarse después de b en la matriz ordenada. */
    return 0; //: Si ninguna de las condiciones anteriores se cumple, significa que los nombres de ay bson iguales. En este caso, se devuelve 0
  }));
};
////////////////////////ESTADISTICAS////////////////////////////////////77
export function calcularRoles(champions) {
  //La función "obtenerEstadisticasRoles "toma como parámetro a champions
  const roles = {}; //se crea roles con un objt vacio,q se utiliza posteriormente en el codigo para guardar las estadísticas de los roles de los campeones
  for (const championKey in champions) {
    //se utiliza para iterar sobre championKey en el objeto champions
    const champion = champions[championKey]; //Dentro del bucle, se obtiene el campeón actual utilizando la clave championKeyy se almacena en la variable champion.
    const championRoles = champion.tags; // champion.tags asume el campeón tiene una propiedad tags que es un arreglo de roles a los que pertenece
    for (const role of championRoles) {
      //Se utiliza un bucle for...of para iterar sobre cada elemento (role) en el arreglo championRoles.
      if (roles[role]) {
        //se utiliza para acceder a la propiedad del objeto roles correspondiente al rol actual ( role).
        roles[role]++; //y aca los va sumando cada rol q encuentra
      } else {
        roles[role] = 1;
      }
      //Esto crea la propiedad del rol en el objeto rolesy le asigna el valor inicial de 1. Es decir, se registra la primera aparición del rol.
    }
  }
  return roles; //aca como roles es el que ha llevado la cuenta de todo se tiene que retornar para poder mostrarse en la grafica
}
/*
                      FOR...IN
- for...in se utiliza para iterar sobre las propiedades enumerables de un objeto.
- Itera sobre las claves o propiedades de un objeto, incluyendo las propiedades heredadas del prototipo.
- Es útil para recorrer las propiedades de un objeto y realizar operaciones en cada una de ellas.
                      FOR...OF
- for...ofse utiliza para iterar sobre elementos iterables, como arreglos, cadenas, objetos iterables (por ejemplo, Set, Map) u otras estructuras de datos que implementen el protocolo de iteración.
- Es útil cuando solo se necesita acceder a los valores y no se requiere el índice o la clave correspondiente.
*/
