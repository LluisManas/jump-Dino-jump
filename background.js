class Background {
  constructor() {
    this.images = [
      {
        src: loadImage("assets/background/glacial_mountains.png"),
        y: 0,
        speed: 0.5
      }
    ];
  }
  init() {
    let i;
    const canvasHeight = 800;
    for (i = 0; i > -canvasHeight * 100; i -= canvasHeight) {
      this.images.push({
        src: loadImage("assets/background/sky.png"),
        y: i - canvasHeight,
        speed: 0.5
      });
    }

    // imagen transicion sky to univers
    i -= canvasHeight;
    this.images.push({
      src: loadImage("assets/background/New Piskel-1.png (5).png"),
      y: i,
      speed: 0.5
    });
    i -= canvasHeight;

    for (let j = 0; j > -canvasHeight * 2000; j -= canvasHeight) {
      this.images.push({
        src: loadImage("assets/background/parallax-space-backgound.png"),
        y: j + i,
        speed: 0.5
      });
    }
  }

  move(img) {
    image(img.src, 0, img.y, 600, 800);
    // if the player has already collided add speed to y
    img.y += img.speed * game.levelBg;
  }
  draw() {
    this.images.forEach(elem => {
      this.move(elem);
    });
  }
}
