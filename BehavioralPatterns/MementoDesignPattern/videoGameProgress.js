class VideoGameProgress {
  constructor(name, progress, userName) {
    console.log("Creating save...");
    this.name = name;
    this.progress = progress;
    this.userName = userName;
    this.time = Date.now;
  }

  overwrite(name, progress, userName) {
    console.log("Overwriting save...");
    this.name = name;
    this.progress = progress;
    this.userName = userName;
  }

  print() {
    console.log(
      "SaveFile: " + this.name + "|" + this.progress + "|" + this.userName
    );
  }
}

module.exports = VideoGameProgress;
