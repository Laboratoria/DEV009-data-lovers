export const example = {
paisAtlethes: (datos) => {
     const name = datos.filter( objeto => objeto.team === Italia)
     return name
}
}

export const sortData = {
     //ordena los atletas por edad: Menor a Mayor
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
     //ordena los atletas por edad: Mayor a Menor
     sortbyAge2: (data) => {
   
     },
     //ordena los atletas por nombre A - Z
     sortbyNameAtoZ: (data) => {
   
     },
     //ordena los atletas por nombre Z - A
     sortbyNameZtoA: (data) => {
   
     },
     //ordena los datos por país A - Z
     sortbyCountryAtoZ:(data) => {
   
     },
     //ordena los datos por país Z - A
     sortbyCountryZtoA: (data) => {
   
     },
   };