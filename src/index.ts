import { Application, Graphics, Container, Texture } from 'pixi.js';

console.log('connected');

const app = new Application({
	view: document.getElementById("game-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x000000,
	width: 960,
	height: 600
});

const graphics = new Graphics();
const container = new Container();
const texture = Texture.from('../static/concretePat1.png');

// Rectangle
graphics.beginFill(0x0000FF);
graphics.drawRect(50, 50, 100, 100);
graphics.endFill();

app.stage.addChild(graphics);