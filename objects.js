/* Los objetos son representaciones abstractas de los objetos reales.
Estos objetos se conforman por atributos y metodos */

console.log("********** Objeto **********");

const persona = {
  nombre: "Carlos",
  apellido: "Lopez",
  edad: 25,
  carrera: "ISC",
};

console.log(persona);

/* Los objetos pueden tener elementos anidados como: 
Arreglos.
Objetos.
Funciones. */

console.log("********** A-Anidado **********");

const animal = {
  tipo: "Mascota",
  familia: "gatuna",
  informacion: ["Vela", 1, "arabe"],
};

console.log(animal);

console.log("********** O-Anidado **********");

const contacto = {
  nombre: "Jose",
  apellido: "Perez",
  profesion: "D-Backend",
  redes: {
    correo: "qwerty@gmail.com",
    telefono: 2456813692,
    twitter: "@JoseP",
  },
};

console.log(contacto);

console.log("********** F-Anidada **********");

const auto = {
  tipo: "deportivo",
  marca: "gallardo",
  correr: function () {
    console.log("120km/h");
  },
};

console.log(auto);

/* Para acceder a los atributos de un objeto se utiliza la notacion del punto */

console.log(persona.nombre, persona.edad);

console.log(animal.informacion[2]);

console.log(contacto.redes.twitter);

auto.correr();

/* La palabra "this" hace referencia al contexto donde se encuentra
es decir: el rango del scope  */

const mascota = {
  tipo: "gato",
  familia: "gatuna",
  descripcion: function () {
    console.log(`Soy un ${this.tipo} mi familia es ${this.familia}`);
  },
};

mascota.descripcion();
