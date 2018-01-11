function Dice(sides) {
  this.sides = sides || 6;
}

Dice.prototype.roll = function() {
  return Math.floor(Math.random() * this.sides) + 1;
}

let dice = new Dice(6); 