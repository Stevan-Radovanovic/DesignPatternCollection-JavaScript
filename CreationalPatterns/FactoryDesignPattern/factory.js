let roles = require("./roles");

/*
Factory Design Pattern
Unifying multiple classes in one class factory
*/
class RoleFactory {
  constructor(type) {
    return new roles[type]();
  }
}

module.exports = RoleFactory;
