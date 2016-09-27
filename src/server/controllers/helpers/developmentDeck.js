class Development {
  constructor() {
    this.knight = 14;
    this.victoryPoints = 5;
    this.roadBuilding = 2;
    this.monopoly = 2;
    this.yearOfPlenty = 2;
    this.total = this.knight + this.victoryPoints + this.roadBuilding + this.monopoly + this.yearOfPlenty;
  }

  draw() {
    if (this.total) {
      let number = (Math.ceil(Math.random() * this.total()));
      switch (number) {
        case (number <= this.knight):
          this.knight--;
          this.total--;
          return 'knight';
        case (number <= (this.victoryPoints + this.knight)):
          this.victoryPoints--;
          this.total--;
          return 'victoryPoints';
        case (number <= (this.victoryPoints + this.knight + this.roadBuilding)):
          this.roadBuilding--;
          this.total--;
          return 'roadBuilding';
        case (number <= (this.victoryPoints + this.knight + this.roadBuilding + this.monopoly)):
          this.monopoly--;
          this.total--;
          return 'monopoly';
        default:
          this.yearOfPlenty--;
          this.total--;
          return 'yearOfPlenty';
      }
    } else return 'deckEmpty';
  }
}

module.exports = Development;
