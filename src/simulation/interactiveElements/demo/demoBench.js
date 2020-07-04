import Sprite from "../../../sprite.js";

export default class DemoBench extends Sprite {
  constructor(x, y, width, height, backgnd) {
    super(x, y, width, height, backgnd);
  }

  clicked() {
    this.disable();
    window.dispatchEvent(new CustomEvent("benchSitdown"));
    window.dispatchEvent(new CustomEvent("addAction", { detail: {
      origin: "demo",
      name: "watchDemo",
      data: {}
    }}));
  }

  resetElement() {
    this.enable();
  }
}