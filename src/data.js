export const filtroLuchador = function (data) {
  return data.filter((champion) => champion.tags.includes("Fighter"));
};

export const filtroTirador = function (data) {
  return data.filter((champion) => champion.tags.includes("Marksman"));
};

export const filtroMago = function (data) {
  return data.filter((champion) => champion.tags.includes("Mage"));
};

export const filtroAsesino = function (data) {
  return data.filter((champion) => champion.tags.includes("Assassin"));
};

export const filtroTanque = function (data) {
  return data.filter((champion) => champion.tags.includes("Tank"));
};

export const filtroApoyo = function (data) {
  return data.filter((champion) => champion.tags.includes("Support"));
};




export const OrdenarAZ = function (data) {
  return data = data.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
};

export const OrdenarZA = function (data) {
  return data = data.sort((a, b) => {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
};