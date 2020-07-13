class ChangingService {
  constructor() {}

  notify() {
    console.log("ChangingService: The subject is changing some stuff");
  }
}

module.exports = new ChangingService();
