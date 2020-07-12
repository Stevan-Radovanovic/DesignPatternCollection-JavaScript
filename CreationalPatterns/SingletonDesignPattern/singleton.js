/*
Singleton Design Pattern
Ensuring that one instance of all classes is passed around
*/
class Singleton {
  constructor() {
    console.log("Singleton created");
  }

  count = 0;

  increaseCount() {
    this.count++;
    console.log("Count is now " + this.count);
  }
}

module.exports = new Singleton();
