// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//Ordenar alfabéticamente
export const orderByAlphabetical = (array, getter, order = 'asc')=> {
  array.sort( (a, b) => {
    const first = getter(a);
    const second = getter (b);
    //Compara los elementos
    const compare = first.localeCompare(second);
    //Devuelve la comparación en el orden que le pedimos
    return order === 'asc' ? compare :-compare;
  })
  return array;
}

//Arreglo de people (aún no sé traerlo de la data así que pegué directamente el de una película)
const people = [
  {
    "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
    "name": "Pazu",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
    "gender": "Male",
    "age": "13",
    "eye_color": "Black",
    "hair_color": "Brown",
    "specie": "Human"
  },
  {
    "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
    "name": "Lusheeta Toel Ul Laputa",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
    "gender": "Female",
    "age": "13",
    "eye_color": "Black",
    "hair_color": "Black",
    "specie": "Human"
  },
  {
    "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
    "name": "Dola",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
    "gender": "Female",
    "age": "60",
    "eye_color": "Black",
    "hair_color": "Peach",
    "specie": "Human"
  },
]
//Muestra el nuevo arreglo en la consola
console.log(people);


const sortedPeople = orderByAlphabetical(people, person => person.name);
console.log(sortedPeople);


const personList = document.getElementById('person-list');


sortedPeople.forEach(({ name, img, gender }) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <img src="${img}" alt="${name}">
    <p>Name: ${name}</p>
    <p>Gender: ${gender}</p>
  `;
  personList.appendChild(li);
});