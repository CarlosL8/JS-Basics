/*La sintaxis de desestructuración es una expresión de JavaScript
que permite desempacar valores de arreglos o propiedades de objetos en distintas variables. */

console.log("*********** A-destructuring **********");

const ARRAY = ["red", "blue", "yellow", "orange", "green"];

/* Sin destructuracion */

let valor1 = ARRAY[0],
  valor2 = ARRAY[2],
  valor3 = ARRAY[4];

console.log(valor1, valor2, valor3);

/* con destructuracion */

const [v1, v2, v3] = ARRAY;
console.log(v1, v2, v3);

console.log("********** O-destructuring **********");

const objeto = {
  color: "red",
  valor: 25,
  peso: "5kg",
};

/* Sin destructuracion */

let at1 = objeto.color,
  at2 = objeto.valor,
  at3 = objeto.peso;

console.log(at1, at2, at3);

/* con destructuracion */

const { valor, peso, color } = objeto;
console.log(color, peso, valor);
