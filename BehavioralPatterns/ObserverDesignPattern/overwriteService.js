class OverwriteService {
  constructor() {}

  notify(memo) {
    console.log("OBSERVER: A memo by " + memo.user + " has been overwritten");
  }
}

module.exports = new OverwriteService();
