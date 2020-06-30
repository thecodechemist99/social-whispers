import Sprite from "../../../sprite.js";

export default class DemoLink extends Sprite {
  constructor(x, y, width, height, backgnd, signsLeft, signsRight, noDemo) {
    super(x, y, width, height, backgnd);
    this.signsLeft = signsLeft;
    this.signsRight = signsRight;
    this.counter = 0;
    this.steps = 0.3;
    this.noDemo = noDemo;
    this.demo = true;
  }

  changeBackground(){
    this.demo = !this.demo;
}

  clicked() {
    window.dispatchEvent(new CustomEvent("enterView", { detail: "demo" }));
  }

  draw() {
    if (this.backgnd != undefined) {
      if (this.demo) {
        image(this.backgnd, 0, 0, this.width, this.height);
        if (this.signsLeft != undefined) {
          image(this.signsLeft, 20, this.counter - 25, 435, 89);
          image(this.signsRight, 20, -this.counter - 25, 434, 105);
  
          this.counter += this.steps;
          if (this.counter >= 7 || this.counter <= 0) {
            this.steps = -this.steps;
          }
        }
      } else if(this.noDemo != undefined) {
        image(this.noDemo, 0, 0, this.width, this.height);
      }
    }
  }
}