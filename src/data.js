//filtrar team Italy
export function filterTeam (datos) {
  const x = datos.filter((obj) => {
  return obj.team === 'Italy';})
  return x
}

//filtrar por Genero Masculino
export function filterGenM (datos) {
  const m = datos.filter((obj) => {
  return obj.gender === 'M';})
  return m
}

//filtrar por Genero Femenino
export function filterGenF (datos) {
  const f = datos.filter((obj) => {
  return obj.gender === 'F';})
  return f
}

export const sortData = {
  //ordena los atletas por edad: Mayor a Menor
  sortbyAge1: (data) => {
    const newdata =data.slice().sort((a, b) => {
      if (b.age > a.age) {
          return 1;
      }
      if (b.age < a.age) {
          return -1;
      }
    return 0;
    })
    return newdata;
  },
     //ordena los atletas por edad: Menor a Mayor
     sortbyAge2: (data) => {
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
     },
     //ordena los atletas por nombre A - Z
     sortbyNameAtoZ: (data) => {
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
     },
     //ordena los atletas por nombre Z - A
     sortbyNameZtoA: (data) => {
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
     },
     //ordena los datos por país A - Z
     sortbyCountryAtoZ:(data) => {
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
     },
     //ordena los datos por país Z - A
     sortbyCountryZtoA: (data) => {
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
     },
   };