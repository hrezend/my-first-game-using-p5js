function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);

  menu = new Menu();
  firstStage = new FirstStage();

  sceneries = {menu, firstStage};
  menu.setup();
}

function keyPressed(){
  sceneries[currentScenery].keyPressed(key);
}

function draw(){
  sceneries[currentScenery].draw();
}