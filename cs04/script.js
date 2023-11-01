console.log("Hola desde la terminal");
console.log("Ejercicio 4");

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

/*
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

findCommonCourse = (arrayOne, arrayTwo) => {
  let commonCourse = arrayOne.filter(arrayItem => arrayTwo.includes(arrayItem));
  return console.log(commonCourse);
}

findCommonCourse(student1Courses, student2Courses);