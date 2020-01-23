class Brick {
  constructor() {
    this.width = 100;
    this.height = 5;
    this.x = random(0, width - this.width);
    this.y = 0;
    this.speed = 0.5;
  }

  show() {
    fill(0);
    strokeWeight(1);
    stroke(225);
    rect(this.x, this.y, this.width, this.height);
  }
  draw() {
    this.y += this.speed * game.levelBricks;
  }
}
