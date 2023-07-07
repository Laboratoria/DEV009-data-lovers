// estas funciones son de ejemplo
export const display = (pokemonData)=>{
  const seccionShowAll = document.getElementById('showAll');
  const cardPokemon = document.createElement('div');
  cardPokemon.classList.add(`pokemon-card`);
  cardPokemon.classList.add(`${pokemonData.type[0]}`);
  const namePokemon = document.createElement('p');
  namePokemon.textContent = pokemonData.name;
  const numPokemon = document.createElement('p');
  numPokemon.textContent = pokemonData.num;
  const imgPokemon = document.createElement('img');
  imgPokemon.setAttribute('src',pokemonData.img);
   
  cardPokemon.appendChild(namePokemon);
  cardPokemon.appendChild(imgPokemon);
  cardPokemon.appendChild(numPokemon);
  seccionShowAll.appendChild(cardPokemon);

};
/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterData = (data,condition,filterBy) => {
  
  const result = data.filter (index => index[filterBy].includes(condition) );

  return result;
};


/*
export const sortData = (data, sortBy, sortOrder) => {

  switch(sortOrder,sortBy){
  case 'A-Z':
    result = data.sort();
    break;
  case 'Z-A':
    result = data.sort();
    result.reverse();
    break;
  case 'ascendente':
    result = data.sort((a,b) => a-b);
    break;
  case 'desendente':
    result = data.sort((a,b) => a-b);
    result.reverse();
    break;
  }

  return result;
};
*/