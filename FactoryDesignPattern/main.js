let RoleFactory = require("./factory.js");

ManCityPlayers = new RoleFactory("player");
ManCityCoaches = new RoleFactory("coach");

ManCityPlayers.addNewPlayer("Ederson");
ManCityPlayers.addNewPlayer("Rodri");
ManCityPlayers.addNewPlayer("Fernandinho");
ManCityPlayers.addNewPlayer("Ilkay Gundogan");
ManCityPlayers.addNewPlayer("Tommy Doyle");
ManCityPlayers.addNewPlayer("Aymeric Laporte");

ManCityCoaches.addNewCoach("Pep Guardiola");

ManCityPlayers.showPlayers();
ManCityCoaches.showCoaches();
