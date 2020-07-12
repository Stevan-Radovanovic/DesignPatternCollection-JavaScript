/*
Decorator Design Pattern
*/
class Notice {
  constructor() {
    console.log("Notice created");
  }

  greenNotice() {
    console.log("This is a green notice");
  }

  redNotice() {
    console.log("This is a red notice");
  }
}

const thisHasYellow = new Notice();
thisHasYellow.greenNotice();
thisHasYellow.redNotice();

//Adding a new function
thisHasYellow.yellowNotice = function () {
  console.log("This is a yellow notice");
};
thisHasYellow.yellowNotice();

thisDoesntHaveYellow = new Notice();
thisDoesntHaveYellow.greenNotice();
thisDoesntHaveYellow.redNotice();

//Overwriting the red notice method for this object only
thisDoesntHaveYellow.redNotice = () => {
  console.log("This is a new red notice");
};
thisDoesntHaveYellow.redNotice();
