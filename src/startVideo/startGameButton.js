import InteractiveObject from "../interactiveObject.js";

export default class StartGameButton extends InteractiveObject {
  constructor(x, y, width, height, backgnd) {
    super(x, y, width, height, backgnd);
  };

  clicked() {
      window.dispatchEvent(new CustomEvent("startGame"));
  }
}