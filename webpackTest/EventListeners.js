class EventListeners {
  eventCollector = {};

  omit(event, data) {
    const events = this.eventCollector[event];
    if (events) {
      events.forEach((ele) => {
        ele(data);
      });
    }
  }

  on(event, cb) {
    if (!this.eventCollector[event]) {
      this.eventCollector[event] = [];
    }
    this.eventCollector[event].push(cb);
  }

  once(event, cb) {
    const wapper = (data) => {
      cb(data);
      this.off(event, wapper);
    };
    if (!this.eventCollector[event]) {
      this.eventCollector[event] = [];
    }
    this.eventCollector[event].push(wapper);
  }

  off(event, cb) {
    const events = this.eventCollector[event];
    if (events) {
      const index = events.findIndex((i) => i === cb);
      if (index > -1) {
        events.splice(index, 1);
      }
    }
  }
  offAll(event) {
    const events = this.eventCollector[event];
    if (events) {
      this.eventCollector[event] = [];
    }
  }

  listeners(event) {
    return this.eventCollector[event] || [];
  }
}

const eventListeners = new EventListeners();

module.exports = eventListeners;
