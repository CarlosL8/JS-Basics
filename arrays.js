/* Los arreglos son tipos de datos compuestos, se recomienda asignarlos con una variable de topo const
Este tipo de dato no es mas que un conjunto de valores representados en una lista */

console.log("********** Arrays **********");

const ARRAY = ["Azul", 55, true, ["Rojo", "Verde", "Azuk"]];
console.log(ARRAY);

// Para acceder a los elementos de un arreglo de manera especifica usaremos su posicion dentro del arreglo
console.log(ARRAY[2]);

// Para acceder a un elemento del arreglo anidado usaremos la misma sintaxis
console.log(ARRAY[3][0]);

/* Otra forma de declarar arreglos es la siguiente */
const ARRAY_2 = Array.of("carlos", 25, false, [1, 2, 3]);
console.log(ARRAY_2);

/* Los arreglos cuentan con una variante extensa de metodos algunos como:
.push() - Agrega un nuevos elementos al arreglo
.pop() - Elimina el ultimo valor del arreglo y lo retorna */

const MESES_DEL_AÑO = ["Enero", "Febrero", "Marzo", "abril", "Mayo", "Junio"];
console.log(MESES_DEL_AÑO);

MESES_DEL_AÑO.push("Julio", "Agosto", "Septiembre");
console.log(MESES_DEL_AÑO);

console.log(MESES_DEL_AÑO.pop());
console.log(MESES_DEL_AÑO);

// .forEach ¿?
