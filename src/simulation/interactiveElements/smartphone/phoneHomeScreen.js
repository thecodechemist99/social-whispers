import Sprite from "../../../sprite.js";

export default class PhoneHomeScreen extends Sprite {
  constructor(x, y, width, height, postOverlay) {
    super(x, y, width, height);
    this.postOverlay = postOverlay;
    this.name = "homeScreen";
    this.pos = 0;
    this.activePosts = [];
    this.posts = createGraphics(width, height);
  }

  draw() {
    fill(220);
    noStroke();
    rect(0, 0, this.width, this.height);

    this.mouseScroll();

    image(this.posts, 0, 0, this.width, this.height);
  }

  setPost(img) {
    this.activePosts.push(img);
    this.redraw();
  }

  redraw() {
    this.posts.clear();
    for (let i in this.activePosts) {
      this.posts.image(
        this.postOverlay,
        12.5,
        12.5 + i * 400 + this.pos,
        430,
        382
      );
      this.posts.image(
        this.activePosts[i],
        15,
        15 + i * 400 + this.pos,
        425,
        320
      );
    }
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
      } else if (this.pos < -(1 + 340 * this.activePosts.length)) {
        this.pos = -(1 + 340 * this.activePosts.length);
      } else {
        this.pos -= ev.delta;
        this.redraw();
      }
    }
  }
}