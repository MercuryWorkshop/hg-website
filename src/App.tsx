import { Component, css } from "dreamland/core";
import { Route, router, Router } from "dreamland/router";

import "./style.css";
import Homepage from "./pages/Homepage";
import MemberView from "./pages/MemberView";
import { members } from "./Members";
import NotFoundView from "./pages/404View";
import { projects } from "./Projects";
import ProjectView from "./pages/ProjectView";

const App: Component<{},{}> = function (cx) {
	cx.init = () => {
		router.route();
	};

	const routes = [
		{ path: undefined, show: <Homepage /> },
		{ path: "member", show: <NotFoundView /> },
		...members.map((member) => ({ path: `member/${member.avatarName}`, show: <MemberView member={member} /> })),
		{ path: "project", show: <NotFoundView /> },
		...projects.map((project) => ({ path: `project/${project.name}`, show: <ProjectView project={project} /> })),
		{ path: "*", show: <NotFoundView /> }
	];

	return (
		<main>
			<div class="stage"></div>
			<Router>
				{routes.map((route) => <Route path={route.path} show={route.show} />)}
			</Router>
		</main>
	);
};

App.style = css`
	:scope {
		margin: 0;
		/* was meaning to explore this beautiful world-style per-page lighting further.
		 basically, the homepage is pink, and project/member subpages are blue  - fish*/
		// --page-hs: 215, 30%;
		--page-hue: ${window.location.pathname === "/" ? "300" : "215"};
		--page-sat:  ${window.location.pathname === "/" ? "15%" : "35%"};
		--page-hs: var(--page-hue), var(--page-sat);
	}

	.stage {
		position: relative;
		min-height: 100vh;
		background: linear-gradient(
			180deg,
			hsl(var(--page-hs), 2%) 0%,
			hsl(var(--page-hs), 5%) 100%
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
		--beam-color: var(--page-hue), calc(var(--page-sat) * 3), 80%;
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