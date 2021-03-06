class Resources {
  constructor() {
    this.wheat = 19;
    this.lumber = 19;
    this.ore = 19;
    this.sheep = 19;
    this.brick = 19;
  }

  get bank() {
    return this;
  }

  addBank(type, amount) {
    this[type] += amount;
    return this;
  }

  subBank(type, amount) {
    this[type] -= amount;
    return this;
  }
}

module.exports = Resources;
