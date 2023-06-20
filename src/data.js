export const example = {
paisAtlethes: (datos) => {
     const name = datos.filter( objeto => objeto.team === Italia)
     return name
}
}

export const sortData = {
     //ordena los atletas por edad: Mayor a Menor
     sortbyAge1: (data) => {
       data.sort((a, b) => {
         if (b.age > a.age) {
           return 1;
        }
         if (b.age < a.age) {
           return -1;
        }
        return 0;
       })
     },
     //ordena los atletas por edad: Menor a Mayor
     sortbyAge2: (data) => {
      data.sort((a, b) => {
        if (a.age > b.age) {
          return 1;
       }
        if (a.age < b.age) {
          return -1;
       }
       return 0;
      })
     },
     //ordena los atletas por nombre A - Z
     sortbyNameAtoZ: (data) => {
      data.sort((a, b) => {
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
     },
     //ordena los atletas por nombre Z - A
     sortbyNameZtoA: (data) => {
      data.sort((a, b) => {
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
     },
     //ordena los datos por país A - Z
     sortbyCountryAtoZ:(data) => {
      data.sort((a, b) => {
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
     },
     //ordena los datos por país Z - A
     sortbyCountryZtoA: (data) => {
      data.sort((a, b) => {
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
     },
   };