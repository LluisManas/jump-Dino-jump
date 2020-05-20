function closeTo(player, brick) {
  if (player > brick) {
    return false;
  }
  if (brick - player < 5) {
    return true;
  }
  return false;
}

let startGame = false;

function gameOver() {
  //game.gameSound.pause();
  textSize(54);
  fill(0);
  strokeWeight(4);
  stroke(225);
  text(`GAME OVER`, width - width / 1.3, height - height / 2);
  //noLoop();
  button.show();
  button.position(230, 420);
  button.style("font-size", "30px");
  button.style("background-color", "none");
  textSize(44);
  fill(156);
  text(`Total Score: ${game.points}`, width - 455, 500);
}

class Game {
  constructor() {
    this.bricks = [];
    this.levelBg = 0;
    this.levelBricks = 1;
    this.birds = [];
    this.points = 0;
    this.coins = [];
    this.gameOver = false;
  }

  init() {
    this.background = new Background();
    this.background.init();
    //this.gameSound = loadSound("assets/videogame2.mp3");
    this.player = new Player(100, 650, 50, 80);
    this.bricks.push(new Brick());
    this.birds.push(new Birds());
    this.coins.push(new Coins());
    //this.coinSound = loadSound("assets/coins/sound.mp3");
    /* this.coins = [
      loadImage("assets/coins/tile000.png"),
      loadImage("assets/coins/tile001.png"),
      loadImage("assets/coins/tile002.png"),
      loadImage("assets/coins/tile003.png"),
      loadImage("assets/coins/tile004.png")
    ]; */
  }

  draw() {
    this.background.draw();

    this.player.show();
    this.player.draw();

    // hacer un condicional que en funcion del this.level (de las colisions) los framecount se rebajen a 180
    /*   if (frameCount % 240 === 0) {
      this.bricks.push(new Brick());
    } */

    if (this.points < 300) {
      if (frameCount % 300 === 0) {
        this.bricks.push(new Brick());
      }
    } else if (this.points >= 300) {
      if (frameCount % 240 === 0) {
        this.bricks.push(new Brick());
      }
      this.levelBricks += 0.0005;
    } else if (this.points >= 1000) {
      if (frameCount % 60 === 0) {
        this.bricks.push(new Brick());
      }
      this.levelBricks += 0.04;
    }

    for (var i = 0; i < this.bricks.length; i++) {
      this.bricks[i].show();

      this.bricks[i].draw();

      if (
        ((this.player.x + this.player.width >= this.bricks[i].x &&
          this.player.x + this.player.width <=
            this.bricks[i].x + this.bricks[i].width) ||
          (this.player.x >= this.bricks[i].x &&
            this.player.x <= this.bricks[i].x + this.bricks[i].width)) &&
        closeTo(this.player.y + this.player.height, parseInt(this.bricks[i].y))
      ) {
        // when collision
        this.player.gravity = this.bricks[i].speed;
        this.levelBg += 0.01;
        //this.levelBricks += 0.01;
        this.player.jumpCount = 0;
        /* if (frameCount % 240 === 0) {
          this.points += 25;
        } */
      }
    }
    if (frameCount % 420 === 0) {
      this.birds.push(new Birds());
    }

    for (var i = 0; i < this.birds.length; i++) {
      this.birds[i].show();
      this.birds[i].draw();
      let bird = this.birds[i];

      if (
        bird.x + bird.width < this.player.x ||
        bird.x > this.player.x + this.player.width
      ) {
      } else if (
        this.player.y > bird.y + bird.height ||
        this.player.y + this.player.height < bird.y
      ) {
      } else {
        this.birds.img = this.birds.imgCrash;
        this.player.img = this.player.imgExplo;
        console.log("Game Over!");
        this.gameOver = true;
      }
    }

    if (this.gameOver) {
      gameOver();
    }

    if (frameCount % 420 === 0) {
      this.coins.push(new Coins());
    }

    for (var i = 0; i < this.coins.length; i++) {
      this.coins[i].show();
      this.coins[i].draw();
      let coin = this.coins[i];

      if (
        this.coins[i].x + this.coins[i].width < this.player.x ||
        this.coins[i].x > this.player.x + this.player.width
      ) {
      } else if (
        this.player.y > this.coins[i].y + this.coins[i].height ||
        this.player.y + this.player.height < this.coins[i].y
      ) {
      } else {
        //this.coinSound.play();
        this.points += 25;
        this.coins.splice(i, 1);
      }
    }

    if (this.levelBg > 0 && this.player.y + this.player.height === 800) {
      gameOver();
    }

    textSize(26);
    fill(255);
    strokeWeight(3);
    stroke(0);
    text(`Score: ${this.points}`, width - 150, 40);
  }
}
