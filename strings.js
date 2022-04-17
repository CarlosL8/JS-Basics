/* Los strings son cadenas de caracteres que se pueden asignar a variables */

console.log("************** Strings **************");

let nombre = "Carlos";
let apellido = "Lopez";
let mensaje = "desarrollador frontend";

console.log(nombre, apellido, mensaje);

/* Los Strings cuentan con la propiedad length
Esta porpiedad nos permite saber el numero de caracteres del string */

console.log("************** propertys **************");

console.log(nombre.length);
console.log(apellido.length);
console.log(mensaje.length);

/* Los Strings aparte de tener propiedades, cuentan con metodos */

console.log("************** Methods **************");

console.log(
  nombre.toUpperCase(),
  apellido.toLowerCase(),
  mensaje.includes("frontend")
);

/* La concatenacion nos permite combinar variables */

console.log("************** Concatenacion **************");
{
  let equipo = "Real Madrid";
  let mensaje = "El maximo ganador de la champios es";

  console.log(mensaje + " " + equipo);
}

/* La interpolacion nos permite meter dentro de una cadena de texto el valor de variables
de manera dinamica */

console.log("************** Interpolacion **************");

{
  let equipo = "Real Madrid";
  let mensaje = "el maximo ganador de la champios";

  console.log(`Mi equipo es el ${equipo} y es ${mensaje}`);
}

/* La interpolacion forma parte de los templates strigns, otra caracteristica
nos permite imprimir un string con salto de linea al usar las comillas invertidas,
algo que no se puede hacer con comillas dobles o simples */

let ul = `    
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>`;

console.log(ul);
