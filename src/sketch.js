// add different locations
import grocerystore from "./assets/images/grocerystore.png";
// rename to better indicate anteater parts ("anteaterBody" & "anteaterJaw" ?)
import anteater01 from "./assets/images/anteater01.png";
import anteater02 from "./assets/images/anteater02.png";
// possible array of different sound files
import scremSound from "./assets/sounds/screm.mp3";

let setting, currentSetting;

window.preload = () => {
  setting = {
    daytime: {
      background: loadImage(grocerystore),
      name: "grocery store",
    },
  };
  currentSetting = setting.daytime;
};

window.setup = () => {
  // replace number with variable
  createCanvas(windowWidth / 2, windowHeight);
  // does this anteater still need to be global? investigate!
  // replace anteater x,y with variables, define elsewhere
  window.anteater = new Anteater(50, 50);
};

window.windowResized = () => {
  // replace number with variable
  resizeCanvas(windowWidth / 2, windowHeight);
};

window.draw = () => {
  // replace number with variable
  background(220);
  image(currentSetting.background, 0, 0);
  window.anteater.draw();
};

// move adverbs from chat.js, have reply() handle choosing, return adverb?
// Also, move all anteater-related items/function/etc from chat.js?
// -> are these tightly-coupled (animation/sound + anteater's chat actions)?
export function reply() {
  const adverbs = [
    "with enthusiasm",
    "irritably",
    "delightedly",
    "quietly",
    "suspiciously",
    "angrily",
    "with a sigh",
    "suggestively",
    "and a little yarn falls out of its mouth",
  ];
  const randNum = floor(random(adverbs.length));

  // handles anteater
  window.anteater.screm.play();

  return "anteater screams " + adverbs[randNum];
}

class Anteater {
  // replace number with variable
  // possibly subdivide mouth, body, screm concerns?
  // sub-objects, or just re-order the list?
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
    pop();
    pop();
  }
}
