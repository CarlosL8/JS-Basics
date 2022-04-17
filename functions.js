/* Las funciones se definen un sola vez y se pueden ejecutar en cualquier momento
las funciones pueden o no recibir parametros y pueden o no devolver valores */

console.log("********** Simple **********");

function funcionSimple() {
  console.log("Esta es");
  console.log("una funcion");
  console.log("basica");
}

funcionSimple();

/* Dentro de las funciones contamos con una palabra reservada como return
que devuelve el valor de la funcion */

console.log("********** retorno **********");

function funcionConRetorno() {
  console.log("Funcion con retorno");
  return "Este es el valor de retorno de la funcion";
}

let valorDeFuncion = funcionConRetorno();
console.log(valorDeFuncion);

/* Una de las caracteristicas de la funciones es que se le pueden pasar parametros
los cuales tomaran el valor que se les asigne a los argumentos */

console.log("********** parametros **********");

function saludo(nombre, carrera) {
  console.log(`Hola soy ${nombre} de la ingenieria de ${carrera}`);
}

saludo("Carlos", "Sistemas computacionales");
saludo("Jose", "Desarrollo comunitario");

/* Para las funciones DECLARADAS tambien se les aplica el concepto del hoisting.
Esto quiere decir que no importa cuando declares la funcion, la puedes llamar antes o despues de declararla */

console.log("********** hoisting **********");

console.log(suma(20, 5));

function suma(a, b) {
  let operacion = a + b;
  return operacion;
}

console.log(suma(10, 5));

/* Tambien se pueden usar las funciones como expreciones, es decir, una funcion que se ha asignado como valor a una variable
a esta forma tambien se le conoce como funciones anonimas.
A las funciones EXPRESADAS no se les aplica el concepto del hoisting  */

console.log("********** Anonimas **********");

// funcionConstante();  Error: Cannot access 'funcionConstante' before initialization

const funcionConstante = function () {
  console.log("Esta es una funcion anonima");
};

funcionConstante();
