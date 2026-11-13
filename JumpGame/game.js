let playerX = 200;
let playerY = -100;
let playerSize = 40;

let playerVelocity = 0;
const gravity = 0.8;

const gameHeight = 800;
const gameWidth = 1200;

function setup() {
  createCanvas(gameWidth, gameHeight);
}

// Gameloop / Framerate / Updated das Game
function draw() {
  background(0, 200, 255);

  // Spielergeschwindigkeit erhöht sich immer um gravity
  playerVelocity = playerVelocity + gravity
  // Spielerposition um Geschwindigkeit erhöhen
  playerY = playerY + playerVelocity;

  // Spieler stoppt auf dem Boden
  if (playerY + playerSize >= gameHeight) {
    playerY = gameHeight - playerSize;
  }

  // Player
  fill("yellow");
  square(playerX, playerY, playerSize);
}
