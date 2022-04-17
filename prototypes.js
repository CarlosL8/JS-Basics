/*Los prototipos son un mecanismo por el cual un objeto puede heredar
atributos y metodos de un objeto padre */

function animal(nombre, genero) {
  (this.nombre = nombre), (this.genero = genero);
}

animal.prototype.sonido = function () {
  console.log("Sonido de animal");
};

const ELEFANTE = new animal("elefante", "Macho"),
  JAGUAR = new animal("jaguar", "Hembra");

console.log(ELEFANTE);
console.log(JAGUAR);
