import { hydrate } from "dreamland/ssr/client";
import App from "./main";

hydrate(
	App,
	document.querySelector("#app")!,
	document.head,
	document.querySelector("[dlssr-d]")!
);

const pattern = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"b",
	"a",
	"Enter",
];
let current = 0;

document.addEventListener("keydown", (e) => {
	if (e.key === pattern[current] || e.key.toLowerCase() === pattern[current]) {
		console.log("Key matched:", e.key);
		current++;
		if (current === pattern.length) {
			const clocks: HTMLVideoElement = document.getElementById(
				"clocks"
			) as HTMLVideoElement;
			clocks!.classList.add("playing");
			clocks!.play();
			clocks!.addEventListener("ended", () => {
				// clocks.classList.remove("playing");
				clocks!.pause();
				clocks!.classList.remove("playing");
				clocks!.classList.add("ending");
				setTimeout(() => {
					clocks!.classList.remove("ending");
				}, 500);
			});
			current = 0;
		}
	} else {
		current = 0;
	}
});
