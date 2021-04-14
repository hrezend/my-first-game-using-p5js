function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(fpsGame);

  newGame = new NewGame();
  introduction = new Introduction();
  firstStage = new FirstStage();
  secondStage = new SecondStage();

  newGame.setup();

  sceneries = {newGame, introduction, firstStage, secondStage};
}

function keyPressed(){
  sceneries[currentScenery].keyPressed(key);
}

function draw(){
  frameCount++;
  sceneries[currentScenery].draw();
}