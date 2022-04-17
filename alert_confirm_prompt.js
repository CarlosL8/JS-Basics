/*El objeto window tiene tres metodos basicos como son alert, confirm y prompt
Estos metodos son los mas basicos para agregar interaccion con el usuario  */
console.log(window);
console.log("");

console.log("******** Metodos basicos de Window ********");

alert("Hola soy una alerta, mi funcion es dar un mensaje");
confirm("Hola soy una confirmacion");
prompt("Hola soy un aviso, mi funcion es solicitar un valor al usuario");

console.log("");

/* Estos metodos se pueden almacenar en variables para poder usar despues sus valores
asignados por el usuario */
console.log("******** valores asignados a variables ********");

let alerta = alert("Hola soy una alerta, mi funcion es dar un mensaje"),
  confirmacion = confirm("Hola soy una confirmacion"),
  aviso = prompt(
    "Hola soy un aviso, mi funcion es solicitar un valor al usuario"
  );

console.log(alerta);
console.log(confirmacion);
console.log(aviso);

/* Nota:
El metodo alert no es necesario guardarlo en una variable ya que el valor retornado siempre sera el mismo
Los valores que regresa el metodo confirm solo son true o false
El metodo prompt puede devolver el valor ingresado por el usuario o el valor null que se asigna al dar click en cancelar */
