import grocerystore from "./assets/images/grocerystore.png";
import anteater01 from "./assets/images/anteater01.png";
import anteater02 from "./assets/images/anteater02.png";
import scremSound from "./assets/sounds/screm.mp3";

let store;

window.preload = () => {
  store = loadImage(grocerystore);
};

window.setup = () => {
  createCanvas(windowWidth / 2, windowHeight);
  window.anteater = new Anteater(50, 50);
};

window.windowResized = () => {
  resizeCanvas(windowWidth / 2, windowHeight);
};

window.draw = () => {
  background(220);
  image(store, 0, 0);
  window.anteater.draw();
};

window.ask = (msg) => {
  var item = document.createElement("li");
  item.textContent = msg;
  return item;
};

window.reply = () => {
  // handles anteater
  window.anteater.screm.play();
};

class Anteater {
  constructor(x, y) {
    this.bodyImg = loadImage(anteater01);
    this.mouthImg = loadImage(anteater02);
    this.screm = loadSound(scremSound);
    this.mouthX = 21;
    this.mouthY = 67;
    this.posX = x;
    this.posY = y;
    this.mouthAnchorX = 105;
    this.mouthAnchorY = 17;
    this.mouthMin = 0;
    this.mouthMax = -0.6;
    this.mouthOpen = false;
    this.mouthTimer = 0;
    this.mouthNoise = 0;
  }

  draw() {
    this.mouthOpen = this.screm.isPlaying();
    push();
    translate(this.posX, this.posY);
    image(this.bodyImg, 0, 0);
    push();
    translate(this.mouthX + this.mouthAnchorX, this.mouthY + this.mouthAnchorY);
    if (this.mouthOpen) {
      this.mouthTimer++;
      if (this.mouthTimer % 4 == 0) {
        this.mouthNoise = random() / 3;
      }
      rotate(this.mouthMax + this.mouthNoise);
    } else {
      rotate(this.mouthMin);
    }
    image(this.mouthImg, -this.mouthAnchorX, -this.mouthAnchorY);
    //ellipse(0,0,20)
    pop();
    pop();
  }
}
