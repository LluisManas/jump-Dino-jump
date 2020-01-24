class Coins {
  constructor() {
    this.width = 30;
    this.height = 30;
    this.x = random(100, width - this.width - 100);
    this.y = 0;
    this.coinSpeed = 0.5;
    this.img = loadImage("assets/coins/tile000.png");
    this.coinFrames = [
      loadImage("assets/coins/tile000.png"),
      loadImage("assets/coins/tile001.png"),
      loadImage("assets/coins/tile002.png"),
      loadImage("assets/coins/tile003.png"),
      loadImage("assets/coins/tile004.png")
    ];
    this.counter = 0;
  }

  show() {
    image(
      this.coinFrames[this.counter],
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  draw() {
    this.y += this.coinSpeed;
    if (frameCount % 6 === 0) {
      this.counter = (this.counter + 1) % this.coinFrames.length;
    }
  }
}
