class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.gravity = 4;
    this.velocity = 720;
    this.jumpCount = 0;
    this.img = loadImage("assets/player/DinoSprites.gif");
    this.imgExplo = loadImage("assets/player/explosion.png");
  }

  show() {
    fill(0);
    strokeWeight(4);
    stroke(255);
    //rect(this.x, this.y, this.width, this.height);
    image(this.img, this.x, this.y, this.width, this.height);
  }

  draw() {
    this.velocity += this.gravity;
    this.y = this.velocity;

    if (this.y > 720) {
      this.y = 720;
      this.jumpCount = 0;
    }
    this.gravity = 4;

    if (this.x + this.width < 30) {
      this.x = 550;
    }
    if (this.x + this.width > 600) {
      this.x = 0;
    }
  }

  jump() {
    if (this.jumpCount < 2) {
      this.velocity = this.y - 200;
      this.jumpCount += 1;
    }
  }
  right() {
    this.x = this.x + 30;
  }
  left() {
    this.x = this.x - 30;
  }
}
