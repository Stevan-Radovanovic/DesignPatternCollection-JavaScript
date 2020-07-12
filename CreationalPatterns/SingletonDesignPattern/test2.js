let single = require("./singleton");

let execute = function () {
  single.increaseCount();
  single.increaseCount();
  single.increaseCount();
  single.increaseCount();
};

module.exports = execute;
