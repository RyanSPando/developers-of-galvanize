class Development {
  constructor() {
    this.knight = 14
    this.victoryPoints = 5
    this.roadBuilding = 2
    this.monopoly = 2
    this.yearOfPlenty = 2
    this.total = this.knight + this.victoryPoints + this.roadBuilding + this.monopoly + this.yearOfPlenty
  }

  get size() {return this.total;}

  draw() {
    let number = (Math.ceil(Math.random() * this.size()));
    switch (number) {
      case (number <= this.knight):
        this.knight--;
        return 'knight';
      case (number <= (this.victoryPoints + this.knight)):
        this.victoryPoints--;
        return 'victoryPoints';
      case (number <= (this.victoryPoints + this.knight + this.roadBuilding)):
        this.roadBuilding--;
        return 'roadBuilding';
      case (number <= (this.victoryPoints + this.knight + this.roadBuilding + this.monopoly)):
        this.monopoly--;
        return 'monopoly';
      default:
        this.yearOfPlenty--;
        return 'yearOfPlenty';
    }
  }
}

module.exports = Development;
