/* El objeto console tiene diferntes metodos con los que podemos modificar la consola.
Para conocer todos los objetos de la consola solo debemos imprimir en consola el mismo objeto*/

console.log("********** Objeto Console **********");
console.log(console);

console.log("");

/* Estos son algunos ejemplos de como modificamos algunos metodos del objeto */
console.log("********** Metodos de console **********");
console.error("Esto es un error");
console.warn("Esto es una alerta");
console.info("Esto es informaciòn");

console.log("");

/* Metodo Time del objeto console
Este metodo nos permite obtener el tiempo de ejecucion del bloque de codigo que definamos*/
console.time("Cuanto tiempo tarda mi código");
const arreglo = Array(1000);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
console.timeEnd("Cuanto tiempo tarda mi código");

console.log("");

/* Metodo Count
Este metodo nos permite contar el numero de veces que se ejecuta un bloque de codigo*/
for (let i = 0; i <= 5; i++) {
  console.count("código for");
  console.log(i);
}

console.log("");

/* Metodo assert
Este metodo suele utilizarse para la prueba de prototipos, si no existe un error no muestra ningun mensaje*/
let x = 3,
  y = 2,
  pruebaXY = "Se espera que X siempre sea menor que Y";
console.assert(x < y, { x, y, pruebaXY });

console.log("");

/* Permite visualizar los metodos en forma de tabla y ordenarlos con sort() */
console.table(Object.entries(console).sort());

console.log("");

/* De igual forma podemos conocer los metodos de diferentes objetos */
console.log("********** Metodos de objetos **********");
console.log(window);
console.log(document);
console.dir(document); //La diferencia con el anterior es que dir nos muestra sus metodos del objeto y log solo el codigo html
