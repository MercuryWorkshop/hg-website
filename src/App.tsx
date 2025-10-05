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
		<app id="app">
			<Router>
				{routes.map((route) => (
					<Route path={route.path} show={route.show} />
				))}
			</Router>
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
		</app>
	);
};

App.style = css`
	:scope {
		margin: 0;
		--page-hs: var(--page-hue), var(--page-sat);
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
