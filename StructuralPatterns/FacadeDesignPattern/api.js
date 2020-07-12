/*
Facade Design Pattern
Simplifying work with complicated APIs
*/
const bootUpServer = function (timeZone, serverName, port) {
  console.log("Booting up the server in " + timeZone + " time zone...");
  setTimeout(() => {
    console.log(
      "Server " + serverName + " is up and running at the port " + port
    ),
      4000;
  });
};

const connectToDatabase = function () {
  console.log("Connecting to the database...");
  setTimeout(() => {
    console.log("Connected to database"), 4000;
  });
};

const getAllMemos = function () {
  console.log("Fetching all the memos..");
  setTimeout(() => {
    console.log("Memos fetched"), 4000;
  });
};

class BootUpFacade {
  constructor() {
    console.log("Facade created");
  }

  facadeStartUp() {
    bootUpServer("GMT +01", "MemoServer", "8080");
    connectToDatabase();
    getAllMemos();
    console.log("Everything is ready for work");
  }
}

const facade = new BootUpFacade();
facade.facadeStartUp();
