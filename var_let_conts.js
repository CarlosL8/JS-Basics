 console.log("************** var ************** ")

/* var tiene un scope global en cualquier segmento del codigo
No se recomienda su uso (mala practica) */

  var nombreVar = "jose";
  console.log(nombreVar);

 {
     var nombreVar = "Pedro";
     console.log(nombreVar);
 }

  console.log(nombreVar);


  console.log("************** let ************** ")

 /*let tiene un scope de bloque, solo existira dentro de su ambito
  se recomienda usar en lugar de var */

  let nombreLet = "Rojo";
  console.log(nombreLet);

 {
    let nombreLet = "verde";
    console.log(nombreLet);
 }


  console.log(nombreLet)


  console.log("************** conts ************** ")

/*Una constantes es un tipo INMUTABLE, no puede cambiar una vez definida, su scope es de bloque.
Se le debe asignar un valor en el momento de su declaración.
Son referencias inmutables para los valores primitivos pero no para los compuestos.*/

  const PI = 3.1416;
  console.log(PI)

//  PI = 20;
//  console.log(PI);  Error: No se le puede reasignar el valor a una variable primitiva

  const OBJECT =  {
      nombre: "Carlos",
      apellido: "Lopez",
      carrera: "ISC"
  }

  const ARRAY = ["Verde", "Amarillo", "Rojo"]

  console.log(OBJECT);
  console.log(ARRAY);

  /*
  OBJECT.edad = 25;
  ARRAY.push("Azul");

  console.log(OBJECT);
  console.log(ARRAY);
  
  Los valores de una variable compuesta si se pueden modificar
  esto debido a que no cambiamos la naturaleza de la referencia*/