class CareTaker {
  mementos = [];

  createMemento(key, vgs) {
    this.mementos.push({ key: key, vgs: JSON.stringify(vgs) });
  }

  restoreMemento(key, vgp1) {
    console.log("Restoring save...");
    this.mementos.forEach((element) => {
      if (element.key === key) {
        let memento = JSON.parse(element.vgs);
        vgp1.name = memento.name;
        vgp1.progress = memento.progress;
        vgp1.userName = memento.userName;
      }
    });
  }
}

module.exports = new CareTaker();
