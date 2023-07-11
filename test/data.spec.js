import {
  filtroLuchador,
  filtroTirador,
  filtroMago,
  filtroAsesino,
  filtroTanque,
  filtroApoyo,
  OrdenarAZ,
  OrdenarZA,
} from "../src/data.js";

// Cree una pequeña data aleatoria que servira para probar los test
const lol = [
  {
    name: "Aatrox",
    tags: ["Fighter", "Tank"],
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4,
    },
  },
  {
    name: "Ashe",
    tags: ["Marksman", "Support"],
    info: {
      attack: 7,
      defense: 3,
      magic: 2,
      difficulty: 4,
    },
  },
  {
    name: "Ahri",
    tags: ["Mage", "Assassin"],
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5,
    },
  },
  {
    name: "Vi",
    tags: ["Fighter", "Assassin"],
    info: {
      attack: 8,
      defense: 5,
      magic: 3,
      difficulty: 4,
    },
  },
  {
    name: "Gnar",
    tags: ["Fighter", "Tank"],
    info: {
      attack: 6,
      defense: 5,
      magic: 5,
      difficulty: 8,
    },
  },
  {
    name: "Lux",
    tags: ["Mage", "Support"],
    info: {
      attack: 2,
      defense: 4,
      magic: 9,
      difficulty: 5,
    },
  },
];

// Prueba filtrado por rol (luchador)
describe("filtroLuchador retorna los campeones con el tags Fighter (rol luchador)", () => {
  it("Debería retornar una función", () => {
    expect(typeof filtroLuchador).toBe("function");
  });
  it("Debería retornar para Luchador: el campeon [Aatrox]", () => {
    const dataLuchador = filtroLuchador(lol);
    expect(dataLuchador[0].title).toEqual("Aatrox");
  });
  it("Debería retornar para Luchador: el campeon [Vi]", () => {
    const dataLuchador = filtroLuchador(lol);
    expect(dataLuchador[1].title).toEqual("Vi");
  });
});

// Prueba filtrado por rol (Tirador)
describe("filtroTirador retorna los campeones con el tags Marksman (rol tirador)", () => {
  it("Debería retornar una función", () => {
    expect(typeof filtroTirador).toBe("function");
  });
  it("Debería retornar para Tirador: la compeona [Ashe]", () => {
    const dataTirador = filtroTirador(lol);
    expect(dataTirador[0].title).toEqual("Ashe");
  });
});

// Prueba filtrado por rol (Mago)
describe("filtroMago retorna los campeones con el tags Mage (rol Mago)", () => {
  it("Debería retornar una función", () => {
    expect(typeof filtroMago).toBe("function");
  });
  it("Debería retornar para Mago: la compeona [Ahri]", () => {
    const dataMago = filtroMago(lol);
    expect(dataMago[0].title).toEqual("Ahri");
  });
  it("Debería retornar para Mago: la compeona [Lux]", () => {
    const dataMago = filtroMago(lol);
    expect(dataMago[1].title).toEqual("Lux");
  });
});

// Prueba filtrado por rol (Asesino)
describe("filtroAsesino retorna los campeones con el tags Assassin (rol Asesino)", () => {
  it("Debería retornar una función", () => {
    expect(typeof filtroAsesino).toBe("function");
  });
  it("Debería retornar para Asesino: la compeona [Ahri]", () => {
    const dataAsesino = filtroAsesino(lol);
    expect(dataAsesino[0].title).toEqual("Ahri");
  });
  it("Debería retornar para Asesino: la compeona [Vi]", () => {
    const dataAsesino = filtroAsesino(lol);
    expect(dataAsesino[1].title).toEqual("Vi");
  });
});

// Prueba filtrado por rol (Tanque)
describe("filtroTanque retorna los campeones con el tags Tank (rol Tanque)", () => {
  it("Debería retornar una función", () => {
    expect(typeof filtroTanque).toBe("function");
  });
  it("Debería retornar para Tanque: el campeon [Aatrox]", () => {
    const dataTanque = filtroTanque(lol);
    expect(dataTanque[0].title).toEqual("Aatrox");
  });
  it("Debería retornar para Tanque: el campeon [Gnar]", () => {
    const dataTanque = filtroTanque(lol);
    expect(dataTanque[1].title).toEqual("Gnar");
  });
});

// Prueba filtrado por rol (Apoyo)
describe("filtroApoyo retorna los campeones con el tags Support (rol Apoyo)", () => {
  it("Debería retornar una función", () => {
    expect(typeof filtroApoyo).toBe("function");
  });
  it("Debería retornar para Apoyo: la compeona [Ashe]", () => {
    const dataApoyo = filtroApoyo(lol);
    expect(dataApoyo[0].title).toEqual("Ashe");
  });
  it("Debería retornar para Apoyo: la compeona [Lux]", () => {
    const dataApoyo = filtroApoyo(lol);
    expect(dataApoyo[1].title).toEqual("Lux");
  });
});

// Test filtrado en orden alfabetico
describe("ordenarAZ ordena todos los campeones en orden de la A a la Z", () => {
  it("Debería retornar una función", () => {
    expect(typeof OrdenarAZ).toBe("function");
  });
  it("Debería retornar los campeones en orden ascendente", () => {
    const dataOrdenadaAZ = OrdenarAZ(lol);
    expect(dataOrdenadaAZ[0].title).toEqual("Aatrox");
    expect(dataOrdenadaAZ[1].title).toEqual("Ahri");
    expect(dataOrdenadaAZ[2].title).toEqual("Ashe");
    expect(dataOrdenadaAZ[3].title).toEqual("Gnar");
    expect(dataOrdenadaAZ[4].title).toEqual("Lux");
    expect(dataOrdenadaAZ[5].title).toEqual("Vi");
  });
});

describe("ordenarZA ordena todos los campeones en orden de la Z a la A", () => {
  it("Debería retornar una función", () => {
    expect(typeof OrdenarZA).toBe("function");
  });
  it("Debería retornar los campeones en orden descendente", () => {
    const dataOrdenadaZA = OrdenarAZ(lol);
    expect(dataOrdenadaZA[0].title).toEqual("Vi");
    expect(dataOrdenadaZA[1].title).toEqual("Lux");
    expect(dataOrdenadaZA[2].title).toEqual("Gnar");
    expect(dataOrdenadaZA[3].title).toEqual("Ashe");
    expect(dataOrdenadaZA[4].title).toEqual("Ahri");
    expect(dataOrdenadaZA[5].title).toEqual("Aatrox");
  });
});
