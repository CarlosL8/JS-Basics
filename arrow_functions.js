/* Es una nueva forma de definir funciones anonimas que sean expresadas
funcion expresada = una variable que se le asigna una funcion anonima

Example:

    let saludar = function() {
        console.log("hola")
    }
    saludar();

*/

console.log("******* Arrow-fucntion *******");

/* Cuando una arrow fuction tiene una sola linea de codigo se pueden omitir las llaves
y dejar la funcion expresada en una sola linea de codigo */

let saludar = () => console.log("Hola soy una arrow function");

saludar();

/* Las funciones flecha tambien pueden recibir parametros. 
Cuando una funcion flecha recibe solo un parametro podemos omitir los parentesis de los parametros */

let bienvenida = (nommbre) => console.log(`Bienvenio ${nommbre}`);

bienvenida("Carlos");

/* Las arrow function cuenta con un return implicito */

const SUMAR = (a, b) => a + b;
console.log(SUMAR(5, 10));

// Estructura de una arrow function con varias lineas, dejando las llaves

const F_VARIAS_LINEAS = (nom, actividad, empresa, tiempo) => {
  console.log(`Hola soy ${nom} y me encargo de ${actividad}`);
  console.log(`Llevo laborando ${tiempo} en la empresa ${empresa}`);
};

F_VARIAS_LINEAS("Roberto", "Cocinar", "PEX", "10 años");

// Podemos ocupar las arrow functions para hacer uso de los metodos de iteracion de los arreglos

console.log("******** iterarion-con-A-F ********");

const NUMEROS = [1, 2, 3, 4, 5, 6];
NUMEROS.forEach((e, index) => console.log(`${e} esta en la posicion ${index}`));
