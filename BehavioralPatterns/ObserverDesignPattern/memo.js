/*
Observer Design Pattern
Used by RxJS, Subjects and Observables
*/
const readServ = require("./readService");
const overwriteServ = require("./overwriteService");

class Memo {
  constructor(text, user) {
    this.text = text;
    this.user = user;
    console.log(user + " has created a memo");
  }

  observerList = new Array(readServ, overwriteServ);

  read() {
    console.log("Memo: " + this.text);
    this.observerList[0].notify(this);
  }

  overwrite(newText, user) {
    if (user === this.user) {
      console.log(user + " has overwritten a memo");
      this.text = newText;
      this.observerList[1].notify(this);
    } else console.log(user + " can't overwrite this memo");
  }
}

module.exports = Memo;
