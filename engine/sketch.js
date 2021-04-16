function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(fpsGame);

  newGame = new NewGame();
  introduction = new Introduction();
  instructions = new Instructions();
  credits = new Credits();
  firstStage = new FirstStage();
  firstStageFinish = new FirstStageFinish();
  secondStage = new SecondStage();

  newGame.setup();

  sceneries = {newGame, introduction, instructions, credits, firstStage, secondStage, firstStageFinish};
}

function keyPressed(){
  sceneries[currentScenery].keyPressed(key);
}

function draw(){
  sceneries[currentScenery].draw();
}