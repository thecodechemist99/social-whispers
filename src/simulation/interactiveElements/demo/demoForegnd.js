import Sprite from "../../../sprite.js";

export default class DemoForegnd extends Sprite {
  constructor(x, y, width, height, demoImg, noDemoImg) {
    super(x, y, width, height, demoImg);
    this.noDemoImg = noDemoImg;
    this.demo = true;
  }

  changeBackgnd() {
      this.demo = !this.demo;
  }

  draw(){
    if (this.demo){
      image(this.backgnd, 0, 0, this.width, this.height);
    } else {
      image(this.noDemoImg, 0, 0, this.width, this.height);
    }
  }

  resetElement() {
    this.demo = true;
  }
}