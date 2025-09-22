import { hydrate } from "dreamland/ssr/client";
import App from "./App";

hydrate(
	App,
	document.querySelector("#app")!,
	document.head,
	document.querySelector("[dlssr-d]")!
);
// document.querySelector("#app")!.replaceWith(App());
