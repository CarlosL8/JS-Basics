/* Parametros REST

Los Parametros REST son una forma de virtualmente ir agregando parametros
infinitos ya sea a una funcio o dentro de una variable.
Para  utilizarlo solo debemos poner tres puntos dentro de los parametros de una funcion (...)
seguido el parametro con el que se declarara un arreglo (...c)

*/

console.log("********** REST **********");

function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}

console.log(sumar(5, 5));
console.log(sumar(5, 5, 10));
console.log(sumar(5, 5, 10, 2));
console.log(sumar(5, 5, 10, 2, 8));

/* Operadores Spread 

Los operadores Spread nos permiten la ampliacion de los arreglos, estos no estan sujetos a
los parametros de una funcion, sino que pueden ser utilizados en cualquier segmento del codigo.
Para utilizarlos debemos poner tres puntos antes del elemento (...a1)

*/

console.log("********** Spread **********");

const ARRAY1 = [1, 2, 3, 4, 5],
  ARRAY2 = [6, 7, 8, 9, 0];

console.log(ARRAY1, ARRAY2);

const ARRAY3 = [...ARRAY1, ...ARRAY2];
console.log(ARRAY3);
