const Flyweight = require("./flyweight");

/*
FlyWeight Design Pattern
Minimizes memory usage by re-using some values
*/
class FlyWeightFactory {
  flyweights = {};

  call(exams, gpa) {
    if (!this.flyweights[exams + gpa]) {
      this.flyweights[exams + gpa] = new Flyweight(exams, gpa);
    }
    return this.flyweights[exams + gpa];
  }
}

module.exports = new FlyWeightFactory();
