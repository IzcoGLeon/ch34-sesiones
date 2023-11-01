console.log("Hola desde la terminal");
console.log("Tarea 6");

/* 
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
*/

let numbers = [3, 6, 12, 5, 100, 1];

sortNumbers = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
};

const sortedNumbers = numbers.sort(sortNumbers);
console.log(sortedNumbers);