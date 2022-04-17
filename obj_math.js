/* El objeto math es un objeto estatico el cual nos permite realizar operaciones
matematicas especiales */
console.log("********** Operaciones con Math **********");

console.log(Math);

console.log(Math.PI);

console.log(Math.abs(-7.8)); //Muestra el valor absoluto de un numero

console.log(Math.ceil(7.2)); //Redondea al numero mayor

console.log(Math.floor(7.8)); //Redondea al numero menor

console.log(Math.round(7.49)); //Redondea al valor mas cercano

console.log(Math.sqrt(81)); //Raiz cuadrada de un numero

console.log(Math.pow(2, 5)); //Potencia de un numero

console.log(Math.sign(-0.3)); // Refleja el contexto del valor con -1, 0, 1 dependiendo del signo

console.log(Math.random()); //Genera un numero aleatorio entre 0 y 1

console.log(Math.round(Math.random() * 1000)); //Genera un numero aleatorio entre 0 y 1000 que sea entero
