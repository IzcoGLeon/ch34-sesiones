console.log("Hola desde la terminal");
console.log("Sesión CS01");

//Complete the function to print out the string: This is a sentence.

let arr = ["This", "is", "a", "sentence."];
printOutString = (arrayStr) => {
  let newStr = arrayStr.join(" ");
  return newStr;
}

console.log(printOutString(arr));