class Coins {
  constructor() {
    this.width = 30;
    this.height = 30;
    this.x = random(100, width - this.width - 100);
    this.y = 0;
    this.coinSpeed = 0.5;
    this.img = loadImage("assets/coins/tile000.png");
  }

  show() {
    image(this.img, this.x, this.y, this.width, this.height);
  }

  draw() {
    this.y += this.coinSpeed;
  }
}
