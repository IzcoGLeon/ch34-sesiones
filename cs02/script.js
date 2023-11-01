console.log("Hola desde la terminal");
console.log("Sesión CS01");

/* 
  Write a function that:
  •	Takes in an array of numbers.
  •	Doubles the value of each number in the array.
  •	Prints out the new updated array.
*/

let arr = [4, 19, 25, 34, 46, 52, 100];

doubleTheValue = array => {
  let newArray = array.map((i) => i * 2);
  return console.log(newArray);
}

doubleTheValue(arr);