const mediator = require("./mediator");

class Subject {
  constructor() {
    console.log("Subject created");
  }

  add() {
    console.log("....");
    mediator.publish("change");
  }

  remove() {
    console.log("....");
    mediator.publish("change");
  }

  update() {
    console.log("....");
    mediator.publish("change");
  }

  read() {
    console.log("....");
    mediator.publish("read");
  }
}

module.exports = Subject;
