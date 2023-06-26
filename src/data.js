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

// estadistica
export function medallas (numero) {
const mgold = 0
const msilver = 0
const mbronze = 0

  for(let i=0; i<numero.lenght; i++) {
    if(numero.gold){return mgold = mgold + numero.gold} 
    if(numero.silver){return msilver = msilver + numero.silver}
     if(numero.bronze){return mbronze = mbronze + numero.bronze}
  }
const total = mgold + msilver + mbronze
console.log(total)
return total
}

//% de atletas con medalla de oro
export function goldPercentage(medalCount){
  const goldSum = medalCount.reduce((sum, entry) => sum + entry.Gold, 0);
  const goldPercentage = (goldSum / medalCount.length) * 100;
  return goldPercentage.toFixed(2);
  };

// Lista de jugadores con medalla de Oro
export function goldAthletes(medalsArr){
  const goldNames = [];
  for (let i=0; i<medalsArr.length; i++){
    if(medalsArr[i].Gold > 0){
      goldNames.push(medalsArr[i].name);
    }
  }
  return goldNames;
};

//% de atletas con medalla de plata
export function silverPercentage(medalCount){
  const silverSum = medalCount.reduce((sum, entry) => sum + entry.Silver, 0);
  const silverPercentage = (silverSum / medalCount.length) * 100;
  return silverPercentage.toFixed(2);
  };

// Lista de jugadores con medalla de Plata
export function silverAthletes(medalsArr){
  const silverNames = [];
  for (let i=0; i<medalsArr.length; i++){
    if(medalsArr[i].Silver > 0){
      silverNames.push(medalsArr[i].name);
    }
  }
  return silverNames;
};

//% de atletas con medalla de bronce
export function bronzePercentage(medalCount){
  const bronzeSum = medalCount.reduce((sum, entry) => sum + entry.Bronze, 0);
  const bronzePercentage = (bronzeSum / medalCount.length) * 100;
  return bronzePercentage.toFixed(2);
  };

// Lista de jugadores con medalla de Bronce
export function bronzeAthletes(medalsArr){
  const bronzeNames = [];
  for (let i=0; i<medalsArr.length; i++){
    if(medalsArr[i].Bronze > 0){
      bronzeNames.push(medalsArr[i].name);
    }
  }
  return bronzeNames;
};


//Top atletas con más medallas
export function topAthletes(medalCount){
  const topMedals = Object.entries(medalCount)
  .sort(([, a], [, b]) => {
    // se compara la suma total de medallas de cada atleta
    const totalMedalsA = Object.values(a).reduce((medal, count) => medal + count, 0);
    const totalMedalsB = Object.values(b).reduce((medal, count) => medal + count, 0);

    return totalMedalsB - totalMedalsA; // Ordenar de mayor a menor
  })
  .slice(0, 10) // Sacar el top 10 con más medallas
  .map(([name, medals]) => ({
    name,
    medals
  }));

return topMedals;
}