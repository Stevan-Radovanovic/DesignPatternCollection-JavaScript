const Memo = require("./memo.js");

const m1 = new Memo("This is memo 1", "Arthur");
m1.read();
m1.overwrite("I am Lord Prescott", "Prescott");
m1.overwrite("I am Lord Arthur", "Arthur");
m1.read();
