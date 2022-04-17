/*Desde ES6 se implemento una nueva forma de definir prototipos.
Esta forma se representa en forma de clases, lo cual nos permite realizar codigo mas conciso */

console.log("********** Clases **********");

/*Para poder utilizar clases en JS primero la definimos, despues debemos definir el constructor,
el constructor recibira los parametros (atributos) de nuestra clase */

class animal {
  constructor(nombre, genero) {
    (this.nombre = nombre), (this.genero = genero);
  }

  //   Metodos de la clase
  sonido() {
    console.log("Tengo sonido salvaje");
  }

  cazar() {
    console.log("acecho a mi preza");
  }
}

// instanciamos nuevos objetos de la clase animal

const leon = new animal("Leon", "Macho"),
  aguila = new animal("aguila", "Macho");

// Imprimos en consola las instancias creadas de la clase animal y uno de sus metodos

console.log(leon);
console.log(aguila);
aguila.cazar();

// La Herencia es la manera en como las instancias heredan propiedades y metodos del objeto padre

console.log("********** Herencia **********");

class perro extends animal {
  constructor(nombre, genero, raza) {
    // con el metodo super se manda a llamar el constructor de la clase padre
    super(nombre, genero);
    this.raza = raza;
  }

  sonido() {
    console.log("Guau guau");
  }
}

const rocky = new perro("rocky", "Macho", "Danes");

console.log(rocky);
rocky.sonido();
rocky.cazar(); // El metodo cazar lo hereda de la clase animal
