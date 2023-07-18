import {
  filtroLuchador,
  filtroTirador,
  filtroMago,
  filtroAsesino,
  filtroTanque,
  filtroApoyo,
  OrdenarAZ,
  OrdenarZA,
  calcularRoles,
} from "../src/data.js";
// Cree una pequeña data aleatoria que servira para probar los test
const lol = [
  {
    name: "Aatrox",
    tags: ["Fighter", "Tank"],
    info: {
      attack: "8",
      defense: "4",
      magic: "3",
      difficulty: "4",
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
      attack: "3",
      defense: "4",
      magic: "8",
      difficulty: "5",
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
  //it = el
  it("Debería retornar una función", () => {
    expect(typeof filtroLuchador).toBe("function");
    // expect = espera         toBe = es
  });
  it("Debería retornar para Luchador: el campeon [Aatrox]", () => {
    const dataLuchador = filtroLuchador(lol);
    expect(dataLuchador[0].name).toEqual("Aatrox");
    // expect = espera         toEqual = A igual
  });
  it("Debería retornar para Luchador: el campeon [Vi]", () => {
    const dataLuchador = filtroLuchador(lol);
    expect(dataLuchador[1].name).toEqual("Vi");
    // expect = espera         toEqual = A igual
  });
});
// Prueba filtrado por rol (Tirador)
describe("filtroTirador retorna los campeones con el tags Marksman (rol tirador)", () => {
  //it = el
  it("Debería retornar una función", () => {
    expect(typeof filtroTirador).toBe("function");
    // expect = espera         toBe = es
  });
  it("Debería retornar para Tirador: la compeona [Ashe]", () => {
    const dataTirador = filtroTirador(lol);
    expect(dataTirador[0].name).toEqual("Ashe");
    // expect = espera         toEqual = A igual
  });
});
// Prueba filtrado por rol (Mago)
describe("filtroMago retorna los campeones con el tags Mage (rol Mago)", () => {
  //it = el
  it("Debería retornar una función", () => {
    expect(typeof filtroMago).toBe("function");
    // expect = espera         toBe = es
  });
  it("Debería retornar para Mago: la compeona [Ahri]", () => {
    const dataMago = filtroMago(lol);
    expect(dataMago[0].name).toEqual("Ahri");
    // expect = espera         toEqual = A igual
  });
  it("Debería retornar para Mago: la compeona [Lux]", () => {
    const dataMago = filtroMago(lol);
    expect(dataMago[1].name).toEqual("Lux");
    // expect = espera         toEqual = A igual
  });
});
// Prueba filtrado por rol (Asesino)
describe("filtroAsesino retorna los campeones con el tags Assassin (rol Asesino)", () => {
  //it = el
  it("Debería retornar una función", () => {
    expect(typeof filtroAsesino).toBe("function");
    // expect = espera         toBe = es
  });
  it("Debería retornar para Asesino: la compeona [Ahri]", () => {
    const dataAsesino = filtroAsesino(lol);
    expect(dataAsesino[0].name).toEqual("Ahri");
    // expect = espera         toEqual = A igual
  });
  it("Debería retornar para Asesino: la compeona [Vi]", () => {
    const dataAsesino = filtroAsesino(lol);
    expect(dataAsesino[1].name).toEqual("Vi");
    // expect = espera         toEqual = A igual
  });
});
// Prueba filtrado por rol (Tanque)
describe("filtroTanque retorna los campeones con el tags Tank (rol Tanque)", () => {
  //it = el
  it("Debería retornar una función", () => {
    expect(typeof filtroTanque).toBe("function");
    // expect = espera         toBe = es
  });
  it("Debería retornar para Tanque: el campeon [Aatrox]", () => {
    const dataTanque = filtroTanque(lol);
    expect(dataTanque[0].name).toEqual("Aatrox");
    // expect = espera         toEqual = A igual
  });
  it("Debería retornar para Tanque: el campeon [Gnar]", () => {
    const dataTanque = filtroTanque(lol);
    expect(dataTanque[1].name).toEqual("Gnar");
    // expect = espera         toEqual = A igual
  });
});
// Prueba filtrado por rol (Apoyo)
describe("filtroApoyo retorna los campeones con el tags Support (rol Apoyo)", () => {
  //it = el
  it("Debería retornar una función", () => {
    expect(typeof filtroApoyo).toBe("function");
    // expect = espera         toBe = es
  });
  it("Debería retornar para Apoyo: la compeona [Ashe]", () => {
    const dataApoyo = filtroApoyo(lol);
    expect(dataApoyo[0].name).toEqual("Ashe");
    // expect = espera         toEqual = A igual
  });
  it("Debería retornar para Apoyo: la compeona [Lux]", () => {
    const dataApoyo = filtroApoyo(lol);
    expect(dataApoyo[1].name).toEqual("Lux");
    // expect = espera         toEqual = A igual
  });
});
// Test filtrado en orden alfabetico
describe("ordenarAZ ordena todos los campeones en orden de la A a la Z", () => {
  //it = el
  it("Debería retornar una función", () => {
    expect(typeof OrdenarAZ).toBe("function");
    // expect = espera         toBe = es
  });
  it("Debería retornar los campeones en orden ascendente", () => {
    const dataOrdenadaAZ = OrdenarAZ(lol);
    expect(dataOrdenadaAZ[0].name).toEqual("Aatrox");
    expect(dataOrdenadaAZ[1].name).toEqual("Ahri");
    expect(dataOrdenadaAZ[2].name).toEqual("Ashe");
    expect(dataOrdenadaAZ[3].name).toEqual("Gnar");
    expect(dataOrdenadaAZ[4].name).toEqual("Lux");
    expect(dataOrdenadaAZ[5].name).toEqual("Vi");
    // expect = espera         toEqual = A igual
  });
});
describe("ordenarZA ordena todos los campeones en orden de la Z a la A", () => {
  //it = el
  it("Debería retornar una función", () => {
    expect(typeof OrdenarZA).toBe("function");
  });
  it("Debería retornar los campeones en orden descendente", () => {
    const dataOrdenadaZA = OrdenarZA(lol);
    expect(dataOrdenadaZA[0].name).toEqual("Vi");
    expect(dataOrdenadaZA[1].name).toEqual("Lux");
    expect(dataOrdenadaZA[2].name).toEqual("Gnar");
    expect(dataOrdenadaZA[3].name).toEqual("Ashe");
    expect(dataOrdenadaZA[4].name).toEqual("Ahri");
    expect(dataOrdenadaZA[5].name).toEqual("Aatrox");
    // expect = espera         toEqual = A igual
  });
});
// Prueba Calcular por rol (luchador)
describe("calcularRoles retorna la cantidad de campeones por rol", () => {
  //it = el
  it("Debería retornar una función", () => {
    expect(typeof calcularRoles).toBe("function");
  });
  it("Debería retornar para Fighter (Luchador): la cantidad 3", () => {
    const cantidadLuchador = calcularRoles(lol);
    expect(cantidadLuchador["Fighter"]).toEqual(3);
  });
  it("Debería retornar para Marksman (Tirador): la cantidad 1", () => {
    const cantidadTirador = calcularRoles(lol);
    expect(cantidadTirador["Marksman"]).toEqual(1);
  });
  it("Debería retornar para Mage (Mago): la cantidad 2", () => {
    const cantidadMago = calcularRoles(lol);
    expect(cantidadMago["Mage"]).toEqual(2);
  });
  it("Debería retornar para Assassin (Asesino): la cantidad 2", () => {
    const cantidadAsesino = calcularRoles(lol);
    expect(cantidadAsesino["Assassin"]).toEqual(2);
  });
  it("Debería retornar para Tank(Tanque): la cantidad 2", () => {
    const cantidadTanque = calcularRoles(lol);
    expect(cantidadTanque["Tank"]).toEqual(2);
  });
  it("Debería retornar para Support(Apoyo): la cantidad 2", () => {
    const cantidadApoyo = calcularRoles(lol);
    expect(cantidadApoyo["Support"]).toEqual(2);
  });
});