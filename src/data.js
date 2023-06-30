//FILTRO PAIS
export function filterTeam(datos, pais) {
  if (Array.isArray(datos)) {
    const i = datos.filter((obj) => {
      return obj.team === pais;
    })
    return i
  } else {
    return "ERROR DATA INVALIDA"
  }
}

//FILTRO DEPORTE
export function filterSport(datos, deporte) {
  if (Array.isArray(datos)) {
    const g = datos.filter((obj) => {
      return obj.sport === deporte;
    })
    return g;
  } else {
    return "ERROR DATA INVALIDA"
  }
}

//FILTRO GENERO
export function filterGen(datos, genero) {
  if (Array.isArray(datos)) {
    const m = datos.filter((obj) => {
      return obj.gender === genero;
    })
    return m
  }
  else {
    return "ERROR DATA INVALIDA"
  }
}

//FILTRO MEDALLA
export function filterMedal(datos, medalla) {
  if (Array.isArray(datos)) {
    const g = datos.filter((obj) => {
      return obj.medal === medalla;
    })
    return g
  }
  else {
    return "ERROR DATA INVALIDA"
  }
}
//ORDEN
export const sortData = {
  //ordena los atletas por edad: Mayor a Menor
  sortbyAge1: (data) => {
    if (Array.isArray(data)) {
      const newdata = data.slice().sort((a, b) => {
        if (b.age > a.age) {
          return 1;
        }
        if (b.age < a.age) {
          return -1;
        }
        return 0;
      })
      return newdata;
    }
    else {
      return "ERROR DATA INVALIDA"
    }
  },
  //ordena los atletas por edad: Menor a Mayor
  sortbyAge2: (data) => {
    if (Array.isArray(data)) {
      const newdata = data.slice().sort((a, b) => {
        if (a.age > b.age) {
          return 1;
        }
        if (a.age < b.age) {
          return -1;
        }
        return 0;
      })

      return newdata;
    }
    else {
      return "ERROR DATA INVALIDA"
    }
  },
  //ordena los atletas por nombre A - Z
  sortbyNameAtoZ: (data) => {
    if (Array.isArray(data)) {
      const newdata = data.slice().sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
        return 0;
      })
      return newdata
    }
    else {
      return "ERROR DATA INVALIDA"
    }
  },
  //ordena los atletas por nombre Z - A
  sortbyNameZtoA: (data) => {
    if (Array.isArray(data)) {
      const newdata = data.slice().sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameB > nameA) {
          return 1;
        }
        if (nameB < nameA) {
          return -1;
        }
        return 0;
      })
      return newdata
    }
    else {
      return "ERROR DATA INVALIDA"
    }
  },
  //ordena los datos por país A - Z
  sortbyCountryAtoZ: (data) => {
    if (Array.isArray(data)) {
      const newdata = data.slice().sort((a, b) => {
        const teamA = a.team.toLowerCase();
        const teamB = b.team.toLowerCase();

        if (teamA > teamB) {
          return 1;
        }
        if (teamA < teamB) {
          return -1;
        }
        return 0;
      })
      return newdata
    }
    else {
      return "ERROR DATA INVALIDA"
    }
  },
  //ordena los datos por país Z - A
  sortbyCountryZtoA: (data) => {
    if (Array.isArray(data)) {
      const newdata = data.slice().sort((a, b) => {
        const teamA = a.team.toLowerCase();
        const teamB = b.team.toLowerCase();

        if (teamB > teamA) {
          return 1;
        }
        if (teamB < teamA) {
          return -1;
        }
        return 0;
      })
      return newdata
    }
    else {
      return "ERROR DATA INVALIDA"
    }
  }
};

// estadistica
export function estadistica(medallas) {
  if (typeof medallas === 'object') {

    const suma = medallas.gold + medallas.silver + medallas.bronze
    const gold = (((medallas.gold * 100) / suma)).toFixed(2)
    const silver = (((medallas.silver * 100) / suma)).toFixed(2)
    const bronze = (((medallas.bronze * 100) / suma)).toFixed(2)

    const porcentaje = {
      goldPorcent: parseFloat(gold),
      silverPorcent: parseFloat(silver),
      bronzePorcent: parseFloat(bronze),
    }
    return porcentaje
  }
  else {
    return "ERROR DATA INVALIDA"
  }
}