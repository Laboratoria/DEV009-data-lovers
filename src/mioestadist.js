import data from './data/athletes/athletes.js';
const dataArr = (data.athletes)

function extraermedal(datos) {
    let gold = 0;
    let silver = 0;
    let bronze = 0;
  
    datos.forEach((atleta) => {
      const medalla = atleta.medal;
        console.log(medalla)
      if (medalla === 'Gold') {
        gold++;
      } else if (medalla === 'Silver') {
        silver++;
      } else if (medalla === 'Bronze') {
        bronze++;
      }
    });
    const sumatodas = gold + silver + bronze;
    return sumatodas;
}

//Ubicar en contenedor



