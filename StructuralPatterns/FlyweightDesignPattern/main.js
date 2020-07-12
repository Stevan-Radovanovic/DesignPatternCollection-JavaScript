const student = require("./student");
const flyweight = require("./flyweight-factory");

let students = [];

console.log("Memory before FlyWeight: " + process.memoryUsage().heapUsed);

for (let index = 1; index <= 100000; index++) {
  students.push(
    new student(
      "RandomName",
      Math.floor(Math.random() * 43),
      Math.floor(Math.random() * 10)
    )
  );
}

console.log("Memory after FlyWeight: " + process.memoryUsage().heapUsed);

console.log("Number of students: " + students.length);
console.log(
  "Number of flyweights: " + Object.keys(flyweight.flyweights).length
);
