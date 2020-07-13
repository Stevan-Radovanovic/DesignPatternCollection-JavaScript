const readServ = require("./readingService");
const changeServ = require("./changingService");
const mediator = require("./mediator");
const Subject = require("./subject");

mediator.subscribe("read", readServ, readServ.notify);
mediator.subscribe("change", changeServ, changeServ.notify);
let subj = new Subject();
subj.read();
subj.read();
subj.read();
subj.read();
subj.add();
