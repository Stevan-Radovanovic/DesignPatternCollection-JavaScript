class Person {
  constructor(name, age, weight, heigth) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.heigth = heigth;
  }

  toString() {
    console.log(this.name + " is a person");
  }
}

class Student extends Person {
  constructor(name, age, weight, heigth) {
    super(name, age, weight, heigth);
  }

  toString() {
    console.log(this.name + " is a student");
  }
}

const person = new Person("Petar", 15, 63, 193);
const student = new Student("Stevan", 22, 193, 72);
person.toString();
student.toString();
