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
  secondStageFinish = new SecondStageFinish();
  thirdStage = new ThirdStage();
  thirdStageFinish = new ThirdStageFinish();
  thirdStageIntroductionBoss = new ThirdStageIntroductionBoss();
  fourthStage = new FourthStage();

  newGame.setup();

  sceneries = {newGame, introduction, instructions, credits, firstStage, secondStage, thirdStage, firstStageFinish, secondStageFinish, thirdStageFinish, thirdStageIntroductionBoss, fourthStage};
}

function keyPressed(){
  sceneries[currentScenery].keyPressed(key);
}

function draw(){
  sceneries[currentScenery].draw();
}