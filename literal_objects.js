// Nos permite simplificar codigo, dado que JS interpreta de manera interna la asignacion de variables y funciones

// Antes de ES6

console.log("********** A-ES6 **********");

let mascota = "gato",
  edad = 1;

const MASCOTA = {
  mascota: mascota,
  edad: edad,
  sonido: function () {
    console.log("Miauu");
  },
};

console.log(MASCOTA);
MASCOTA.sonido();

// Despues de ES6

console.log("********** D-ES6 **********");

let animal = "leon",
  tipo = "salvaje";

const ANIMAL = {
  animal,
  tipo,
  sonido() {
    console.log("Raawr");
  },
};

console.log(ANIMAL);
ANIMAL.sonido();
