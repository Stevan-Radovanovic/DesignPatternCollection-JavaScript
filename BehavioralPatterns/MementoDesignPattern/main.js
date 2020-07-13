const Vgp = require("./videoGameProgress");
const VideoGame = require("./videoGame");
const CareTaker = require("./caretaker");

const vgc = [];
vgc.push(new VideoGame("Metal Gear Solid 2", "Konami", 2001));
vgc.push(new VideoGame("Bioshock", "Take 2", 2007));
vgc.push(new VideoGame("Half Life 2", "Valve", 2007));

let vgp1 = new Vgp(vgc[0].name, "17%", "StevanMcfc");
let vgp2 = new Vgp(vgc[1].name, "14%", "StevanMcfc");
let vgp3 = new Vgp(vgc[2].name, "19%", "StevanMcfc");
let vgp4 = new Vgp(vgc[1].name, "17%", "StevanMcfc");

vgp1.print();
vgp2.print();
vgp3.print();
vgp4.print();

CareTaker.createMemento(1, vgp1);
vgp1.overwrite(vgc[0].name, "19%", "StevanMcfc");
vgp1.print();
CareTaker.restoreMemento(1, vgp1);
vgp1.print();
