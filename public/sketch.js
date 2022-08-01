let saveJson = {};
saveJson.day = 0;

function setup() {
  createCanvas(windowWidth, windowHeight)
  // console.log(`${windowWidth}, ${windowHeight}`)
  noStroke()
  background(255)

  //button
  button = createButton('save1');
  button.position(0, 0);
  button.mousePressed(save1);

  //button
  button = createFileInput(load1)
  button.position(50, 0);
  //button.mousePressed(load1);

}

function save1() {
  saveJSON(saveJson, 'savedgame.json');
  console.log("saveed")
}

function load1() {
  //start game with the values from the json. 
  console.log("loaded")

}

function draw() {
  background(255)
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

