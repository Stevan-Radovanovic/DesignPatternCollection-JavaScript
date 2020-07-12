const flyweight = require("./flyweight-factory");

class Student {
  constructor(name, exams, gpa) {
    this.flyweight = flyweight.call(exams, gpa);
    this.name = name;
  }
}

module.exports = Student;
