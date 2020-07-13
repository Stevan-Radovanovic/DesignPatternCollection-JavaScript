class ReadingService {
  constructor() {}

  notify() {
    console.log("ReadingService: The subject is reading some stuff");
  }
}

module.exports = new ReadingService();
