import { Component, createState, css, Stateful } from "dreamland/core";
import { Route, router, Router } from "dreamland/router";

import "./style.css";
import Homepage from "./pages/Homepage";
import MemberView from "./pages/MemberView";
import { members } from "./Members";
import NotFoundView from "./pages/404View";
import { projects } from "./Projects";
import ProjectView from "./pages/ProjectView";

let page: Stateful<{
	url?: string;
}> = createState({});

const App: Component<{}, {}> = function (cx) {
	cx.init = () => {
		if (import.meta.env.SSR) {
			router.route(page.url, "http://127.0.0.1:5173");
		} else {
			router.route();
		}
	};

	const routes = [
		{ path: undefined, show: <Homepage /> },
		{ path: "member", show: <NotFoundView /> },
		...members.map((member) => ({
			path: `member/${member.avatarName}`,
			show: <MemberView member={member} />,
		})),
		{ path: "project", show: <NotFoundView /> },
		...projects.map((project) => ({
			path: `project/${project.name}`,
			show: <ProjectView project={project} />,
		})),
		{ path: "*", show: <NotFoundView /> },
	];

	return (
		<main id="app">
			<div class="stage"></div>
			<div style="width: 0; height: 0; overflow: hidden;">
				<video
					id="clocks"
					class="glassy"
					disablepictureinpicture
					disableremoteplayback
				>
					<source src="/assets/clocks.mp4" type="video/mp4" preload="auto" />
				</video>
			</div>
			<Router>
				{routes.map((route) => (
					<Route path={route.path} show={route.show} />
				))}
			</Router>
		</main>
	);
};

App.style = css`
	:scope {
		margin: 0;
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
		--beam-color: var(--page-hue), calc(var(--page-sat) * 3), 90%;
		background:
			radial-gradient(
				ellipse at 50% 2%,
				hsla(var(--beam-color), 0.5) 0%,
				hsla(var(--beam-color), 0.2) 4%,
				hsla(var(--beam-color), 0.1) 9%,
				hsla(var(--beam-color), 0.05) 14%,
				transparent 28%
			),
			radial-gradient(
				ellipse at 50% 6%,
				hsla(var(--beam-color), 0.1) 0%,
				hsla(var(--beam-color), 0.05) 10%,
				hsla(var(--beam-color), 0.025) 26%,
				transparent 48%
			),
			conic-gradient(
				from 200deg at 50% 0%,
				hsla(var(--beam-color), 0.05) 0deg,
				hsla(var(--beam-color), 0.02) 22deg,
				transparent 80deg,
				hsla(var(--beam-color), 0.025) 200deg,
				transparent 360deg
			);
	}

	.stage::after {
		content: "";
		position: absolute;
		inset: 0;
		pointer-events: none;
		background:
			radial-gradient(
				ellipse at 50% 40%,
				transparent 30%,
				hsla(0, 0%, 0%, 0.45) 70%
			),
			linear-gradient(
				180deg,
				hsla(0, 0%, 0%, 0.05) 0%,
				hsla(0, 0%, 0%, 0.35) 100%
			);
	}

	#clocks {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(0turn) scale(0);
		transform-origin: center;
		padding: 1px;
		transition: transform 0.5s ease;
		visibility: hidden;
		box-shadow: 0 0 2rem 1rem hsla(var(--fg-raw), 0.2);
		border: none;
		border-radius: 1rem;
		z-index: 2;
	}

	#clocks.playing {
		transform: translate(-50%, -50%) rotate(1turn) scale(1);
		visibility: visible;
	}

	#clocks.ending {
		transform: translate(-50%, -50%) rotate(0turn) scale(0);
		visibility: visible;
	}
`;

export default (path?: string) => {
	page.url = path;
	return <App />;
};
