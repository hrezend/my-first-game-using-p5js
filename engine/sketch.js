function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);

  newGame = new NewGame();
  firstStage = new FirstStage();
  secondStage = new SecondStage();

  newGame.setup();

  sceneries = {newGame, firstStage, secondStage};
}

function keyPressed(){
  sceneries[currentScenery].keyPressed(key);
}

function draw(){
  sceneries[currentScenery].draw();
}