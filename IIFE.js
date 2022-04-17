//Las funciones Anónimas Autoejecutables son funciones que se ejecutan tan pronto como se definen.

console.log("***** Funcion autoejecutable basica *****");

(function () {
  console.log("Mi primer IIFE");
})();

console.log("");

//Dado que como su nombre lo dice es una funcion, puede recibir parametros y argumentos.

console.log("***** Funcion con parametros y argumentos *****");

(function (d, w, c) {
  console.log("Mi segunda IIFE");
  console.log(d);
  console.log(w);
  c.log("Este es un console.log");
})(document, window, console);

console.log("");

//Existen varias formas de escribir las funciones Anónimas Autoejecutables

//Clásica
(function () {
  console.log("versión Clásica");
})();

//La Crockford (JavaScript The Good Parts)
(function () {
  console.log("versión Crockford");
})();

//Unaria
+(function () {
  console.log("versión Unaria");
})();

//Facebook
!(function () {
  console.log("versión Facebook");
})();
