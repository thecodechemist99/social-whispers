import Sprite from "../../../sprite.js";

export default class PhoneEndScreen extends Sprite {
  constructor(x, y, width, height, overlay) {
    super(x, y, width, height);
    this.name = "endScreen";
    this.overlay = overlay;
    this.answered = false;
    this.role;
    this.pos = 0.1;
    this.message = createGraphics(width, height);
  }

  draw() {
    fill(220);
    noStroke();
    rect(0, 0, this.width, this.height);
  
    this.mouseScroll();
  
    image(this.message, 0, 0, this.width, this.height);
  
    textFont(window.fonts.franklinGothic);
    textSize(16);
    textAlign(LEFT, CENTER);
  
    fill(100);
    rect(0, 0, this.width, 75);
    fill(150);
    rect(0, 0, 75, 75);
  
    this.redraw();
  }

  answer(role) {
    this.answered = true;
    this.role = role;
  }

  redraw() {
    this.message.clear();
    this.message.fill(220);
    this.message.noStroke();

    this.message.textFont(window.fonts.franklinGothic);
    this.message.textSize(16);
    this.message.textAlign(LEFT, CENTER);

    this.message.fill(200);
    this.message.rect(20, 90 + this.pos, 300, 70, 5);

    this.message.noStroke();
    this.message.fill(1);
    this.message.text(
      "Es war eine langer Tag, mein Freund. \nWie ich sehe, bist du nun einer von uns.",
      30,
      85 + this.pos,
      290,
      60
    );

    if (this.answered) {
      this.message.fill(170);
      this.message.rect(130, 180 + this.pos, 300, 70, 5);
      this.message.noStroke();
      this.message.fill(0);
      this.message.text(
        "Hast du mir geschrieben? Wovon sprichst du? Weißt du wer ich bin?",
        140,
        180 + this.pos,
        290,
        70
      );

      this.message.fill(200);

      this.message.rect(20, 270 + this.pos, 410, 350, 5);
      this.message.noStroke();
      this.message.fill(0);
      this.message.text(
        "Natürlich. Du hast deine Spuren bereits hinterlassen. \nDu bist ein" +
          " " +
          this.role +
          ".",
        30,
        255 + this.pos,
        475,
        70
      );
      this.children[1].draw();
    }
  }

  updatePosition() {
    this.pos = this.pos * 4.99;
  }

  showConversation(textNode) {
    let conv = textNode;
    this.conversation.push(conv);
  }

  bufferAnimation() {
    this.message.textAlign(CENTER, CENTER);
    this.message.fill(170);
    this.message.rect(
      400,
      180 + 180 * this.conversation.length + this.pos,
      80,
      70,
      5
    );

    this.message.noStroke();
    this.message.fill(0);
    this.message.text(
      ".  .  .",
      400,
      180 + 180 * this.conversation.length + this.pos,
      80,
      70
    );
  }

  mouseScroll() {
    let ev = {};
    if (mouseY < 0.25 * windowHeight) {
      ev["delta"] = -6;
      this.wheel(ev);
    } else if (mouseY > 0.7 * windowHeight) {
      ev["delta"] = 6;
      this.wheel(ev);
    }
  }

  wheel(ev) {
    if (this.visible) {
      if (this.pos > 0) {
        this.pos = 0;
      } else if (this.pos < -(1 + this.message.height)) {
        this.pos = -(1 + this.message.height);
      } else {
        this.pos -= ev.delta;
        this.redraw();
      }
    }
  }
}