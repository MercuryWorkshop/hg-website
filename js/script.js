// REMEMBER TO UPDATE min.js BEFORE COMMITTING! THIS FILE IS NOT LOADED IN PRODUCTION!
import * as PIXI from "https://esm.sh/pixi.js@7.2.4?bundle-deps";

// me when i nitpick
window.addEventListener("hashchange", (e) => {
	const url = new URL(e.newURL);
	if (url.hash == "#_") {
		history.pushState(null, null, url.pathname + url.search);
	}
});

const pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', "Enter"];
let current = 0;
const clocks = document.getElementById("clocks");

document.addEventListener('keydown', (e) => {
  if (e.key === pattern[current]) {
    current++;
    if (current === pattern.length) {
			clocks.classList.add("playing");
			clocks.play();
			clocks.addEventListener("ended", () => {
				// clocks.classList.remove("playing");
				clocks.pause();
				clocks.classList.remove("playing");
				clocks.classList.add("ending");
				setTimeout(() => {
					clocks.classList.remove("ending");
				}, 500);
			});
      current = 0;
    }
  } else {
    current = 0;
  }
})

const canvas = document.getElementById("bg");
const app = new PIXI.Application({
	view: canvas,
	resizeTo: canvas,
	backgroundAlpha: 0,
	antialias: true,
});
app.stage.filters = [new PIXI.BlurFilter(2, undefined, window.devicePixelRatio)];

const starSize = 6;
const starNum = Math.sqrt(Math.pow(app.screen.height, 2) + Math.pow(app.screen.height, 2)) / 32;

const starTexture = app.renderer.generateTexture(new PIXI.Graphics().beginFill(0xffffff).drawCircle(0, 0, starSize).endFill());
const stars = Array.from({ length: starNum }, () => {
	const star = {
		sprite: new PIXI.Sprite(starTexture),
		x: Math.random(),
		y: Math.random(),
	};
	star.sprite.anchor.set(0.5, 1);
	star.sprite.scale.set(Math.random());
	app.stage.addChild(star.sprite);
	star.sprite.x = Math.random() * app.screen.width;
	star.sprite.y = Math.random() * app.screen.height;
	return star;
});
document.getElementById("bg").classList.add("show");

function mod(n, m) {
	// frick u js!!
	return ((n % m) + m) % m;
}

let smoothY = document.documentElement.scrollTop;
app.ticker.add(() => {
	smoothY += 0.15 * (document.documentElement.scrollTop - smoothY);
	const scrollFrac = document.documentElement.scrollTop / document.body.scrollHeight;
	app.stage.alpha = 0.7 - scrollFrac * 1.2;
	stars.forEach((star) => {
		star.sprite.x = star.x * app.screen.width;
		star.sprite.y = mod(star.y * app.screen.height - smoothY * 2.77 * star.sprite.scale.y, app.screen.height + starSize * window.devicePixelRatio);
	});
});
