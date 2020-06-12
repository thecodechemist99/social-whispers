/* imports */

// game structure classes
import Player from "./simulation/player.js";
import Game from "./simulation/game.js";
import View from "./simulation/view.js";

// general display classes
import InteractiveObject from "./interactiveObject.js";
import Sprite from "./sprite.js";

// display element classes
import DisplayStartScreen from "./startScreen/displayStartScreen.js";
import DisplayEndScreen from "./endScreen/displayEndScreen.js";

// interactive element classes
import BarLink from "./simulation/interactiveElements/barLink.js";
import CoffeeHouseLink from "./simulation/interactiveElements/coffeeHouseLink.js";
import DemoLink from "./simulation/interactiveElements/demoLink.js";
import KioskLink from "./simulation/interactiveElements/kioskLink.js";
import ParkLink from "./simulation/interactiveElements/parkLink.js";

import DemoSign from "./simulation/interactiveElements/demoSign.js";
import Flyer from "./simulation/interactiveElements/flyer.js";
import MobilePhone from "./simulation/interactiveElements/mobilePhone.js";
import PhoneIcon from "./simulation/interactiveElements/phoneIcon.js";
import StreetLampBulb from "./simulation/interactiveElements/streetLampBulb.js";

// load images
let parkBackgnd, kioskBackgnd, demoBackgnd, coffeeHouseBackgnd, barBackgnd;

let barLink, coffeeHouseLink, demoLink, kioskLink, parkLink;
let demoSign, flyer, mobilePhone, phoneIcon, streetLampBulb;

function preload() {
    // backgnd images
    parkBackgnd = loadImage("../img/park/0_backgnd.png", setupGame);
    // kioskBackgnd = loadImage("");
    // demoBackgnd = loadImage("");
    // coffeeHouseBackgnd = loadImage("");
    // barBackgnd = loadImage("");

    // interactive elements
    // barLink = loadImage("");
    // coffeeHouseLink = loadImage("");
    // demoLink = loadImage("");
    // kioskLink = loadImage("");
    // parkLink = loadImage("");
    // demoSign = loadImage("");
    // flyer = loadImage("");
    // mobilePhone = loadImage("");
    // phoneIcon = loadImage("");
    // streetLampBulb = loadImage("");
}
window.preload = preload;

/* setup */

let player = new Player();

let game = new Game(player);
window.addEventListener("enterView", function(ev) {game.enterView(ev.detail);})

let world = new Sprite(0, 0, windowWidth, windowHeight)

function setupGame () {
    let park = new View("park", parkBackgnd);
    game.addView(park);

    let kiosk = new View("kiosk", parkBackgnd);
    game.addView(kiosk);

    let demo = new View("demo", parkBackgnd);
    game.addView(demo);

    let coffeeHouse = new View("coffeeHouse", parkBackgnd);
    game.addView(coffeeHouse);

    let bar = new View("bar", parkBackgnd);    
    game.addView(bar);
}

/* display */

function draw() {
    world.display();
    game.display();
}
window.draw = draw;

/* interaction */

function mouseClicked() { world.mouseClicked(); }
window.mouseClicked = mouseClicked;

function mousePressed() { world.mousePressed(); }
window.mousePressed = mousePressed;

function mouseReleased() { world.mouseReleased(); }
window.mouseReleased = mouseReleased;