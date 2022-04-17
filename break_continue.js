/* Estas palabras nos permiten controlar el flujo de las estructuras de control. 
break => rompe el flujo de la estructura en la condicion definida
continue => omite el valor definido  en la condicion dentro del flujo de la estructura */

const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("********** break ***********");

for (let i = 0; i < NUMEROS.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(NUMEROS[i]);
}

console.log("********** continue **********");
for (let i = 0; i < NUMEROS.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(NUMEROS[i]);
}
