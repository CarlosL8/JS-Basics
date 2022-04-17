/* El objeto Date nos permite obtener la fecha local actual */
// console.log(Date()); --> forma simple
console.log("****** Objeto Date ******");
let fecha = new Date();
console.log(fecha);

//Podemos obtener el numero del día del mes actual
console.log(fecha.getDate());

/*Podemos obtener el dia representado en valor numerico respecto a su posicion 
( D L M Mi J V S -> 0 1 2 3 4 5 6 ) */
console.log(fecha.getDay());

/*Podemos obtener el mes del año representado en valor numero respecto a su posicion. 
Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11 */
console.log(fecha.getMonth());

console.log("****** obteniendo informacion de fecha actual ******");
console.log(fecha.getFullYear()); // Año actual.
console.log(fecha.getHours()); // Hora actual.
console.log(fecha.getMinutes()); // Minuto actual
console.log(fecha.getSeconds()); // Segundo actual.
console.log(fecha.getMilliseconds()); // Milisegundo actual.

console.log("");

/* Existen diferentes metodos para obtener la fecha actual de manera legible para el usuario
Ya sea infromacion completa o especifica */
console.log("****** Obteniendo informacion en formato legible");
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());

console.log("");

//Podemos obtener valores comparativos con base a la hora 0
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

console.log("");

//Podemos obtener un valor respecto a el timestap (1970)
console.log("******** Ejemplo de timestamp ********");
console.log(Date.now());
let cumpleJon = new Date(1995, 4, 23);
console.log(cumpleJon);
