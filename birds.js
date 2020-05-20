class Birds {
  constructor() {
    this.width = 50;
    this.height = 40;
    this.x = 0;
    this.y = random(200, height - this.height - 200);
    this.speed = 2;
    this.img = loadImage("assets/Plane/Fly (1).png");
    this.imgCrash = loadImage("assets/player/explosion.png");
  }

  show() {
    fill(0);
    image(this.img, this.x, this.y, this.width, this.height);
  }

  draw() {
    this.x += this.speed;
  }
}
