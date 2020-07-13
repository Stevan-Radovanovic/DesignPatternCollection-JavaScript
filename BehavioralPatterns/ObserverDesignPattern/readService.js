class ReadService {
  constructor() {}

  notify(memo) {
    console.log("OBSERVER: A memo by " + memo.user + " has been read");
  }
}

module.exports = new ReadService();
