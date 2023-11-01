console.log("Hola desde la terminal");
console.log("Sesión CS01");

const numbArray = [1, 2, 3, 4];

computeSumAndProduct = (array) => {
  let getSum = array.reduce(
    (accumulator, currValue) => accumulator + currValue
  );

  let getProduct = array.reduce(
    (accumulator, currValue) => accumulator * currValue
  );

  return console.log(`The sum is ${getSum} and the product is ${getProduct}.`);
}

computeSumAndProduct(numbArray);





