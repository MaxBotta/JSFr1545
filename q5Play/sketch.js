const gameWidth = 800;
const gameHeight = 600;

await Canvas(gameWidth, gameHeight);
world.gravity.y = 14;

let ball = new Sprite();
ball.y = -200;
ball.diameter = 50;
ball.img = "🤪";
ball.bounciness = 0;
ball.friction = 10;
ball.debug = true;

// Liste von Plattformen ist am Anfang leer
let platforms = new Group();

let millisMeasured = 0;
let platformSpawnTime = 1000; // 2 Sekunden

q5.update = function () {
  background("skyblue");
  text("click to jump!", 0, -50);

  if (kb.pressing("up")) ball.vel.y = -10;
  if (kb.pressing("left")) ball.vel.x = -4;
  if (kb.pressing("right")) ball.vel.x = 4;
  // if (contro.leftStick.x < 0) ball.vel.x = -4;
  // if (contro.leftStick.x > 0) ball.vel.x = 4;

  // console.log(contro.leftStick.x)

  // Messe die Zeit und wenn 2 Sekunden vorbei sind, erstelle neue Plattform
  if (millis() > millisMeasured + platformSpawnTime) {
    // Setze zuletzt gemessene Zeit auf aktuelle Zeit
    millisMeasured = millis();

    // Erstelle neue Plattform in der platforms Gruppe
    const platformWidth = random(60, 400);

    let newPlatform = new platforms.Sprite();
    newPlatform.x = gameWidth / 2 + platformWidth / 2;
    newPlatform.y = random(-gameHeight / 2, gameHeight / 2);
    newPlatform.width = platformWidth;
    newPlatform.heigh = 40;
    newPlatform.physics = KIN;
    newPlatform.friction = 10;
    newPlatform.vel.x = random(-6, -20);
  }
};
