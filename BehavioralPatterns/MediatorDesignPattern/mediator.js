class Mediator {
  constructor() {}

  channels = {};

  subscribe(channel, context, func) {
    if (!this.channels[channel]) {
      this.channels[channel] = [];
    }
    this.channels[channel].push({
      context: context,
      func: func,
    });
  }

  publish(channel) {
    if (!this.channels[channel]) {
      return false;
    }

    const args = Array.prototype.slice.call(arguments, 1);

    for (let index = 0; index < this.channels[channel].length; index++) {
      const sub = this.channels[channel][index];
      sub.func.apply(sub.context, args);
    }
  }
}

module.exports = new Mediator();
