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

class PersonDecorator {
  constructor(person) {
    this.person = person;
  }

  toString() {
    this.person.toString();
  }
}

class PersonDecoratorNobility extends PersonDecorator {
  constructor(person) {
    super(person);
  }

  toString() {
    console.log(this.person.name + " is a NOBLE person");
  }
}

const person = new Person("Stevan", 23, 72, 193);
const noblePerson = new PersonDecoratorNobility(person);
person.toString();
noblePerson.toString();
