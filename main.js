const game = new Game();
let brickImg;

function preload() {
  game.init();
}
function setup() {
  createCanvas(600, 800);
  game.gameSound.play();
  button = createButton("Play again!");
  button.hide();
  button.mousePressed(reloadPage);
}

function draw() {
  game.draw();
}

function keyPressed() {
  if (keyCode == 32) {
    game.player.jump();
    game.player.draw();
  }
  if (keyCode == 39) {
    game.player.right();
  }
  if (keyCode == 37) {
    game.player.left();
  }
}

function reloadPage() {
  document.location.reload();
}

/* class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.gravity = 4;
    this.velocity = 720;
    this.jumpCount = 0;
  }

  show() {
    fill(0);
    strokeWeight(4);
    stroke(255);
    rect(this.x, this.y, this.width, this.height);
  }

  draw() {
    this.velocity += this.gravity;
    this.y = this.velocity;

    if (this.y > 720) {
      this.y = 720;
      this.jumpCount = 0;
    }
    this.gravity = 4;

    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x > 550) {
      this.x = 550;
    }
  }

  jump() {
    if (this.jumpCount < 2) {
      this.velocity = this.y - 150;
      this.jumpCount += 1;
    }
  }
  right() {
    this.x = this.x + 20;
  }
  left() {
    this.x = this.x - 20;
  }
} */

/* class Brick {
  constructor() {
    this.width = 100;
    this.height = 5;
    this.x = random(0, width - this.width);
    this.y = 0;
    this.speed = 0.5;
  }

  show() {
    fill(0);
    strokeWeight(2);
    stroke(0);
    rect(this.x, this.y, this.width, this.height);
  }
  draw() {
    this.y += this.speed; // * game.levelBricks;
  }
} */
