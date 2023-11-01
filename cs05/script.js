console.log("Hola desde la terminal");
console.log("Tarea 05");

/* 
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list. x
2.	Write the command to remove "Dani" from the array. x
3.	Write the command to remove "Juan" from the array. x
4.	Write the command to move "Luis" to the front of the array. x
5.	Write the command to add your name to the end of the array. x 
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located. x 
At the end of the exercise, there should be 4 people in the array.

*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

people.forEach(element => console.log(element));

deleteNames = (value, index, arr) => {
  if (value === "Dani" || value === "Juan") {
    arr.splice(index, 1);
    return true
  }
  return false;
}

let deletedNames = people.filter(deleteNames);
console.log(people);
console.log(deletedNames);

moveElement = (array, fromIndex, toIndex) => {
  const element = array.splice(fromIndex, 1)[0];

  console.log(element);

  people.splice(toIndex, 0, element);

  return people;
}

const fromIndex = people.indexOf('Luis');
const toIndex = 0;

const result = moveElement(people, fromIndex, toIndex);
console.log(result);

addNameEnd = (array, name) => {
  array.push(name);
  return array;
}
console.log(addNameEnd(people, "Izco"));

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === 'Maria') {
    break;
  }
}

console.log(people.indexOf('Maria'));
console.log(people);
