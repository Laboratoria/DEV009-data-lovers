// estas funciones son de ejemplo
let champion = [
  {
    name: "samir",
  },
  {
    name: "paolo",
  },
  {
    name: "renzo",
  },
  {
    name: "andrea",
  },
  {
    name: "mili",
  },
];
export const example = () => {
  champion.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
};

console.log(champion);

export const anotherExample = () => {
  return "OMG";
};
