const game = new Game();
let brickImg;
/* document.getElementById("startGame").addEventListener("click", () => {
  startGame = true;
  document.getElementById("menu").style.display = "none";
}); */

function preload() {
  game.init();
}
function setup() {
  createCanvas(600, 800);

  button = createButton("Play again!");
  button.hide();
  button.mousePressed(reloadPage);
}

function draw() {
  if (startGame === false) {
    game.background.draw();
    push();
    textSize(30);
    textAlign(CENTER);
    text("Press SPACE to start", 280, 270);
    pop();
    if (frameCount % 240 === 0) {
      game.coins.push(new Coins());
    }

    for (var i = 0; i < game.coins.length; i++) {
      game.coins[i].show();
      game.coins[i].draw();
    }
  }
  if (startGame === true) {
    clear();

    game.draw();
  }
}

function keyPressed() {
  if (startGame === false && keyCode == 32) {
    startGame = true;
    game.gameSound.play();
  }
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
