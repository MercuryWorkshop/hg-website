import { Component, css } from "dreamland/core";
import { Route, router, Router } from "dreamland/router";

import "./style.css";
import Homepage from "./pages/Homepage";

// typescript syntax for defining components
const App: Component<{},{}> = function (cx) {
	cx.init = () => {
		router.route();
	};

	return (
		<main>
			<div class="stage"></div>
			<Router>
				<Route show={<Homepage />} />
			</Router>
		</main>
	);
};

App.style = css`
	:scope {
		margin: 0;
		/* was meaning to explore this beautiful world-style per-page lighting further.
		 basically, the homepage is pink, and project/member subpages are blue (300, 30%) - fish*/
		// --page-hs: 215, 20%;
		--page-hs: 300, 30%;
	}

	.stage {
		position: relative;
		min-height: 100vh;
		background: linear-gradient(
			180deg,
			hsl(var(--page-hs), 3%) 0%,
			hsl(var(--page-hs), 7%) 105%
		);
		overflow: hidden;
		inset: 0;
		z-index: 1;
		position: fixed;
		width: 100%;
		height: 100%;
	}

	.stage::before {
		content: "";
		position: absolute;
		left: 50%;
		top: -22%;
		width: 160vmax;
		height: 120vmax;
		transform: translateX(-50%);
		pointer-events: none;
		mix-blend-mode: screen;
		filter: blur(40px);
		--beam-color: var(--page-hs), 67%;
		background: radial-gradient(
				ellipse at 50% 2%,
				hsla(var(--beam-color), 0.475) 0%,
				hsla(var(--beam-color), 0.15) 4%,
				hsla(var(--beam-color), 0.05) 9%,
				hsla(var(--beam-color), 0.02) 14%,
				transparent 28%
			),
			radial-gradient(
				ellipse at 50% 6%,
				hsla(var(--beam-color), 0.07) 0%,
				hsla(var(--beam-color), 0.035) 10%,
				hsla(var(--beam-color), 0.01) 26%,
				transparent 48%
			),
			conic-gradient(
				from 200deg at 50% 0%,
				hsla(var(--beam-color), 0.045) 0deg,
				hsla(var(--beam-color), 0.015) 22deg,
				transparent 80deg,
				hsla(var(--beam-color), 0.01) 200deg,
				transparent 360deg
			);
	}

	.stage::after {
		content: "";
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: radial-gradient(ellipse at 50% 40%, transparent 30%, hsla(0, 0%, 0%, 0.45) 70%),
			linear-gradient(180deg, hsla(0, 0%, 0%, 0.05) 0%, hsla(0, 0%, 0%, 0.35) 100%);
	}
`;

window.addEventListener("load", () => {
	document.getElementById("app")!.replaceWith(<App />);
});