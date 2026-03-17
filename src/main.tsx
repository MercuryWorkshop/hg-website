import { css, type FC } from "dreamland/core";
import { Route,  Router } from "dreamland/router";

import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import MemberView from "./pages/MemberView";
import { members } from "./Members";
import NotFoundView from "./pages/404View";
import { projects } from "./Projects";
import ProjectView from "./pages/ProjectView";


function App(this: FC<{ url?: string }>) {
	return (
		<div id="app">
			<Router initial={this.url ? [this.url, "http://127.0.0.1:5173"] : []}>
				<Route layout={Layout}>
					<Route show={<Homepage />} />
					{...members.map((member) => (
						<Route
							path={`member/${member.avatarName}`}
							show={<MemberView member={member} />}
						/>
					))}
					{...projects.map((project) => (
						<Route
							path={`project/${project.name}`}
							show={<ProjectView project={project} />}
						/>
					))}
				</Route>
				<Route path="*" show={<NotFoundView />} />
			</Router>
			<div id="clock-container" style="width: 0; height: 0; overflow: hidden;">
				<video id="clocks" disablepictureinpicture disableremoteplayback>
					<source src="/assets/clocks.mp4" type="video/mp4" preload="auto" />
				</video>
			</div>
		</div>
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
		z-index: 10;
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

export default (url?: string) => <App url={url} />;