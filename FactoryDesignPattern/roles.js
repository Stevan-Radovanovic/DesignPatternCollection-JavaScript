let roles = {};

roles["player"] = class PlayerFactory {
  players = [];

  addNewPlayer(element) {
    this.players.push(element);
    console.log("New player added");
  }

  showPlayers() {
    console.log("Showing all players:");
    this.players.forEach((value) => {
      console.log(value);
    });
  }
};

roles["coach"] = class CoachFactory {
  coaches = [];

  addNewCoach(element) {
    this.coaches.push(element);
    console.log("New coach added");
  }

  showCoaches() {
    console.log("Showing all coaches:");
    this.coaches.forEach((value) => {
      console.log(value);
    });
  }
};

module.exports = roles;
